#!usr/bin/python env
# coding: utf-8
__doc__ = "Main APP"
__version__ = "3.0.1"

import bottle
from bottle import redirect, static_file
import os
import sys
import requests
import datetime
from api import *
import json
from bson.json_util import dumps
#Templating system
from jinja2 import Environment, FileSystemLoader
jinja2_env = Environment(loader=FileSystemLoader('views/'))

def serve_template(templatename, **kwargs):
    t = jinja2_env.get_template(templatename)
    return t.render(**kwargs)


from convert import *
    
@bottle.get('/static/:filename#.*#')
def serve_static(filename):
    return static_file(filename, root='static')


@bottle.get("/load/<db_name>")
def serve_data(db_name):
    #name = db_name.replace(".db", "")
    db_path = os.path.join(bottle.data_store, db_name)
    c = Connector(db_path)
    return dumps({"data":[n for n in c.data.find({},{"_id":False})]})
    
@bottle.get("/edit/<hashkey>")
def antonio(hashkey):
    ''' Main access to editor that takes 1 hashkey, 2 callback, 1 accessToken
    located at antonio.cortext.net
    '''
    '''
    #check if all the parameters are correctly sent
    if len(set(request.query.keys())  - set(["callback_json", "callback_url", "accessToken"])) == 0:
        #~ #localhost:8000/edit/daL5E9CCgLaASf8rF?accessToken=86305983c72a0e9865ceca050cf6a2f1ee7cdfc6&callback_json=http://lisis-srv-mgr.u-pem.fr:8080/project/126/analysis&callback_url=http://lisis-srv-mgr.u-pem.fr:8080/project/126/analysis
        callback_json = request.query.callback_json
        callback_url = request.query.callback_url
        access_token = request.query.accessToken
        return antonio(access_token, hashkey, callback_json, callback_url)
    '''
    #1. appel oauth: demande de droit d'accès
    #user =  get_oauth(access_token)
    access_token = None
    #2. appel à assets: demande droit de modification (read-only, read-and-write)
    #locked = lock_file(hashkey, token)
    locked = False
    #3. appel à assets: récupérer les metadonnées du fichier pour le nom de la base et le nom des tables
    #http://assets.cortext.net/docs/f7ef64c1ded0dc2f831ec34089ffc2d2
    config = get_metadata(hashkey, access_token)
    config = json.loads(config)
    
    if config["status"] == True:
        config = get_data(hashkey,config, access_token=None)
        config = json.loads(config)
        print config["status"]
        if config["status"]:
            print "OK"
            if locked:
                print "VIEW"
                #return config
                return redirect("/view_db/"+str(config["db_name"]))
            else:
                print "EDIT"
                return redirect("/edit_db/"+str(config["db_name"]))
                
        else:
            print config["status"]
            return config
    else:
        return config

@bottle.route("/edit_db/<filename>")
def edit_db(filename):
    db_name = re.sub(".db", "", filename)
    db_path = os.path.join(bottle.data_store, filename)
    c = Connector(db_path)
    if c.db_exists():
        pass
    else:
        c.convert()
    data = c.get_data()
    header = c.get_header()
    config = c.get_config()
    return serve_template("test.html", data = {"filename":filename, "header":header, "data":data, "config":config})
@bottle.route("/view_db/<filename>")
def view_db(filename):
    db_name = re.sub(".db", "", filename)
    db_path = os.path.join(bottle.data_store, filename)
    c = Connector(db_path)
    if c.db_exists():
        pass
    else:
        c.convert()
    data = c.get_data()
    header = c.get_header()
    config = c.get_config()
    return serve_template("test.html",filename, header, data, config)

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

@bottle.get("/insert_row/<db_name>")
def add_row(db_name, doc_id):
    db_path = os.path.join(bottle.data_store, db_name)
    c = Connector(db_path)
    new_data = request.get("row")
    #data = c.format_data()
    doc = c.data.insert_one(new_data)
    if doc is not None:
        return True
    return False

@bottle.get("/insert_column/<db_name>")
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


