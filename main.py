#!/usr/bin/env python
from bottle import route, run, template, get, debug, static_file
import os, re
from convertor import Db
import requests
import logging
import json



# # App configuration # #
HOST = "localhost"
PORT = 8000
PROJECT_PATH = os.getcwd()
views_path = os.path.join(PROJECT_PATH,'views')
static_path = os.path.join(PROJECT_PATH,'static')
result_path = os.path.join(PROJECT_PATH,'data')


@get('/static/<filename:re:.*\.js>')
def get_javascripts(filename):
    '''serve javascript'''
    return static_file(filename, root='static/js')

@get('/static/<filename:re:.*\.css>')
def get_stylesheets(filename):
    '''serve css'''
    return static_file(filename, root='static/css')

@get('/static/<filename:re:.*\.(jpg|png|gif|ico)>')
def get_images(filename):
    '''serve img'''
    return static_file(filename, root='static/img')

@get('/static/<filename:re:.*\.(eot|ttf|woff|svg)>')
def get_fonts(filename):
    '''serve font'''
    return static_file(filename, root='static/fonts')
#main app
@get('/edit/<hashkey>?accessToken=<token>&callback_json=<callback_json>&callback_url=<callback_url>')
def serve_app(hashkey,token, callback_json, callback_url):
    '''main access to Antonio website'''
    if get_oauth(token):
        #lockfile
        editable = lock_file(hashkey, token)
        metatada = get_metadata(hashkey, token)
        data = get_data(hashkey, token)
        if editable:
            #redirect to full app
            
            
            pass
        else:
            #redirect data
            pass

def view(data, metadata, editable=True):
    '''inject into tpl'''
    
    pass
    
def edit():
    pass
def show():
    pass
def save():
    pass
def undo():
    pass
    
#interface \w cortext
def get_oauth(token):
    '''get authorized access to modification'''
    auth_url = "http://auth.cortext.net/auth/access?access_token="+token
    r = requests.get(auth_url)
    if r.status_code == "200":
        #try:
        resp = r.json
        
        print resp
        #resp = json.loads(resp)
        if not resp.has_key('error'):
            #get more info?
            return True
        else:
            #{"error":"invalid_grant","error_description":"Malformed token (missing \"expires\" or \"client_id\")"} 
            if resp["error"] == "invalid_grant":
                return template("301", error_msg= resp["error_description"])
            else:
                return True
    else:
        return template(r.status_code, error_msg="auth.cortext.net is unreachable")

def lock_file(hashkey, token):
    '''send signal to lock modification on file'''
    lock_url = "http://assets.cortext.net/docs/"+haskey+"/requestlock?accessToken="+token
    lock_info = {"hash": hashkkey,"locked": "true"}
    r = requests.put(lock_url, lock_info)
    if r.status_code == "200":
        #try:
        resp = r.json
        
        print resp
        #resp = json.loads(resp)
        if not resp.has_key('lock_info'):
            return template(r.status_code, error_msg="assets.cortext.net is unreachable")
        else:
            return resp["lock_info"]
    else:
        return template(r.status_code, error_msg="unable to requestslock: assets.cortext.net is unreachable")

def unlock_file(callback_json,hashkey,token, updated_at):
    unlock_url = callback_json+"?accessToken="+token
    unlock_data = {"hash": hashkkey,"closed": "true","updated_at": updated_at}
    r = request.put(unlock_url, unlock_data)
    if r.status_code == "200":
        return True
    else:
        return abort(r.status_code, "unable to requests unlock: assets.cortext.net is unreachable")

def get_data(hashkey, token):
    '''get the data file from assets'''
    #http://assets.cortext.net/docs/<hash>?accessToken=<token> 
    data_url = "http://assets.cortext.net/docs/"+haskey+"?accessToken="+token
    r = requests.get(data_url)
    if r.status_code == "200":
        resp = r.json
        print resp
        return True
    else:
        return template(r.status_code, error_msg="unable to get doc: assets.cortext.net is unreachable")

def get_metadata(hashkey, token):
    ''' get meta data of the file from assets '''
    metadata_url = "http://assets.cortext.net/docs/"+hashkey+"/meta?accessToken="+token
    requests.get(metadata_url)
    if r.status_code == "200":
        resp = r.json
        print resp
        return True
    else:
        return template(r.status_code, error_msg="unable to get metadata on the doc: assets.cortext.net is unreachable")

@get('/save/<hashkey>?accessToken=<token>')
def save2cortext(haskey, token):
    '''save data to cortext'''
    #find doc_id 
    #transform into json or not
    save_url = "http://assets.cortext.net/putFile/"+hash+"?accessToken"+token
    saved_data = {"file":json_doc, "updated_at":udpated_date, "modify_by":username}
    #or post?
    r = requests.put(save_url, saved_data)
    if r.status_code == "200":
        resp = r.json
        print resp
        return True
    else:
        return template(r.status_code, error_msg="unable to get doc: assets.cortext.net is unreachable")
    

@get('/view/<db_name>/<slice_id:int>')
def jsontest(db_name, slice_id):
    return template('details', db_name=db_name, slice_id=slice_id)
#~ 
@get('/view/<db_name>')
def serve_db(db_name):
    '''serve db '''
    return template('json', db_name=db_name)

@get('/<name>/getallitems.json')
def getallitems(name):
    logging.info("get_all_items")
    db_new = os.path.join(PROJECT_PATH, name)
    db = Db(db_new)
    db.__connect__()
    db.select_tables()
    db.build_schema()
    if db.convert():
        return db.json_data
    else:
        return template('404', db = db)

#callback({"firstname": "John", "lastname": "Smith", "email": "john.smith@johnsmith.com" });

#1. serve_app
#http://antonio.cortext.net/edit/<hash>?accessToken=<token>&callback_json=<callback_json>&callback_url=<callback_url>    
    

if __name__=="__main__":
    run(host=HOST, port=PORT, reloader=True)

# vim: tabstop=8 expandtab shiftwidth=4 softtabstop=4
