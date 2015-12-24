#!usr/bin/python env
# coding: utf-8
__doc__ = "Interface avec CM V2"

import os
from convert import Convertor
import bottle
from beaker.middleware import SessionMiddleware
from bottle import template, route, post, get, redirect, abort, request, view
import requests
import logging
import urllib
import sys
import datetime
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

#directories for the project
PROJECT_PATH = os.getcwd()
views_path = os.path.join(PROJECT_PATH,'views')
#print views_path
static_path = os.path.join(PROJECT_PATH,'static')
result_path = os.path.join(PROJECT_PATH,'data')
data_store = os.path.join(PROJECT_PATH,'data_store')
test = True

def run_app(host="localhost", port=8000):
    '''main function for running the app >>> into python scheduler
    
    '''
    logging.basicConfig(filename='myapp.log',level=logging.DEBUG)
    logging.getLogger(__name__)
    bottle.debug(test)
    logging.info('Starting app')
    #bottle.TEMPLATE_PATH = views_path
    bottle.run(app=app, quiet=False, reloader=True, host=host, port=port)





@get("/")
def home():
    '''A homepage to check if its working
    = antonio.cortext.net
    '''
    return "home"
    
@get("/edit/<hashkey>")
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
    config.update(data)
    
    config["hashkey"] = hashkey
    config["locked"] = True
    if config["locked"]:
        build_template(config)
        #post data
        #template edit
        return redirect("/edit/"+config["hashkey"]+"/"+config["db_name"])
    else:
        #template view
        return redirect("/view/"+config["hashkey"]+"/"+config["db_name"])
            
    
def get_oauth(token):
    '''get authorized access to modification'''
    #ici on pourra mettre le hack pour accéder à d'autres app qui requierent certains privilèges
    auth_url = "http://auth.cortext.net/auth/access"
    
    r = requests.get(auth_url, params={"access_token": token})
    
    resp = r.json()
    
    if r.status_code == 200:
        #try:
        
        #resp = json.loads(resp)
        if not resp.has_key('error'):
            return resp["username"]
        else:
            #{"error":"invalid_grant","error_description":"Malformed token (missing \"expires\" or \"client_id\")"} 
            if resp["error"] == "invalid_grant":
                return abort(401,resp["error_description"])
            else:
                return template(501, resp["error_description"])
    else:
        return abort(int(r.status_code), "Unable to authenticate")
        

def lock_file(hashkey, token):
    '''send signal to lock modification on file'''    
    lock_url = "http://assets.cortext.net/docs/"+hashkey+"/requestlock"
    
    lock_info = {"hash": hashkkey,"locked": "true"}
    r = requests.put(lock_url, {"accessToken":token}, lock_info)
    if r.status_code == "200":
        #try:
        resp = r.json
        #resp = json.loads(resp)
        if not resp.has_key('lock_info'):
            return abort(r.status_code, "assets.cortext.net is unreachable")
        else:
            return resp["lock_info"]
    else:
        return template(r.status_code, error_msg="unable to requestslock: assets.cortext.net is unreachable")

def unlock_file(callback_json,hashkey,token, updated_at):
    #unlock_url = callback_json+"?accessToken="+token
    unlock_data = {"hash": hashkkey,"closed": "true","updated_at": updated_at}
    r = request.put(callback_json, {"accessToken":token}, unlock_data)
    if r.status_code == 200:
        return r.json()
    else:
        return template(r.status_code, "unable to requests unlock: assets.cortext.net is unreachable")


def get_data(hashkey="f7ef64c1ded0dc2f831ec34089ffc2d2", access_token=None, db="test"):
    config = {}
    #config["filename"] = os.path.join(data_store, db)
    config["filename"] = os.path.join(data_store, db)
    #ici on devrait checker depuis combien de temps il a été téléchargé
    #avant de le télécharger en récupérant la date de création et en vérifiant s'il existe
    
    config["updated_at"] = datetime.datetime.now()
    if not os.access(config["filename"], os.R_OK):
        data_url = "http://assets.cortext.net/docs/"+hashkey
        token  = {"accessToken": access_token}
        
        try:
            #current implementation
            r = requests.get(data_url, token, stream=True)
            #next implementation
            #r = requests.get(data_url, token, stream=True)
            with open(config["filename"], 'wb') as f:
                for chunk in r.iter_content(chunk_size=1024): 
                    if chunk: # filter out keep-alive new chunks
                        f.write(chunk)
                        #f.flush()
            
            
            return config
        except requests.ConnectionError:
            return template("404", error_msg="Connexion error: unable to get data on the doc: assets.cortext.net is unreachable")
    else:
        return config

