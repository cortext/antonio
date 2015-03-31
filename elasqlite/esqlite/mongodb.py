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
		print "%i Databases" %len(dbs)
		print "===="
		for db in dbs:
			print "-", db, self.sys_stats(db)
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
				print "|"
				print "-- ", c
			return colls
		except:
			print "No collections available"
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
				print "|"
				print "--", i
				for item in c.find():
					print "\t|"
					print "\t--", item
		else:
			try:
				c = self.use_coll(coll)
				print "|"
				print "--", coll
				for item in c.find():
					print "\t|"
					print "\t--", item
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
