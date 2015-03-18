#!/usr/bin/env python
# -*- coding: utf-8 -*-

import os, sys
reload(sys)
sys.setdefaultencoding("utf-8")
#SQLITE
from sqlite3 import *
#sys.path.append("../pylibrary")
#from path import *
#import fonctions

import sqlite3
import shutil

#print 'user_parameters',user_parameters
#parameters_user=fonctions.load_parameters(user_parameters)

#####PARAMETERS
#~ try:
	#~ authorized_tables=parameters_user.get('authorized_tables',None)
	#~ data_source = parameters_user.get('corpus_file','')
	#~ result_path=parameters_user.get('result_path','')
#~
#~ except:
	#~ data_source='sources/cop-clean.db'
	#~ authorized_tables = None
authorized_tables = ['City','ISIpubdate','ENB_ref','Country','text']
	#~ result_path = "/Users/jpcointet/Desktop/reader/example"
#####FUNC
def dict_factory(cursor, row):
	d = {}
	for idx, col in enumerate(cursor.description):
		print col
		d[col[0]] = row[idx]
		print d
	return d



#####CODE
data_source = "./cop-clean.db"
print 'trying to open', data_source
connection = sqlite3.connect(data_source)
connection.row_factory = dict_factory



cursor = connection.cursor()

cursor.execute("SELECT * FROM sqlite_master WHERE type='table'")
results = cursor.fetchall()

table_list=[]
for x in results:
	print x
	tbl_name=x['tbl_name']
	print tbl_name
	if not authorized_tables==None:
		if tbl_name in authorized_tables:
			table_list.append(tbl_name)
	else:
		table_list.append(tbl_name)
sys.exit()
print table_list
data={}
for tbl_name in table_list:
	try:
		cursor.execute("select id,data from "+tbl_name )#+ ' limit 100 ')
		results = cursor.fetchall()
		for res in results:
			id = res['id']
			dat = res['data']
			if not id in data:
				data[id]={}
			data[id].setdefault(tbl_name,[]).append(dat)
	except:
		pass
	#print results

for id in data:
	for tbl_name in table_list:
		 if not tbl_name in data[id]:
			 data[id][tbl_name]=[]
data_final = {}
data_final['aaData']=data.values()
connection.close()


import json

try:
	os.mkdir(os.path.join(result_path,'sources'))
except:
	pass
data_sources = os.path.join(os.path.join(result_path,'sources'),'deep.txt')
feed=open(data_sources,'w')
#feed = open('sources/deepm2.txt','w')
feed.write(json.dumps(data_final, sort_keys=True,indent=4, separators=(',', ': ')))

pattern1,pattern2 ='',''
for tbl_name in table_list:
	pattern1 += '\t\t\t{ "mDataProp": "'+tbl_name + '" },\n'
	pattern2 += '\t\t\t<th>'+tbl_name + '</th>\n'
pattern1=pattern1[:-2]

html_source=open("template_explorer.html").read()
html_source=html_source.replace('pattern1',pattern1)
html_source=html_source.replace('pattern2',pattern2)

feed = open(os.path.join(result_path,'reader.html'),'w')
feed.write(html_source)
feed.close()


# { "mDataProp": "City" },
# { "mDataProp": "ENB_ref" },
# { "mDataProp": "ISIpubdate" },
# { "mDataProp": "Country" },
# { "mDataProp": "text" }


# pattern2
# <th>Rendering engine</th>
# <th>Browser</th>
# <th>Platform(s)</th>
# <th>Engine version</th>
# <th>CSS grade</th>

#shutil.copy("template_explorer.html",os.path.join(result_path,'reader.html'))
