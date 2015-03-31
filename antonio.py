#!/usr/bin/env python
# -*- coding: utf-8 -*-
__name__="Antonio"
__version__="0.0.1"

#for tests only 
#~ path_db = 

from sql2json import SQLConverter

def load_sqldb(path_db=None, id_db=None):
	'''From crawtext to Antonio: Load db from path_db and id'''
	#full_db_path = os.path.join(path_db, id_db)
	db = SQLConverter("./cop-clean.db")
	db.list_tables()
	db.get_data()
	db.convert()	

load_sqldb()
