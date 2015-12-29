
# -*- coding: utf-8 -*-
#file:corpus_explorer.py

import re, sqlite3
from sqlite3 import *
import logging
import json
from collections import defaultdict
#logger = logging.getLogger(__name__)
#FORMAT = "[%(filename)s:%(lineno)s - %(funcName)20s() ] %(message)s"
#logging.basicConfig(file="corpus_expo.log", format=FORMAT, level=logging.INFO)

class Convertor(object):
    def __init__(self, filepath):
        
        self.db_path = filepath
        if self.db_path.split(".")[-1] == "db":
            self.type = "sqlite"
            self.filter = set(["data", "id"])
        else:
            self.type = "json"
        
        self.conn, self.cursor = self.__connect__()
        self.select_tables()
        #self.filter_tables()
        self.build_schema()
        
    def __connect__(self):
        '''retrieving cursor for database'''
        if self.type == "sqlite":
            try:
                self.conn = sqlite3.connect(self.db_path)
                self.cursor = self.conn.cursor()
                return (self.conn, self.cursor)
            except:
                logging.warning("Failed to connect to dbfile %s. No such a file" %self.db_path)
                return False
        else:
            try:
                self.conn = MongoClient('mongodb://localhost,localhost:27017')
                self.cursor = self.conn[str(self.db_name)]
                return (self.conn, self.cursor)
            except:
                logging.warning("Failed to connect to dbfile %s. No such a file" %self.db_path)
                return False
                
    def store_schema(self):
        '''building the SQLITE instructions into a file'''
        if self.type == "sqlite":
            logging.info("building db schema from sqlite to JSON")
            self.schema = defaultdict(dict)
            cmd = "SELECT sql from sqlite_master WHERE type = 'table'"
            txt = []
            #print [n[0] for n in self.cursor.execute(cmd)]
            
            for table in self.tables:
                cmd = "SELECT sql from sqlite_master WHERE type = 'table' and name = '%s';" %table                
                txt.append([line[0][0] for line in self.cursor.execute(cmd)])
            self.txt_schema = "\n".join(txt)
        self.__close__()        
                
    def build_schema(self):
        '''building schema type'''
        if self.type == "sqlite":
            logging.info("building db schema from sqlite to JSON")
            self.schema = defaultdict(dict)
            for tbl_name in self.tables:
                cmd = "SELECT sql from sqlite_master WHERE type = 'table' and name = '%s';" %tbl_name
                keys = [line[0] for line in self.cursor.execute(cmd)]
                keys = [re.sub(r"\t|\n|\`", " ", n.decode("utf-8")) for n in keys]
                #~ print keys
                for line in keys:
                    col_type = line.split("(")[-1]
                    
                    col_list = re.split(",", re.sub("\)", "", col_type))
                    
                    col_list = [n.strip() for n in col_list]
                    col_list = [[d for d in n.split(" ") if d != u""] for n in col_list]
                    for n in col_list:
                        #print n
                        try:
                            if len(n) > 2:
                                self.schema[tbl_name][n[0]] = {"type": n[1], "default value": " ".join(n[2:])}
                            else:
                                self.schema[tbl_name][n[0]] = {"type": n[1]}
                        except IndexError:
                            #sqlite_sequence automatically done and not intersting
                            pass
            return self.schema
            
        if self.type == "json":
            logging.info("building db schema from JSON to sqlite")
            
                
            self.schema = defaultdict(dict)
            #self.tables =  [k for k,v in self.cursor.find_one()]
            for n in self.tables:
                self.cursor.find({n:{"$exists":True}}, {n:1, "id":1})
                
            #for item in self.cursor.find()
                
            return NotImplementedError

    def select_tables(self):
        '''get the tables names or the key of the datastore'''
        logging.info("select tables")
        self.tables = []
        if self.type == "sqlite":
            #self.tables_list = []
            for t in self.cursor.execute("SELECT * FROM sqlite_master WHERE type='table'"):
                self.tables.append(t[2])
            self.filter_tables()
        else:
            #to verify
            for k in (self.cursor.find()).iterkeys():
                self.tables.append(k)#to verify
            #self.tables_list = self.cursor.distinct("table")
        return self.tables
        
    def filter_tables(self):
        '''select only authorized table that contains data and id'''
        logging.info("filter tables")
        self.build_schema()
        #for xtable, tbl_name in enumerate(self.tables):
            #~ if "cluster" in tbl_name:
                #~ print "OK cluser", tbl_name
                #~ self.tables.pop(xtable)
            #print self.schema[tbl_name]
            #~ if set(["data", "id"]) <= set(self.schema[tbl_name].keys()):
                #~ self.tables.pop(xtable)
        return self.tables

    def convert2json(self):
        '''convert tabular data into a dict'''
        logging.info("building db values to JSON")
        self.data = defaultdict(dict)
        for tbl_name in self.tables:
            #print tbl_name
            #correspond a mon id
            ids = "SELECT id, data FROM %s" %tbl_name
            for id,data in self.cursor.execute(ids):
                self.data[id][tbl_name] = data
        return dict(self.data)
    
    def convert2sqlite(self):
        logging.info("building db values to SQLITE")
        return NotImplemented
    
    def convert(self):
        if type == "sqlite":
            return self.convert2json()
        else:
            return self.convert2sqlite()
        
    def __close__(self):
        '''close current connection'''
        if self.type == "sqlite":
            logging.info("Closing connection to db %s" %self.db_path)
            return self.conn.close()
#~ def main():
    #~ db = DBConvertor("./cop-clean.db")
    #~ db.__connect__()
    #~ db.select_tables()
    #~ db.build_schema()
    #~ print db.convert2json()
#~ 

    
