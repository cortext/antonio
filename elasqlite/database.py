#!/usr/bin/env python3 env
# -*- coding: utf-8 -*-
# file: database.py
__doc__="Python Wrapper for MongoDB for DB Backend and Task Manager"

#Need Pymongo for Python3 
# import pymongo
# from pymongo import MongoClient
# from pymongo import errors

import re
from datetime import datetime
import logging
#secret not so secret
import hashlib
import random
import string
import os
PROJECT_PATH = os.getcwd()
result_path = os.path.join(PROJECT_PATH,'static/datasets')


class Database(object):
	def __init__(self, database_name,debug=False):
		self.client = MongoClient('mongodb://localhost,localhost:27017')
		self.debug = debug
		self.use_db(database_name)
		self.creation_date = datetime.now()
		logging.info("Db init: %s" %self.db_name)

	#DATABASE
	def use_db(self, database_name):
		''' use db return Database Object
		>>> db = Database('test_db')
		>>> print db.use_db('test_db')
		Database(MongoClient('localhost', 27017), u'test_db')
		'''
		self.db_name = database_name
		self.db = self.client[str(database_name)]
		return self.db

	def drop_db(self, db=None):
		'''Delete the database
		>>> db = Database("cortext_manager")
		>>> print db.drop_db()
		None
		'''
		if db is not None:
			self.db_name = db
		logging.info("Deleted %s database" %(self.db_name))
		return self.client.drop_database(self.db_name)

	def list_dbs(self):
		'''Listing the existing database
		>>> db = Database('test_db')
		>>> assert type(db.list_dbs()) == list
		'''
		return self.client.database_names()

	def show_dbs(self):
		'''Show the existing databases stored in Mongo'''
		dbs = self.list_dbs()
		print("%i Databases" %len(dbs))
		print("====")
		for db in dbs:
			print("-", db, self.sys_stats(db))
		return dbs

	def drop_all_dbs(self):
		'''remove EVERY SINGLE MONGO DATABASE
		>>> db = Database('test_db')
		>>> db.drop_all_dbs()
		>>> print db.list_dbs()
		None
		'''
		dbs = self.list_dbs
		for n in dbs:
			self.drop_db(n)
		logging.debug("Deleted %i databases") %len(dbs)
		return True

	def set_coll(self, coll=None):
		'''Return defaut coll
		>>> db = Database('test_db')
		>>> print db.set_coll("test")
		Collection(Database(MongoClient('localhost', 27017), u'test_db'), u'test')
		'''
		if coll is not None:
			self.coll = self.db[str(coll)]
		return self.coll

	def drop_coll(self, coll=None, db = None):
		'''Delete collection. If collection/db is not specified applyied to current collection/db
		>>> db = Database("test_db")
		>>> db.set_coll("test")
		>>> db.drop_coll("test")
		True

		'''
		if db is not None:
			self.use_use(db)
		if coll is not None:
			self.use_coll(coll)
		return self.drop(type="collection", name=name) is not None

	def create_coll(self, coll_name):
		setattr(self, coll_name, self.db[str(coll_name)])
		return

	def create_colls(self, coll_names=["logs", "users", "roles", "tasks"]):
		'''Like set colls create new collections'''
		for n in coll_names:
			self.create_coll(n)
		return self.list_colls()

	def list_colls(self, db_name=None):
		'''List the collection of a given db, defaut is current
		>>> db = Database('test_db')
		>>> print type(db.list_colls())
		<type 'list'>
		'''
		if db_name is None:
			return self.db.collection_names()
		else:
			db = self.use_db(db_name)
			return db.collection_names()

	def show_colls(self):
		'''List all the existing collection stored in the current MongoDB'''
		colls = self.list_colls()
		try:
			for c in colls:
				print("|")
				print("-- ", c)
			return colls
		except:
			print("No collections available")
			return None
	#From Cork MongoDBBackend
	def create_index(self, key_name, coll=None):
		'''Create collection index using defaut coll if not specified
		>>> db = Database("test_db")
		>>> db.create_coll("users")
		>>> print db.create_index("login", coll="users")
		login_1
		>>> db.drop_db("test_db")
		'''
		if coll is not None:
			self.use_coll(coll)
		return self.coll.create_index(key_name, drop_dups=True, unique=True,)


	#ITEMS
	def show_items(self, coll=None):
		'''List the items stored in a given collection'''
		if coll is None:
			for i in self.list_colls():
				c = self.use_coll(i)
				print("|")
				print("--", i)
				for item in c.find():
					print("\t|")
					print("\t--", item)
		else:
			try:
				c = self.use_coll(coll)
				print("|")
				print("--", coll)
				for item in c.find():
					print("\t|")
					print("\t--", item)
				return [item for item in c.find()]
			except:
				return None
	def count(self, coll=None):
		'''Count items into a collection if collection is not specified count on active collection
		>>> db = Database("test_db_3")
		>>> db.set_colls(["test"])
		>>> db.test.insert({"a":1, "b":2})
		>>> test.insert({"c":3, "d":2})
		>>> db.test.insert({"d":1, "a":2})
		>>> db.count("test")
		3
		>>> db.drop("database","test_db_3")
		'''
		if coll is not None:
			c = self.use_coll(coll)
			return c.count()
		else:
			return self.coll.count()

	def distinct(self, coll=None):
		''' List dictinct items into a collection if collection is not specified count on active collection
		>>> db = Database("test_db_4")
		>>> db.set_colls(["test"])
		>>> db.test.insert({"a":1, "b":2})
		>>> db.test.insert({"c":3, "d":2})
		>>> db.test.insert({"a":1, "b":2})
		>>> db.test.insert({"a":1, "b":2})
		>>> db.test.insert({"d":1, "a":2})
		>>> print len(db.dictinct("test"))
		3
		>>> db.drop("database","test_db_4")
		'''
		if coll is None:
			return set([n for n in self.coll.find()])
		else:
			c = self.use_coll(coll)
			return set([n for n in c.find()])


	def search_items(self, data, coll=None):
		''' Search items matching with the given data
		>>> db = Database("test_db")
		>>> db.set_coll("test")
		Collection(Database(MongoClient('localhost', 27017), u'test_db'), u'test')
		>>> db.coll.insert({"a":1, "b":2, "c":4}) is not None
		True
		>>> db.coll.insert({"a":8, "b":2, "c":14}) is not None
		True
		>>> print db.search_items({"b":1})
		[]
		>>> print len(db.search_items({"b":2}))
		2
		>>> db.set_coll("data")
		Collection(Database(MongoClient('localhost', 27017), u'test_db'), u'data')
		>>> db.coll.insert({"a":4, "b":2, "c":2}) is not None
		True
		>>> print len(db.search_items({"b":2}))
		1
		'''
		matching_items = []
		if coll is not None:
			self.use_coll(coll)

		if type(data) == dict:
			#print "collection %s has %i matching items" %(coll, len(coll.find(data)))
			try:
				for n in self.coll.find(data):
					#~ print "-", n
					matching_items.append(n)
				logging.info("Search_items: collection %s has %i matching items" %(self.coll.name, len(matching_items)))

				return matching_items
			except AttributeError:
				logging.debug("Search_items:defaut collection %s has no matching items" %(self.coll))
				return []

		elif type(data) == str:

			try:
				for n in self.coll.find():
					for k, v in n.items():
						if type(v) == str:
							try:
								item = self.coll.find_one({k: data})
								matching_items.append(item)
							except:
								pass
						else:
							continue
			except AttributeError:
				return None
			if len(matching_items) == 0:
				#print "No matching items"
				logging.debug("Search_items:collection %s has no matching items" %(self.coll.name))
				return []
			else:
				return matching_items
		else:
			#print "Incorrect filter for search"
			logging.warning("Search_items: Incorrect filter for search")
			return []

	def delete_items(self, data,coll=None):
		''' delete items with filter data
		>>> db = Database("test_db")
		>>> db.use_coll(test)
		>>> print db.show_coll()
		>>> db.test.insert({"a":1, "b":2})
		>>> db.test.insert({"c":3, "d":2})
		>>> db.test.insert({"a":1, "b":4})
		>>> db.delete_items({"a":1, "b":4})
		>>> match = db.search_items({"b":4}, "test")
		>>> print match
		None
		>>> db.drop("database","test_db")
		'''
		if coll is None:
			coll = self.coll
		for i in self.search_items(data, coll):
			coll.remove(i)

	def add_value(self, filter, data, coll=None):
		''' add a  value for every items of a given collection matching with filter
		>>> db = Database("test_db")
		>>> db.set_coll("test")
		Collection(Database(MongoClient('localhost', 27017), u'test_db'), u'test')
		>>> print db.test.insert({"a":1, "b":2}) is not None
		True
		>>> print db.test.insert({"c":3, "d":2}) is not None
		True
		>>> print db.test.insert({"a":1, "b":4}) is not None
		True
		>>> db.add_value({"a":1},{"active":True})
		True
		>>> items = db.search({"active":True})
		>>> print len(items)
		2
		>>> db.drop("database","test_db")
		'''
		if coll is not None:
			self.use_coll(coll)
		if type(data) != str:
			for i in self.search_items(filter, self.coll):
				self.coll.update({"_id":i["_id"]},{"$set":data}, timeout=False)
			return  True
		else:
			logging.debug("Add_value: wrong data_type: 'str' " %self.db_name)
			return False
	#GLOBAL
	def drop(self, type=None, name=None):
		''' drop database or collection
		>>> db = Database("test_db)
		>>> db.drop()
		>>> db.drop(name="data")
		>>> db.drop("collection", "test")
		>>> db.drop("coll", "test")
		>>> db.drop("database", "test_db")
		>>> db.drop("db", "test_db")
		'''
		if name is None and type is None:
			logging.debug("Deleted  %s database" %self.db_name)
			return self.drop_db()
		elif type is None and name is not None:
			for coll in self.list_colls():
				if coll == name:
					return self.drop(type="collection", name=name)

			for db in self.list_dbs():
				if db == name:
					return self.drop_db(type="database", name=name)
		elif type is not None and name is None:
			return self.drop(type=None, name=type)
		elif type == "collection" or type == "coll":
			self.db[str(name)].drop()
			delattr(self, str(name))
			logging.debug("Deleted %s collection of %s database" %(name, self.db_name))
			return True
		elif type == "database" or type =="db":
			self.client.drop_database(str(name))
			logging.debug("Deleted  %s database"  %(self.db_name))
			return True
		else:
			logging.debug("Wrong type for db %s"  %(self.db_name))
			return False

	def search(self, data):
		'''Search matching item into every collection
		>>> db = Database("test_db")
		>>> db.create_colls(["test3", "data2", "data5"]) is not None
		True
		>>> db.data5.insert([{"name":"titi"},{"name":"tutu"},{"name":"titi"}]) is not None
		True
		>>> db.data2.insert([{"name":"toto"},{"name":"tata"},{"name":"titi"}]) is not None
		True
		>>> db.test3.insert([{"zip":"75009"},{"zip":"93250"},{"name":"titi"}]) is not None
		True
		>>> print len(db.search({"name": "titi"}))
		4
		'''
		logging.info("search: Search_items within a special collection")
		if type(data) == str:
			logging.warning("search: data mus be a dict")
			return (None, None)
		matching_items = []
		matching_colls = []
		for c in self.list_colls():

			item = (self.db[str(c)]).find(data)
			if item is not None:
				matching_colls.append(c)
				matching_items.append(item)
		if len(matching_items) != 0:
			logging.info("search: found matching items")
			return zip(matching_colls, matching_items)
		else:
			return (None, None)


	def __len__(self):
		''' Return size of the collection'''
		return self.coll.count()

	def __contains__(self, key_name, value):
		'''Check if key and value are present in active collection
		>>> db = Database("test_db")
		>>> db.use_coll("test")
		>>> db.test.insert([{"zip":"75009"},{"zip":"93250"},{"name":titi}])
		>>> print db.__contains__("name", "titi")
		True
		>>> print db.__contains__("name", "tutu")
		False
		'''
		r = self.coll.find_one({key_name: value})
		return r is not None

	def __iter__(self, key_name):
		"""Iter on dictionary keys"""
		r = self.coll.find(fields=[key_name,])
		return (i[key_name] for i in r)

	def iteritems(self, key_name):
		"""Iter on dictionary items. :returns: generator of (key, value) tuples """
		r = self.coll.find()
		for i in r:
			d = i.copy()
			d.pop(self.key_name)
			d.pop('_id')
			yield (i[key_name], d)

	def pop(self, key_val):
		"""Remove a dictionary item"""
		r = self[key_val]
		self.coll.remove({key_name: key_val}, safe=True)
		return r
	#STATS
	def inspect_db(self, db=None):
		'''List the structure of database'''
		if db is None:
			db = self.db
		self.use_db(db)
		self.show_db()
		self.show_colls()
		return
	def sys_stats(self, db=None):
		if db is None:
			return self.db.command('dbStats', 1024)
		else:
			db = self.use_db(db)
			return db.command('dbStats', 1024)
	def adv_stats(self, db=None):
		if db is None:
			db = self.db
		colls = self.list_colls(db)
		total = [self.count(i) for i in self.list_colls(db)]
		uniq = [self.dictinct(i) for i in self.list_colls(db)]
		return (colls, total, uniq)

	def insert_data(self, data, coll):
		'''
		if type(data) == dict:
			coll = self.use_coll(coll)
			coll.insert(data, upsert=True)
			return True
		else:
			return False
		'''
		raise NotImplementedError

	def add_data(self, filter, data, coll= None):
		'''
		if coll is None:
			coll = self.coll
		if type(filter) == dict and type(data) == dict:
			coll = self.use_coll(coll)
			exists = self.coll.find_one(filter)
			if exists is not None:
				coll.insert({"_id": exists["id"]},{"$set":data})
				return True
		return False
		'''
		raise NotImplementedError

	def push_data(self, filter, data, coll= None):
		raise NotImplementedError

	def _test(self):
		"self-test routine"
		import doctest
		# invoke the testmod function that will parse
		# the whole content of the file, looking for
		# docstrings and run all tests they contain
		doctest.testmod()

