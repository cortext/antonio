#!usr/bin/python env
# coding: utf-8
__doc__ = "Interface avec CM V2"
__version__ = "3.0.1"

from beaker.middleware import SessionMiddleware
import bottle
from bottle import static_file
#from bottle import route, post, get, redirect, abort, request, app
from jinja2 import Environment, FileSystemLoader
jinja2_env = Environment(loader=FileSystemLoader('views/'))


#mylookup = TemplateLookup(directories=['./views'], output_encoding='utf-8',)



import os
import json
from bson import json_util
from bson.json_util import dumps
from convert import Connector, MongoClient
from cortext_api import *


# # App configuration # #
HOST = "localhost"
PORT = 8000
app = bottle.app()
session_opts = {
    'session.cookie_expires': True,
    'session.encrypt_key': 'please use a random key and keep it secret!',
    'session.httponly': True,
    'session.timeout': 3600 * 24, # 1 day
    'session.type': 'cookie',
    'session.validate_key': True,
    }
#plugin = MongoPlugin(uri="mongodb://127.0.0.1", db="1", json_mongo=True)
#app.install(plugin)

app = SessionMiddleware(app, session_opts)


#directory for the project
PROJECT_PATH = os.getcwd()
DEBUG = True
host = "localhost"
port = 8000

    
def run_app(host="localhost", port=8000):
    '''main function for running the app >>> into python scheduler    
    '''
    bottle.debug(DEBUG)
    bottle.data_store = os.path.join(PROJECT_PATH,'data_store')
    bottle.run(app=app, quiet=False, reloader=True, host=host, port=port)

def serve_template(templatename, **kwargs):
    t = jinja2_env.get_template(templatename)
    return t.render(**kwargs)



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
    #2. appel à assets: demande droit de modification (read-only, read-and-write)
    #locked = lock_file(hashkey, token)
    #3. appel à assets: récupérer les metadonnées du fichier pour le nom de la base et le nom des tables
    #http://assets.cortext.net/docs/f7ef64c1ded0dc2f831ec34089ffc2d2
    config = get_metadata(hashkey="f7ef64c1ded0dc2f831ec34089ffc2d2", access_token=None)
    if isinstance(config, dict):
        data = get_data(hashkey="f7ef64c1ded0dc2f831ec34089ffc2d2",db = config["db_name"], access_token=None)
    else:
        return template("400.tpl", status_code="404", error_msg="Connexion error: unable to get metadata on the doc: assets.cortext.net is unreachable")
    config["hashkey"] = hashkey
    db_path = os.path.join(bottle.data_store, config["db_name"])
    
    c = Connector(db_path)
    c.convert()
    header = c.data.find_one({},{"_id":False}).keys()
    data = dumps([n for n in c.data.find()][0:100])
    config["locked"] = True
    if config["locked"]:
        #print ">>>", config["db_name"]
        return serve_template("test.html", db_name=config["db_name"], columns = header, data = data)
        

    
if __name__ == "__main__":
    run_app()
