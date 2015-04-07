#!/usr/bin/env python2.7
# -*- coding: utf-8 -*-
#file:convertor.py

import sys
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
				logging.warning("Failed to connect to db %s. No such a file" %self.db_path)
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
			return self.convert2json()
		else:
			return self.convert2sqlite()
	def convert2json(self):
		import json
		logging.info("Convert to JSON")
		print len(self.tables)
		self.data = defaultdict(dict)
		self.filter_tables()
		print len(self.tables)
		for tbl_name in self.tables:
			keys = self.schema[tbl_name].keys()
			ids = "SELECT id,data FROM %s" %tbl_name
			try:
				for xid,data in self.cursor.execute(ids):
					self.data[xid][tbl_name] = data
					#print self.data[xid]
			except sqlite3.OperationalError:
				#not necessary maybe but trying either
				print "error mapping ", tbl_name
				pass
		self.json_data = json.dumps(data, sort_keys=True,indent=4, separators=(',', ': '))
		print self.json_data
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

def Visualizor(object):
	def __init__(self, data):


def main():
	db = DBConvertor("./cop-clean.db")
	db.__connect__()
	db.select_tables()
	db.convert()
main()
