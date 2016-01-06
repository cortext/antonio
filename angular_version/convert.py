# -*- coding: utf-8 -*-
#file:corpus_explorer.py

import re, sqlite3
from sqlite3 import *
import logging
import json
from bson.json_util import dumps
from collections import defaultdict
from pymongo import MongoClient
#logger = logging.getLogger(__name__)
#FORMAT = "[%(filename)s:%(lineno)s - %(funcName)20s() ] %(message)s"
#logging.basicConfig(file="corpus_expo.log", format=FORMAT, level=logging.INFO)
import os.path

class Connector(object):
    def __init__(self, filepath):
        self.db_path = filepath
        self.db_name, self.db_type = self.db_path.split("/")[-1].split(".")
        #print self.db_type
        #self.filter = set(["data", "id"])
        #self.convert()
        self.__connect__()        
        if self.db_type == "db":
            self.data = self.to_cursor["data"]
            
            self.schema = self.to_cursor["schema"]
        else:
            self.data = self.cursor["data"]
            
            self.schema = self.cursor["schema"]
        
    def db_exists(self):
        if self.db_type == "json":
            return bool(self.db_name in self.conn.database_names())
        else:
            return bool(os.path.isfile(self.db_path))
    
    def format_data(self):
        '''return json'''
        return self.data.find({"_id":False})
        
    def __connect__(self):
        '''retrieving cursor for database'''
        
        if self.db_type == "json":
            #print ("#json ==> sqlite")
            
            self.conn = MongoClient('mongodb://localhost,localhost:27017')
            self.cursor = self.conn[str(self.db_name)]
            
            if self.db_exists():
                self.conn.drop_database(self.db_name)
            
            self.cursor = self.conn[str(self.db_name)]
            self.db_path = self.db_path.replace(".json", ".db")
            self.to_conn = sqlite3.connect(self.db_path)
            self.to_cursor = self.to_conn.cursor()
            
        elif self.db_type == "db":
            self.conn = sqlite3.connect(self.db_path)
            self.cursor = self.conn.cursor()
        
            self.to_conn = MongoClient('mongodb://localhost,localhost:27017')
            self.to_cursor = self.to_conn[str(self.db_name)]
            return (self.conn, self.cursor, self.to_conn, self.to_cursor)
            
    def import_json(self):
        with open(self.db_path, "r") as f:
            data = json.load(f)
        try:
            self.schema = data["shema"]
        except KeyError:
            self.schema = None
        try:
            self.data = [n for n in data["data"]]
        except KeyError:
            self.data = data
        return self
            
    def store_schema(self):
        '''building the SQLITE instructions into a file'''
        if self.db_type == "db":
            logging.info("building db schema from sqlite to JSON")
            self.schema = defaultdict(dict)
            cmd = "SELECT sql from sqlite_master WHERE type = 'table'"
            txt = []
            for table in self.tables:
                cmd = "SELECT sql from sqlite_master WHERE type = 'table' and name = '%s';" %table
                #print [line[0] for line in self.cursor.execute(cmd)]
                txt.extend([line[0] for line in self.cursor.execute(cmd)])
            txt = "\n".join(txt)
            schema_f = "/".join(self.db_path.split(".")[:-1])+"_schema.txt"
            with open(schema_f, "w") as f:
                f.write(txt)
        self.__close__()    
                
    def build_schema(self):
        '''building schema type'''
        if self.db_type == "db":
            logging.info("building db schema from sqlite to JSON")
            self.schema = []
            for tbl_name in self.tables:
                
                cmd = "SELECT sql from sqlite_master WHERE type = 'table' and name = '%s';" %tbl_name
                key = [line[0] for line in self.cursor.execute(cmd)][0]
                
                key = re.sub(r"\t|\n|\`", " ", key.decode("utf-8")) 
                data = {tbl_name:[]}
                #print data
                values = re.split(", ", re.split("\(|\)",key)[1])
                for item in values:
                    try:
                        k,v = item.split(" ")
                        #fieldname, fieldtype
                        data[tbl_name].append({"fieldname":k, "fieldtype":v})
                    except:
                        k, v, default_value = item.split(" ")
                        data[tbl_name].append({"fieldname":k, "fieldtype":v, "default_value":default_value})
                self.schema.append(data)
            self.to_cursor["schema"].insert_many(self.schema)
        else:
            #retrieve from mongo
            self.schema = self.to_cursor["schema"]
            #~ if self.type == "json":
            #~ logging.info("building db schema from JSON to sqlite")
            #~ 
                #~ 
            #~ self.schema = defaultdict(dict)
            #~ #self.tables =  [k for k,v in self.cursor.find_one()]
            #~ for n in self.tables:
                #~ self.cursor.find({n:{"$exists":True}}, {n:1, "id":1})
                #~ 
            #~ #for item in self.cursor.find()
                #~ 
            #~ return NotImplementedError
        return self.schema
            
        

    def select_tables(self):
        '''get the tables names or the key of the datastore'''
        logging.info("select tables")
        self.tables = []
        if self.db_type == "db":
            #self.tables_list = []
            self.conn = sqlite3.connect(self.db_path)
            self.cursor = self.conn.cursor()
            for t in self.cursor.execute("SELECT * FROM sqlite_master WHERE type='table'"):
                self.tables.append(t[2])
            #self.filter_tables()
        else:
            #to verify
            
            self.tables = self.cursor["data"].find_one().keys()
            #print self.tables
            schema = []
            print self.cursor["schema"].find_one()
                
                
                #~ for k in i.keys():
                    #~ schema.append(k)
            #~ 
            #~ 
            #~ print schema
                #~ self.tables.append(k)#to verify
            #self.tables_list = self.cursor.distinct("table")
        return self.tables
        
    def filter_tables(self):
        '''select only authorized table that contains data and id'''
        logging.info("filter tables")
        self.build_schema()
        for xtable, tbl_name in enumerate(self.tables):
            if "cluster" in tbl_name:
                #print "OK cluser", tbl_name
                self.tables.pop(xtable)
            #~ #print self.schema[tbl_name]
            if set(["data", "id"]) <= set(self.schema[tbl_name].keys()):
                self.tables.pop(xtable)
        return self.tables
    
    def convert2mongo(self):
        self.convert2json()
        
        try:
            self.conn = MongoClient('mongodb://localhost,localhost:27017')
            self.cursor = self.conn[str(self.db_name)]
            
            
        except:
            logging.warning("Failed to connect to dbfile %s. No such a file" %self.db_name)
            print "Not connected to", self.db_name
            return {"data":[]}
        
        #self.cursor["schema"].insert_many(self.schema)
        self.cursor["data"].insert_many(self.data)
        logging.info("Inserted %i rows into data collection of db %s" %(self.cursor["data"].count(), self.db_name))
        #self.cursor["data_editor"].insert_one(self.final_data)
        return self
        
    def convert2json(self):
        '''convert tabular data into a list of dict'''
        logging.info("building db values to JSON")
        self.data = defaultdict(dict)
        for tbl_name in self.tables:
            #correspond a mon id
            ids = "SELECT id, data FROM %s" %tbl_name
            self.conn = sqlite3.connect(self.db_path)
            self.cursor = self.conn.cursor()
            for tid,data in self.cursor.execute(ids):
                if type(data) == int:
                    self.data[tid][tbl_name] = str(data)
                else:
                    self.data[tid][tbl_name] = data
        final_dt = []
        for rid, row in self.data.items():
            final_dt.append(row)
        self.data = final_dt
        
        self.__close__()
        return self
        
    def convert2sqlite(self):
        for n in self.data["schema"].find():
            print n
        raise NotImplementedError
        #~ #self.convert2json()
        #~ logging.info("building db values to SQLITE")
        #~ self.final_dt = {"data":[self.data]}
        #~ return self.final_dt
    
    def convert(self):
        print ("Converting")
        if self.db_exists():
            self.__connect__()
            self.select_tables()
            self.build_schema()
            #self.store_schema()
        
        
            
            if self.db_type == "db":
                self.convert2mongo()
                self.data = self.to_cursor["data"]
                self.schema = self.to_cursor["schema"]
                
            else:
                self.convert2sqlite()
                self.data = self.cursor["data"]
                self.__close__()
            return self
        else:
            raise Exception("Database not found")
    
    def __close__(self):
        '''close current connection'''
        if self.db_type == "db":
            logging.info("Closing connection to db %s" %self.db_path)
            return self.conn.close()


if __name__=="__main__":
    pass
