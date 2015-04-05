#!/usr/bin/env python2.7
# -*- coding: utf-8 -*-
#file:corpus_explorer.py

import re, sqlite3
from sqlite3 import *
import logging
from collections import defaultdict
logger = logging.getLogger(__name__)
FORMAT = "[%(filename)s:%(lineno)s - %(funcName)20s() ] %(message)s"
logging.basicConfig(file="corpus_expo.log", format=FORMAT, level=logging.INFO)

class DBConvertor(object):
	def __init__(self, filepath):
		self.db_path = filepath
		if self.db_path.split(".")[-1] == "db":
			self.type = "sqlite"
			self.filter = set(["data", "id"])
		else:
			self.type = "json"
		self.db_name = re.split("/|\.",filepath)[-2]

	def __connect__(self):
		'''retrieving cursor for database'''
		logging.info("Connecting to db %s" %self.db_path)
		if self.type == "sqlite":
			try:
				self.conn = sqlite3.connect(self.db_path)
				self.cursor = self.conn.cursor()
				logging.info("Connecting activated")
				return (self.conn, self.cursor)
			except:
				logging.warning("Failed to connect to dbfile %s. No such a file" %self.db_path)
				sys.exit()
		else:
			try:
				self.conn = MongoClient('mongodb://localhost,localhost:27017')
				self.cursor = self.conn[str(self.db_name)]
				logging.info("Connecting activated")
				return (self.conn, self.cursor)
			except:
				logging.warning("Failed to connect to dbfile %s. No such a file" %self.db_path)
				sys.exit()

	def __close__(self):
		'''close current connection'''
		if self.type == "sqlite":
			logging.info("Closing connection to db %s" %self.db_path)
			return self.conn.close()

	def build_schema(self):
		if self.type == "sqlite":
			logging.info("building db schema from sqlite to JSON")
			self.schema = defaultdict(dict)
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
			if set(["data", "id"]) <= set(self.schema[tbl_name].keys()):
				self.tables.pop(xtable)
		return self.tables

	def convert(self):
		if self.type == "sqlite":
			return self.convert2json()
		else:
			return self.convert2sqlite()
	def convert2json(self):
		logging.info("building db values to JSON")
		self.data = defaultdict(dict)
		for tbl_name in self.tables:
			#correspond a mon id
			print tbl_name
			ids = "SELECT id, data FROM %s" %tbl_name
			for id,data in self.cursor.execute(ids):
				self.data[id][tbl_name] = data
		return self.data

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
			self.filter_tables()
			if len(self.tables)  == 0:
				logging.warning("Database is empty!")
				sys.exit()
		else:
			#to verify
			for t in (self.cursor.find()).iterkeys():
				self.tables.append(t)#to verify
			if len(self.tables)  == 0:
				logging.warning("Database is empty!")
				sys.exit()
			#self.tables_list = self.cursor.distinct("table")
		return self.tables

def main():
	db = DBConvertor("./example.db")
	db.__connect__()
	db.select_tables()
	print db.convert()
main()
