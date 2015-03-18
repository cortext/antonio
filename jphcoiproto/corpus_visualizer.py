#!/usr/bin/env python2.7
# -*- coding: utf-8 -*-
__doc__='''Corpus Visualizer'''
import logging
import sqlite3, json, re
logger = logging.getLogger(__name__)
FORMAT = "[%(filename)s:%(lineno)s - %(funcName)20s() ] %(message)s"
logging.basicConfig(file="sqlconvert.log", format=FORMAT, level=logging.DEBUG)

class SQL2Json(object):
	def __init__(self, db_file):
		'''connect to db using .db file'''
		self.__connect__(db_file)
		self.tables = self.list_tables()
		self.data = {}

	def __connect__(self, filename):
		'''open sqlite cursor from .db'''
		logging.info("connecting to %s" %filename)
		self.filename = filename
		self.dbname = re.sub("\.db", "", filename)
		try:
			self.conn = sqlite3.connect(filename)
			self.curs = self.conn.cursor()
		except:
			 logging.warning("Failed to connect to dbfile %s. No such a file" %filename)


	def __close__(self):
		'''close current connection'''
		logging.info("Closing connection to db %s" %self.filename)
		return self.conn.close()

	def list_tables(self):
		'''list all the data in tables'''
		logging.info("Listing all existing tables in db")
		self.curs.execute("SELECT * FROM sqlite_master WHERE type='table';")
		self.tables = [t[1] for t in self.curs.fetchall()]
		logging.info(self.tables)
		return self.tables

	def get_values(self):
		'''store all the data and id of each row from all the table into a dict called data'''
		logging.info("Getting all the values of each tables")
		self.results = {}
		for tbl_name in self.tables:
			cmd = "SELECT id,data FROM %s" %tbl_name
			self.curs.execute(cmd)
			results = self.curs.fetchall()
			try:
				for item in results:

					xid, data = item
					if not xid in self.results.keys():
						#set the result item
						self.results[xid]={}

					self.results[xid].setdefault(tbl_name,[]).append(data)
					#logging.info(self.results[xid])
			except sqlite3.OperationalError:
				next(tbl_name)
		logging.info(self.results)
		return self.results

	def get_data(self):
		'''Export data'''
		logging.info("Getting all the data and store them")

		for xid in self.get_values():
			for tbl_name in self.tables:
				 if not tbl_name in self.data[xid]:
					 self.data[sid][tbl_name]=[]
		self.exported_data = {}
		self.exported_data['aaData']= self.data.values()
		self.__close__()
		logging.info(self.exported_data)
		return self.exported_data

	def export2json(self, file):
		'''write exported data into a json file called data_file'''
		logging.info("Exporting to json")
		self.get_data()
		try:
			self.jsonfile = open(file,'w')
			self.jsonfile.write(json.dumps(self.exported_data, sort_keys=True,indent=4, separators=(',', ': ')))
		except Exception as e:
			logging.warning(e)
		return self.jsonfile

	def build_html(self, page_name):
		'''from the json file create a table in html and in js called html_source'''
		logging.info("Building html")
		#Build DataProp js + Table
		pattern1,pattern2 ='',''
		for tbl_name in self.tables:
			pattern1 += '\t\t\t{ "mDataProp": "'+tbl_name + '" },\n'
			pattern2 += '\t\t\t<th>'+tbl_name + '</th>\n'
		pattern1=pattern1[:-2]
		try:
			self.html = open(page_name).read()
			self.html = self.html.replace('pattern1',pattern1)
			self.html = self.html.replace('pattern2',pattern2)
			return self.html
		except Exception as e:
			logging.warning(e)
			return None

	def export2html(self, page_name):
		'''export 2 an html page'''
		self.build_html(self, page_name)
		try:
			self.html_page = open(page_name,'w')
			self.html_page.write(self.html)
			self.html_page.close()
			return self.html_page
		except Exception as e:
			logging.warning(e)
			return None

if __name__ == "__main__":
	sql = SQL2Json('./cop-clean.db')
	sql.export2json("test.txt")
