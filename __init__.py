__doc__ = "Interface avec CM V2"
__version__ = "3.0.1"


from bottle import static_file
import bottle
from beaker.middleware import SessionMiddleware


import os
import json
from bson.json_util import dumps
from convert import Connector, MongoClient

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
#For backend DB
#plugin = MongoPlugin(uri="mongodb://127.0.0.1", db="1", json_mongo=True)
#app.install(plugin)
# Session Middleware
app = SessionMiddleware(app, session_opts)

#Config for the project
PROJECT_PATH = os.getcwd()
DATASTORE = os.path.join(PROJECT_PATH,'data_store')
DEBUG = True
host = "localhost"
port = 8000



# Import modules
from app import *

def run_app(host="localhost", port=8000):
    '''main function for running the app >>> into python scheduler'''
    bottle.debug(DEBUG)
    bottle.data_store = DATASTORE
    bottle.run(app=app, quiet=False, reloader=True, host=host, port=port)


if __name__ == "__main__":
    run_app()
