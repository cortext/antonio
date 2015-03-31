#!/usr/bin/env python3 env
# -*- coding: utf-8 -*-
# file: esqlite.py
__doc__="Convert SQL to NoSQL"

import os, re
import sys
from database import Database
# from pyelasticsearch import ElasticSearch
# es = ElasticSearch('http://localhost:9200/')
import logging
logger = logging.getLogger(__name__)
FORMAT = "[%(filename)s:%(lineno)s - %(funcName)20s() ] %(message)s"
logging.basicConfig(file="esqlite.log", format=FORMAT, level=logging.DEBUG)


def connect2sqlite(dbfile):
	'''open sqlite db return data as a json object'''
	import sqlite3 as lite

	con = None
	try:
		con = lite.connect(dbfile)
		cur = con.cursor()
		cur.execute('ATTACH %s AS my_db;') %dbfile
		cur.execute("SELECT name FROM my_db.sqlite_master WHERE type='table';")
	    #cur.execute('SELECT SQLITE_VERSION()')
		data = cur.fetchall()
		for n in data:
			logging.info(n)
	    # print "SQLite version: %s" % data

	except (lite.Error, e):
		logging.warning('Unable to load database')
		logging.info('Check input db')
		loging.info("Error %s:" % e.args[0])
		sys.exit(1)

	finally:

	    if con:
	        con.close()
def list_tables(conn):
	c = conn.cursor()
	c.execute("SELECT * FROM sqlite_master WHERE type='table';")
	tables_list = []
	for t in c.fetchall():
		tables_list.append(t[1])

	return tables_list

def dump_values(conn):
	dict = {}
	with open('dump.sql', 'w') as f:
		for line in conn.iterdump():
			f.write('%s\n' % line)
			if line.startswith("BEGIN") or line.startswith("COMMIT"):
				pass
			elif line.startswith("CREATE TABLE"):
				dict = {}
				#CREATE TABLE ISIpubdate (file text, id integer, rank integer, parserank integer, data integer);
				m = re.match("CREATE\sTABLE\s(\w+)\s\((.*?)\);", line)
				if m is not None:
					table_name = (m.group(1))
					values = (m.group(2)).split(", ")
					for n in values:
						key, value = n.split(" ")[:]
						print(key,value)


				break
			else:
				pass
				'''
				row = (re.split("\"|\'|,", line))
				try:
					dict["type"] = row[1]
					dict["values"] = row[3:-1]
					print("type", dict["type"])
					print(dict["values"])
				except IndexError:
					pass
				'''



			#pattern
			#INSERT INTO "links" VALUES(\'rri1\'', '22', '0', '6', "'http://ec.europa.eu/programmes/horizon2020/en/what-horizon-2020');
			# regex = re.compile("INSERT\sINTO")
			# print(re.split("VALUES", line))

def connect2sql(database_name="example.db"):
	'''open sql db return data as a json object'''
	import sqlite3
	# name = re.sub("\.","", database_name)
	# db = Database(name)
	conn = sqlite3.connect(database_name)
	data_types = list_tables(conn)
	dump_values(conn)
	#db.create_colls(list_tables(conn))
	#List all values in DB
	# c = conn.cursor()
	# c.execute("SELECT * FROM sqlite_master WHERE type='table';")
	# print(c.fetchall())

	#SQL DUMPS
	# import psycopg2
	# import json
	#
	# db = psycopg2.connect(database=database_name)
	# cur = db().cursor()
	# query = "SHOW TABLES;"
	# cur.execute(query, args)
	# data = cur.fetchall()
	# print data
	# cur.connection.close()
	# return
	# results = [dict((cur.description[i][0], value) \
    #            for i, value in enumerate(row)) for row in cur.fetchall()]

    #return (r[0] if r else None) if one else r

	#results = query_db("select * from majorroadstiger limit %s", (3,))
	#json_output = json.dumps(my_query)
	#query= "SELECT * FROM parent_table t LEFT JOIN (SELECT * FROM child_table1 UNION ALL  SELECT * FROM child_table2 UNION ALL SELECT * FROM child_table<n> UNION ALL) t1 ON t.id = t1.id""

def read_csv(file, delim = ";"):
	'''open csv file return data as a dict'''
	import csv
	#csvreader
	with open(i, 'r') as fd:
		spamreader = csv.reader(csvfile, delimiter=delim)
		head = spamreader[0]
		print(head)
		for row in spamreader[1:]:
			print (', '.join(row))

def detect_type(i):
	'''detect input filetype csv db json and verify it exists'''
	extension = i.split(".")[-1]
	if extension in ["csv", "db", "json"]:
		return extension
	else:
		logging.warning('Incorrect file extension!')
		logging.info('Supports only csv, sqlite and json')
		return False

def upload_file(i):
	'''upload data corresponding to it's extension'''
	ext = detect_type(i)
	if ext is not False:
		try:
			if ext == "db":
				return connect(i)
			elif ext == "csv":
				return read(i)
				#csvreader
				#with open(i, 'r') as fd:
			else:
				pass
				#jsondumps
				#
		except IOError:
			logging.warning('No such file in directory!')
			logging.info('Check file')
			return False
	else:
		return
def convert2mongo(data):
	pass

def convert2json(data):
	'''transform into json'''
	# for n in data:
	# 	if type(n) == list:
	# 		for i in data:


	pass

def push_to_es(i):
	'''send to ES instance'''
	from pyelasticsearch import ElasticSearch
	es = ElasticSearch('http://localhost:9200/')
	pass

def dict_to_matrice(dict_data):
	pass

def file_to_matrice(dict_data):
	pass

def split_col(data, row, sep):
	'''split selected col into columns with sep'''
	pass

def merge_row(data, row1, row2):
	'''merge 2 rows into a list separated by coma'''
	pass

def remove_row(data, row):
	'''remove a complete row'''
	pass

def remove_col(data, col):
	'''remove a complete col'''
	pass

def add_row(data, row_pos):
	'''add a complete row'''
	pass
def add_col(data, col_pos):
	'''add a complete row'''
	pass

def remove_col(data, col):
	'''remove a complete row'''
	pass

def remove_cell(data,cell):
	'''remove one cell and up'''
	pass

def empty_cell(data, cell):
	'''empty cell'''
	pass

if __name__ == "__main__":
	connect2sql()
