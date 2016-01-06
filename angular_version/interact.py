@bottle.get("/update/<db_name>/<doc_id>")
def update(db_name, doc_id):
    b_path = os.path.join(bottle.data_store, db_name)
    c = Connector(db_path)
    new_data = request.get("row")
    #data = c.format_data()
    doc = c.data.update_one({"_id":doc_id}, {"$set":new_data})
    if doc is not None:
        return True
    return False

@bottle.get("/delete/<db_name>/<doc_id>")
def delete(db_name, doc_id):
    db_path = os.path.join(bottle.data_store, db_name)
    c = Connector(db_path)
    new_data = request.get("row")
    #data = c.format_data()
    doc = c.data.remove_one({"_id": doc_id})
    if doc is not None:
        return True
    return False

@bottle.get("/add_row/<db_name>")
def add_row(db_name, doc_id):
    db_path = os.path.join(bottle.data_store, db_name)
    c = Connector(db_path)
    new_data = request.get("row")
    #data = c.format_data()
    doc = c.data.insert_one(new_data)
    if doc is not None:
        return True
    return False

@bottle.get("/add_column/<db_name>")
def add_col(db_name, doc_id):
    db_path = os.path.join(bottle.data_store, db_name)
    c = Connector(db_path)
    new_data = request.get("row")
    #data = c.format_data()
    for item in c.data.find():
        doc = c.data.update_one({"_id":item["_id"]}, {"$set":new_data})
    doc = c.data.count(new_data)
    if doc  > 0:
        return True
    return False
    
