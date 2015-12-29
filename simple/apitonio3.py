#!usr/bin/python env
# coding: utf-8
__doc__ = "Interface avec CM V2"
__version__ = "3.0.1"

from beaker.middleware import SessionMiddleware
import bottle
from bottle import static_file
#~ from bottle import route, post, get, redirect, abort, request, app
from bottle import TEMPLATE_PATH, jinja2_template as template
from cortext_api import *
import json

from bson import json_util
from twisted.internet import reactor, task




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

app = SessionMiddleware(app, session_opts)

#directory for the project
PROJECT_PATH = os.getcwd()
DEBUG = True
host = "localhost"
port = 8000

#from jinja2 import Environment, FileSystemLoader, TemplateNotFound

TEMPLATE_PATH = os.path.join(PROJECT_PATH,'views')

def convert_f(filename):
    '''main convertor'''
    db = Convertor(filename)
    db.__connect__()
    db.select_tables()
    db.tables
    db.build_schema()
    data = db.convert2json()    
    return data
    
def run_app(host="localhost", port=8000):
    '''main function for running the app >>> into python scheduler    
    '''
    bottle.debug(DEBUG)
    
    #bottle.TEMPLATE_PATH = os.path.join(PROJECT_PATH,'views')
    bottle.STATIC_PATH = os.path.join(PROJECT_PATH,'static')
    bottle.RESULT_PATH = os.path.join(PROJECT_PATH,'data')
    bottle.data_store = os.path.join(PROJECT_PATH,'data_store')
    #bottle.env = Environment(loader=FileSystemLoader(bottle.TEMPLATE_PATH))
    bottle.run(app=app, quiet=False, reloader=True, host=host, port=port)

@bottle.get('/static/<filename:path>')
def serve_static(filename):
    return static_file(filename, bottle.STATIC_PATH)

@bottle.get("/load/<db_name>")
def serve_data(db_name):
    data_f = os.path.join(bottle.data_store, db_name)
    data_f= "./test.json"
    with open(data_f, "r") as f:
        return json.load(f)
    
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
    data = get_data(hashkey="f7ef64c1ded0dc2f831ec34089ffc2d2",db = config["db_name"], access_token=None)
    #config.update(data)
    config["hashkey"] = hashkey
    db_name = os.path.join(bottle.data_store, config["db_name"])
    data = convert_f(db_name)
    for row in data:
        print data
    jsondata = json.dumps(data, default=json_util.default)
    json_f = config["db_name"].replace(".db", ".json")
    
    with open(os.path.join(bottle.data_store, json_f), "w") as f:
        f.write(json.dumps({"data":data}, default=json_util.default))
    
    config["locked"] = True
    if config["locked"]:
        return template("./simple.tpl", json_f = json_f, db_name = config["db_name"])
        

    
if __name__ == "__main__":
    run_app()
