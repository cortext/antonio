#!/usr/bin/env python2.7
# -*- coding: utf-8 -*-
#file:convertor.py

import sys, os
import re, sqlite3
from sqlite3 import *
import logging
from database import Database
from collections import defaultdict, OrderedDict
logger = logging.getLogger(__name__)
FORMAT = "[%(filename)s:%(lineno)s - %(funcName)20s() ] %(message)s"
logging.basicConfig(file="corpus_expo.log", format=FORMAT, level=logging.INFO)

class Db(object):
	def __init__(self, filepath, name=None):
		self.db_path = filepath
		path_name = re.split(re.compile("\.|\/"), self.db_path)
		self.name = path_name[-2]
		if path_name[-1] == "db":
			self.type = "sqlite"
			self.filter = set(["data", "id", "rank", "parse_rank"])

	def __connect__(self):
		'''retrieving cursor for database'''
		logging.info("Connecting to db %s" %self.db_path)
		if self.type == "sqlite":
			try:
				self.conn = sqlite3.connect(self.db_path)
				self.cursor = self.conn.cursor()
				logging.info("Contact establihed! Hold on!")
				return (self.conn, self.cursor)
			except:
				logging.warning("Failed to connect to db %s. No such a file" %self.db_path)
				return False
		else:
			try:
				#using Database Object
				self.conn = Database(self.db_name)
				self.cursor = self.conn.use_coll("data")
				#self.conn = MongoClient('mongodb://localhost,localhost:27017')
				#self.cursor = self.conn[str(self.db_name)]
				print self.cursor
				logging.info("Connection activated. Please HOLD ON!")
				return (self.conn, self.cursor)
			except:
				logging.warning("Failed to connect to dbfile %s. No such a file" %self.db_path)
				return False

	def __close__(self):
		'''close current connection'''
		if self.type == "sqlite":
			logging.info("Closing connection to db %s" %self.db_path)
			return self.conn.close()

	def exists(self):
		''' check if JSON version has already been created '''
		db = Database(self.name)
		try:
			if db.data.count() > 0:
				return True
		except AttributeError:
			if os.path.isfile(self.name+".json"):
				return True
			else:
				return False

	def build_schema(self):
		sorted_keys = OrderedDict()
		if self.type == "sqlite":
			logging.info("building db schema from sqlite to JSON")
			self.schema = defaultdict(sorted_key)
			for table in self.tables:
				cmd = "SELECT sql from sqlite_master WHERE type = 'table' and name = '%s';" %table
				keys = [line[0] for line in self.cursor.execute(cmd)]
				for line in keys:
					values = re.search("\((.*?)\)", repr(line))
					#cleaning special CREATE INSTANCE with \n and \t
					values = re.sub(r"\\t|\\n|\\", "", repr(values.group(1)))
					values = re.sub("\`", " ", values)
					if values is not None:
						for n in re.finditer("(\s)?(?P<key>\w*)\s(?P<type>\w*)", values):
							self.schema[table][n.group('key')] = n.group('type')
			return self.schema
		if self.type == "json":
			logging.info("building db schema from JSON to sqlite")
			pass
			return NotImplemented

	def filter_tables(self):
		'''select only authorized table that contains data and id'''
		logging.info("filter tables")
		self.build_schema()

		for xtable, tbl_name in enumerate(self.tables):
			keys_list = set(self.schema[tbl_name].keys())
			print tbl_name, self.filter <= keys_list, keys_list
			if len(keys_list) == 0:
				print "removing", tbl_name
				self.tables.pop(xtable)
			elif self.filter <= keys_list:
			#	print self.filter <= keys_list, tbl_name, keys_list
				pass
			else:
				print "removing", tbl_name
				self.tables.pop(xtable)
		return self.tables

	def convert(self):
		logging.info("Convert")
		if self.type == "sqlite":
			if self.exists() is False:
				return self.convert2json()
			else:
				self.send2MongoDB()
		else:
			return self.convert2sqlite()

	def convert2json(self):
		import json
		logging.info("Convert to JSON")
		self.data = defaultdict(OrderedDict())
		self.filter_tables()
		for tbl_name in self.tables:
			#keys = self.schema[tbl_name].keys()
			ids = "SELECT id,data FROM %s" %tbl_name
			try:
				for row_id,data in self.cursor.execute(ids):
					self.data[row_id][tbl_name] = data
					#print self.data[xid]
			except sqlite3.OperationalError:
				#not necessary ???
				logging.warning("error mapping %s" %tbl_name)
				pass
		self.json_data = json.dumps(self.data, sort_keys=True,indent=4)
		#self.__close__()
		return self.json_data

	def sort_data(self):
		self.cols = []
		for items in self.data.values():
			for col in items.keys() :
				self.cols.append(col)
			break
		self.values = [line.values() for line in self.data.values()]
		print len(self.cols), len(self.values)
		return (self.cols, self.values)


	def writejson2file(self):
		self.json_data = json.dumps(self.data,sort_keys=False,indent=4)
		with open(self.name+".json", "w") as f:
			print "Writing"
			f.write(self.json_data)
		return self.name

	def send2MongoDB(self):
		db = Database(self.name)

		for row in self.data:
			db.data.insert(row)
		return db.name


	def convert2sqlite(self):
		logging.info("building db values to SQLITE")
		return NotImplemented

	def select_tables(self):
		logging.info("select tables")
		self.tables = []
		if self.type == "sqlite":
			self.tables_list = []
			for t in self.cursor.execute("SELECT * FROM sqlite_master WHERE type='table'"):
				self.tables.append(t[2])
			if len(self.tables)  == 0:
				logging.warning("Database is empty!")
				return False
		else:
			#to verify
			for t in (self.cursor.data.find()).iterkeys():
				self.tables.append(t)#to verify
			if len(self.tables)  == 0:
				logging.warning("Database is empty!")
				return False
			#self.tables_list = self.cursor.distinct("table")
		return self.tables


# def main():
# 	db = DBConvertor("./cop-clean.db")
# 	db.__connect__()
# 	db.select_tables()
# 	db.convert()
# main()
