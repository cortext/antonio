#!usr/bin/python env
# coding: utf-8
__doc__ = "API w Cortext V2"
__version__ = "3.0.1"
import os
import sys
import requests
import datetime
from convert import Convertor
from apitonio3 import bottle


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
    config["filename"] = os.path.join(bottle.data_store, db)
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
            config["dbpath"] = os.path.join(bottle.data_store, config["db_name"])
            config["columns"] = metadata["totaltables"]
            config["textual_columns"] = metadata["textual_fields"]
            config["db_format"] = metadata["corpus_type"]
            config["created_at"] = datetime.datetime.strptime(metadata["date"]+" "+metadata["time"], "%Y.%m.%d %H:%M:%S")
            return config
        else:
            return template(r.status_code, error_msg="unable to get metadata on the doc: assets.cortext.net is unreachable")
    except requests.ConnectionError:
        return template("404", error_msg="Connexion error: unable to get metadata on the doc: assets.cortext.net is unreachable")


