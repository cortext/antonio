#!/usr/bin/env python
# -*- coding: utf-8 -*-
#file:convert.py

import sqlite3
import re
import logging
import json
from database import Database
logger = logging.getLogger(__name__)
FORMAT = "[%(filename)s:%(lineno)s - %(funcName)20s() ] %(message)s"
logging.basicConfig(file="sqlconvert.log", format=FORMAT, level=logging.DEBUG)
__doc__='''Utility to mapping SQL file into a JSON file'''
# for test purpose
result_path = "./"
#for test purpose: from form selected TABLES
SELECTED_TABLES = []

class SQLConverter(object):
	def __init__(self, filename):
		'''connect to db using .db file'''
		self.conn = sqlite3.connect(filename)
		self.filename = filename
		self.dbname = re.sub("\.db", "", filename)
		self.data = {}

	def __connect__(self, filename):
		try:
			self.conn = sqlite3.connect(filename)
		except:
			 logging.warning("Failed to connect to dbfile %s. No such a file" %filename)

	def __close__(self):
		'''close current connection'''
		logging.info("Closing connection to db %s" %self.filename)
		return self.conn.close()

	def list_tables(self):
		'''list all autorized tables that has id and data in it and are in SELECTED_TABLE'''
		curs = self.conn.cursor()
		curs.execute("SELECT * FROM sqlite_master WHERE type='table';")
		#print len([t[1] for t in curs.fetchall()])
		self.tables = list()
		for t in curs.fetchall():
			if bool(set(self.get_keys(t[1])) & set(['data', 'id'])) and t[1] not SELECTED_TABLES:
				self.tables.append(t[1])
		return self.tables

	def get_values(self,key, table):
		curs = self.conn.cursor()
		cmd = "SELECT %s FROM %s;" %(key,table)
		curs.execute(cmd)
		self.values = [v[0] for v in curs.fetchall()]
		return self.values

	def get_keys(self, table):
		curs = self.conn.cursor()
		cmd = "SELECT sql from sqlite_master WHERE type = 'table' and name = '%s';" %table
		curs.execute(cmd)
		line = curs.fetchone()[0]
		self.keys = []
		self.data_type = []
		raw_keys = re.search("\((\s)?(.*?)(\s)?\)", line)
		if raw_keys is not None:
			keys = raw_keys.group(2).split(", ")
			for k in keys:
				key_list = k.split(" ", 1)
				try:
					self.data_type.append(key_list[1])
					self.keys.append(key_list[0])
				except IndexError:
					self.keys.extend(k.split(","))
					for k in k.split(","):
						self.data_type.append(" ")
		return self.keys

	def get_data(self,table):
		self.data_list= []
		curs = self.conn.cursor()
		cmd = "SELECT id,data FROM %s" %(table)
		try:
			curs.execute(cmd)
			self.data_list = [(n[0], n[1]) for n in curs.fetchall()]
			return self.data_list
		except sqlite3.OperationalError as e:
			logging.info(e)
			return None

	def populate_items(self, _id, table):
		output = {}
		curs = self.conn.cursor()
		cmd = "SELECT * FROM %s WHERE id='%d';" %(table, _id)
		self.get_keys(table)
		try:
			curs.execute(cmd)
			output[_id] = {"tables": self.tables}
			for n in curs.fetchall():
				data = zip(self.keys,list(n))
				output[_id] = [{k:v} for k,v  in data]

		except sqlite3.OperationalError:
			cmd = "SELECT * FROM %s WHERE _id='%d';" %(table, _id)
			try:
				curs.execute(cmd)
				for n in curs.fetchall():
					data = zip(self.keys,list(n))

					id = [{k:v} for k,v  in data]
			except sqlite3.OperationalError:
				cmd = "SELECT * FROM %s WHERE id0='%d';" %(table, _id)
				try:
					curs.execute(cmd)
					for n in curs.fetchall():
						data = zip(self.keys,list(n))
						print [{k:v} for k,v  in data]
				except sqlite3.OperationalError:
					print "Warning, DB_table %s has no id" %table

	def export2json(self):
		data = {}
		#Lister l'ensemble des clés (les headers de chaque colonne)
		for tid, table in enumerate(self.tables):
			for xid,xdata in enumerate(self.get_data(table)):
				data[xid] = {"tbl_name": table,"tid":tid, "id":xid, "data": xdata}


		data_sources = "deep.txt"
		feed=open(data_sources,'w')
		#feed = open('sources/deepm2.txt','w')
		feed.write(json.dumps(data, sort_keys=True,indent=4, separators=(',', ': ')))


	def populate(self):
		'''Retourner n'imprte quel objet selon son unité minimale de stockage'''
		data = {}
		#mapping data
		for table in self.tables:
			for tid,values in self.get_data(table):
				#print "id_table",tid, values
				# data[tid] = {"tbl_name": table, "tid":tid, "data": values}
				for kid, k in enumerate(self.get_keys(table)):
					#print "Key", k
					for vid, v in enumerate(self.get_values(k,table)):
						#numero de table, numero de clé, numero de valeur, clé, valeur
						print {"table_id":tid,"table_name": table, "key_id": kid,"key":k, "value_id":vid, "value":v}
						# data[vid].update({k:v})
						# with open("deep.txt", "w") as f:

				# print data[xid]
		#export to file
		# data_sources = "deep.txt"
		# feed=open(data_sources,'w')
		# #feed = open('sources/deepm2.txt','w')
		# feed.write(json.dumps(data, sort_keys=True,indent=4, separators=(',', ': ')))
		return






if __name__=="__main__":
	pass
	#~ db = SQLConverter("cop-clean.db")
	#~ db.populate()