def get_metadata(hashkey="f7ef64c1ded0dc2f831ec34089ffc2d2", access_token = None):
    ''' get meta data of the file from assets '''
    #{   "alltables": [     "Layer",     "Time Steps",     "appln_abstract",     "appln_filing_year",     "appln_id",     "appln_title",     "applt_ctry",     "applt_std_name",     "domaine_techno",     "inv_ctry",     "inv_std_name",     "sous_champs_techno",     "Layer",     "Time Steps",     "appln_abstract",     "appln_filing_year",     "appln_id",     "appln_title",     "applt_ctry",     "applt_std_name",     "domaine_techno",     "inv_ctry",     "inv_std_name",     "sous_champs_techno"   ],   "corpus_type": "csv",   "custom_period": [     "Standard Periods"   ],   "extension": "db",   "file": "/srv/local/documents/877f/877f60e36a32f233d497b848758af51c/4573/02-cib2009-epo-allprior-cortext.db",   "indexed": false,   "origin": "dataset",   "structure": "reseaulu",   "tablenames": [     "Layer",     "Time Steps",     "appln_abstract",     "appln_filing_year",     "appln_id",     "appln_title",     "applt_ctry",     "applt_std_name",     "domaine_techno",     "inv_ctry",     "inv_std_name",     "sous_champs_techno"     ],   "textual_fields": [     "Layer",     "Time Steps",     "appln_abstract",     "appln_filing_year",     "appln_id",     "appln_title",     "applt_ctry",     "applt_std_name",     "domaine_techno",     "inv_ctry",     "inv_std_name",     "sous_champs_techno"   ],   "totaltables": [     "applt_ctry",     "applt_std_name",     "Layer",     "inv_std_name",     "domaine_techno",     "ISIpubdate",     "appln_filing_year",     "appln_id",     "inv_ctry",     "sous_champs_techno",     "appln_abstract",     "appln_title"   ],   "uri": "02-cib2009-epo-allprior-cortext",   "version": 1,   "localPath": "/srv/local/documents/877f/877f60e36a32f233d497b848758af51c/4573/02-cib2009-epo-allprior-cortext.db",   "date": "2015.10.22",   "time": "15:06:24",   "timestamp": "1445519184",   "size": "13.23 MB",   "type": "application/octet-stream",   "filename": "02-cib2009-epo-allprior-cortext.db",   "name": "02-cib2009-epo-allprior-cortext",   "hash": "3b3d90fd78c68ce8d3c0621a22e04926" }
    config = {"access_token": access_token}
    
    metadata_url = "http://assets.cortext.net/docs/"+hashkey+"/meta"
    try:
        r = requests.get(metadata_url, {"accessToken":access_token})
        if r.status_code == 200:
            metadata = r.json()
            config["name"] = metadata["name"]
            
            config["db_name"] = metadata["filename"]
            config["dbpath"] = os.path.join(data_store, config["db_name"])
            config["columns"] = metadata["totaltables"]
            config["textual_columns"] = metadata["textual_fields"]
            config["db_format"] = metadata["corpus_type"]
            config["created_at"] = datetime.datetime.strptime(metadata["date"]+" "+metadata["time"], "%Y.%m.%d %H:%M:%S")
            return config
        else:
            return template(r.status_code, error_msg="unable to get metadata on the doc: assets.cortext.net is unreachable")
    except requests.ConnectionError:
        return template("404", error_msg="Connexion error: unable to get metadata on the doc: assets.cortext.net is unreachable")

def convert(filename):
    db = Convertor(filename)
    print db.__connect__()
    print db.select_tables()
    print db.tables
    db.build_schema()
    data = db.convert2json()
    return data

def build_template(config):
    db_name = os.path.join(data_store, db_name)
    data = convert(db_name)
    

@post('/edit/<hashkey>/<db_name>')
def post_data():
    data = convert(db_name)
    return template('test.tpl', request=request)
     
@get('/edit/<hashkey>/<db_name>')
def edit_data(hashkey, db_name):
    db_name = os.path.join(data_store, db_name)
    data = convert(db_name)
    #~ for k, v in data.items():
        #~ print k, v
    #~ print [v.values() for k, v in data.items()]
    #~ #ici charger le template spécifique
    #~ return [v.values() for k, v in data.items()]
    return template('index.tpl', request=request)
    
@get('/view/<hashkey>/<db_name>')
def view_data(hashkey, db_name):
    db_name = os.path.join(data_store, db_name)
    data = convert(db_name)
    #ici charger le template spécifique avec alerte
    return data


@get('/save/<hashkey>/<db_name>')
def save(haskey, db_name, access_token=None):
    '''save data to cortext'''
    #find doc_id 
    #transform into json or not
    save_url = "http://assets.cortext.net/putFile/"+hashkey
    saved_data = {"file":json_doc, "updated_at":udpated_date, "modify_by":username}
    
    r = requests.put(save_url,{"accessToken":acess_token}, saved_data)
    if r.status_code == "200":
        resp = r.json()
        print resp
        return True
    else:
        return template(r.status_code, error_msg="unable to get doc: assets.cortext.net is unreachable")    

if __name__ == "__main__":
    run_app()