class MongoDBBackend(Database):
	def __init__(self, name):
		Database.__init__(self, name)
		self.create_colls(['roles', 'users', 'tasks', 'logs'])
		self._roles = {	"admin": 100,
						"editor": 60,
						"user": 50}


	def _initialize_(self, admin=None, password=None, email=None):
		''' create the backend '''
		self._set_roles_()
		if self._set_admin_(admin, password, email):
			return True
		else:
			return False

	def _set_admin_(self, admin, password, email):
		''' set the administrator '''
		if self.db.users.find_one({"login":admin}) is None:
			self.create_user(admin, email, password, role="admin")
			logging.info('Admin user created')
			return True
		else:
			logging.info('MongoDBBackend:set_admin: admin with this login already exists')
			return False
		# logging.info('MongoDBBackend set admin')

	def _set_roles_(self):
		''' set the role table '''
		if self.db.roles.find_one({'role': 'admin', 'val': 100}) is not None:
			self.db.roles.insert({'role': 'admin', 'val': 100})
			self.db.roles.insert({'role': 'editor', 'val': 60})
			self.db.roles.insert({'role': 'user', 'val': 50})
			logging.info('MongoDBBackend set roles')
			return True
		else:
			logging.info('MongoDBBackend:set_roles: roles are already set')
			return False

	#User and roles management
	def create_user(self, login, email_addr, password, role=None):
		''' create user into users table '''
		if role is None:
			role = "user"
		passw = self.set_password(password)
		print(self.users.insert({	"login":login,
									"email":email_addr,
									"creation_date":datetime.now(),
									"role":role,
									"salt": passw["salt"],
									"hashpass":passw["hashpass"],
									}))
		logging.info('User %s created' %login)
		self.create_role(login, role)

		return True

	def current_user(self, login):
		''' identify the current user '''
		self.user = self.users.find_one({"login":login})
		try:
			logging.info('Current user is : %s with role %s' %(self.user["login"], self.user["role"]))
			return self.user
		except:
			logging.info('User not found')
			return False

	def update_user(self, login, data):
		''' User into MongoDb'''
		if self.current_user(login) is not None:
			self.users.udpate({"login":login},{"$set":data}, upsert=True)
			logging.info('User %s udpated with params: %s' %(login, ", ".join(data.keys())))
			return True
		logging.info('Update: User not found')
		return False

	def delete_user(self, login):
		'''Delete user into MongoDb'''
		if self.users.remove({"login":login}) is not None:
			logging.info('User %s deleted')
			return True
		logging.info('Delete: User not found')
		return False

	def list_users(self):
		return self.users.find()

	def create_role(self, login, role):
		'''Create a new role for user into MongoDb'''
		exists = self.users.find_one({"login": login})
		if exists is not None:
			self.roles.insert({"login": login,
								"role": role,
								"code":self._roles[str(role)]})
			logging.info('Role %s udpated for user: %s' %(role, login))
			return True
		else:
			logging.info('Create role: User not found')
			return False

	def update_role(self, login, role):
		'''Update role for user'''
		exists = self.users.find_one({"login": login})
		if exists is not None:
			self.roles.update({"login": login}, {role: roles[str(role)]}, upsert=True)
			self.users.update({"login": login}, {"role": role}, upsert=True)
			return True
		else:
			logging.info("Update role: User %s doesn't exists") %login
			return False

	def delete_role(self, login, role):
		''' Delete role '''
		if self.roles.remove({"login":login}) is not None:
			logging.info('Delete role: user role %s deleted'  %login)
			return True
		logging.info('Delete role: User %s not found' %login)
		return False

	def list_roles(self):
		return self.roles.find()

	def list_user_projects(self, login):
		'''listing projects belonging to a given user'''
		task = self.tasks.find({"login": login})
		return [n for n in task]

	def set_password(self, password):
		''' Set password '''
		if type(password) == str:
			salt = ''.join(random.SystemRandom().choice(string.uppercase + string.digits) for _ in xrange(6))
			hashpass = hashlib.sha224(password+salt).hexdigest()
			logging.info('Password created')
			return {"hashpass": hashpass, "salt":salt}
		else:
			logging.debug('Password is not a string')
			return None

	def check_login(self, login, password, email=None):
		user = self.current_user(login)
		if user is not False:
			print(user)
			if hashlib.sha224(password+user["salt"]).hexdigest() == user["hashpass"]:
				if email is not None:
					if email == user["email"]:
						return True
				else:
					return True
		return False

	def change_password(self, login, password):
		''' Change password '''
		if type(password) == str and type(login) == str:
			passw = self.set_password(password)
			if passw is not None:
				self.users.update({"login":login},passw)
				logging.info('Password updated')
				return True
			else:
				logging.debug('Change password: Password is empty')
				return False
		else:
			logging.debug('Password is not a string')
			return False

	#Task management
	def create_task(self, login, task_type, params):
		'''adding a new task into MongoDb'''
		assert type(params) == dict
		exists = self.tasks.find_one({"login":login, "project_name": params["project_name"]})
		if exists is None:
			params["login"] = login
			params["type"] = task_type
			params["directory"] = os.path.join(result_path, params["filename"])
			params["active"] = "True"
			self.tasks.insert(params)
			return True
		else:
			self.tasks.update({"_id": exists["_id"]}, {"$set":params})
			return False

	def update_task(self, _id, **kwargs):
		'''udpating a task into MongoDb'''
		logging.info('udpating task')
		return self.tasks.update({"type":task_type, "name":name}, kwargs)

	def list_tasks(self):
		return self.tasks.find({},{ _id: 0 })

	def update_status(self, task_type, name, **kwargs):
		'''updating status into MongoDB'''
		logging.info('udpating status')
		return self.tasks.update({"type":task_type, "name":name}, {"$push": kwargs})


	def update_params(self, task_type, name, **kwargs):
		'''updating params into MongoDB'''
		#task_type: crawl, extract, report, report,
		logging.info('Updating params for %s task: %s' %(task_type, name))
		return self.tasks.update({"type":task_type, "name":name}, {"params": kwargs}, upsert=True)

	def delete_task(self, task_type, name):
		'''deleting a task into MongoDb'''
		logging.info('%s task: % deleted' %(task_type, name))
		return self.tasks.remove({"type":task_type, "name":name})

	def activate_task(self, task_type, name):
		'''activating task'''
		logging.info('%s task: %s active' %(task_type, name))
		return self.tasks.update({"type":task_type, "name":name}, {"active":True}, upsert=True)

	def deactivate_task(self, task_type, name):
		'''desactivating task'''
		logging.info('%s task: %s deactivated' %(task_type, name))
		return self.tasks.update({"type":task_type, "name":name}, {"active":False}, upsert=True)




# if __name__== "__main__":
# 	bongo = MongoDBBackend("cortext_managerV2")
# 	#bongo._test()*
# 	bongo._initialize_("admin", "admin@localhost.me", "admin")
# 	bongo.check_login("admin", "admin")
