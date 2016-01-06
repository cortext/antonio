#!usr/bin/python env
# coding: utf-8
__doc__ = '''Antonio API 
            basic interactions with CM
          '''
__version__ = "3.0.1"
import os
import requests
from __init__ import DATASTORE
import datetime
from bson.json_util import dumps

def get_oauth(token):
    '''get authorized access to modification'''
    #ici on pourra mettre le hack pour accéder à d'autres app qui requierent certains privilèges
    auth_url = "http://auth.cortext.net/auth/access"
    
    r = requests.get(auth_url, params={"access_token": token})
    try:
        resp = r.json()
    except JSONDecodeError:
        return {"status": False,  "status_code" : 406, "error_msg": "Bad response format: answer is not JSON"}
    if r.status_code == 200:
        #resp = json.loads(resp)
        if not resp.has_key('error'):
            return resp
        else:
            #{"error":"invalid_grant","error_description":"Malformed token (missing \"expires\" or \"client_id\")"} 
            if resp["error"] == "invalid_grant":
                return {"status": False,  "status_code" : 401, "error_msg": "Unauthorized: "+resp["error_description"]}
                
            else:
                return {"status": False,  "status_code" : 401, "error_msg": resp["error"].title()+":"+resp["error_description"]}
    else:
        return {"status": False,  "status_code" : r.status_code, "error_msg": "Unable to authenticate throught assests.cortext.net. Please contact your admin and ask him gently"}
        
def lock_file(hashkey, token):
    '''send signal to lock modification on file'''    
    lock_url = "http://assets.cortext.net/docs/"+hashkey+"/requestlock"
    lock_info = {"hash": hashkkey,"locked": "true"}
    r = requests.put(lock_url, {"accessToken":token}, lock_info)
    if r.status_code == "200":
        try:
            resp = r.json()
        except JSONDecodeError:
            return {"status": False,  "status_code" : 406, "error_msg": "Bad response format: answer is not JSON"}
        #resp = json.loads(resp)
        if not resp.has_key('lock_info'):
            return {"status": False,  "status_code" : r.status, "error_msg": "unable to requestslock :no lock info"}
            
        else:
            return resp["lock_info"]
    else:
        return {"status": False,  "status_code" : r.status, "error_msg": "unable to requestslock : assets.cortext.net isunreachable"}
        

def unlock_file(callback_json,hashkey,token, updated_at):
    '''send signal to unlock modification on file'''    
    #unlock_url = callback_json+"?accessToken="+token
    unlock_data = {"hash": hashkkey,"closed": "true","updated_at": updated_at}
    r = request.put(callback_json, {"accessToken":token}, unlock_data)
    if r.status_code == 200:
        try:
            resp =  r.json()
            resp["status"] = True
        except JSONDecodeError:
            return {"status": False,  "status_code" : 406, "error_msg": "Bad response format: answer is not JSON"}
    else:
        return {"status":False, "status_code": r.status_code, "error_msg" : "unable to unlockfile: assets.cortext.net is unreachable"}

def get_metadata(hashkey, access_token):
    ''' get meta data of the file from assets '''
    rdata = {"access_token": access_token}
    metadata_url = "http://assets.cortext.net/docs/"+hashkey+"/meta"
    config = {}
    try:
        r = requests.get(metadata_url, rdata)
        if r.status_code in range(200, 399):
            
            try:
                metadata = r.json()
            except Exception, e:
                return {"status": False,  "status_code" : 406, "error_msg": "Bad response format: answer is not JSON "+str(e)}
                
            config["name"] = metadata["name"]
            
            config["db_name"] = metadata["filename"]
            config["file_loc"] = os.path.join(DATASTORE, config["db_name"])
            config["columns"] = metadata["totaltables"]
            config["textual_columns"] = metadata["textual_fields"]
            config["db_format"] = metadata["corpus_type"]
            config["created_at"] = datetime.datetime.strptime(metadata["date"]+" "+metadata["time"], "%Y.%m.%d %H:%M:%S")
            config["downloaded_at"] = datetime.datetime.now()
            config["status"] = True
            return dumps(config)
        else:
            return {"status":False, "status_code":r.status_code, "error_msg" : "Requests Failed: assets.cortext.net is unreachable"}
            
    except requests.ConnectionError:
        return {"status":False, "status_code":r.status_code, "error_msg" : "Connexion error"}
        
        
def get_data(hashkey, config, access_token=None):
    '''download raw_db from assets.cortext.net/docs/<haskey>'''
    
    #récupérant la date de création et en vérifiant s'il existe et qu'il a été convertit il y a moins de 10 minutes
    #print datetime.timedelta(datetime.datetime.now(), config["downloaded_at"])
    
    
    #st_ctime - platform dependent; time of most recent metadata change on Unix, or the time of creation on Windows)
    if not os.access(config["file_loc"], os.R_OK):
        data_url = "http://assets.cortext.net/docs/"+hashkey
        token  = {"accessToken": access_token}
        try:
            #current implementation
            r = requests.get(data_url, token, stream=True)
            #next implementation
            #r = requests.get(data_url, token, stream=True)
            with open(config["file_loc"], 'wb') as f:
                for chunk in r.iter_content(chunk_size=1024): 
                    if chunk: # filter out keep-alive new chunks
                        f.write(chunk)
                        #f.flush()
            config["status"] = True
            config["downloaded_at"] = datetime.datetime.now()
            return dumps(config)
            
        except requests.ConnectionError:
            return {"status":False, "status_code" :404, "error_msg":"Connexion error: unable to get data on the doc: assets.cortext.net is unreachable"}
            
    else:
        config["status"] = True
        config["downloaded_at"] = datetime.datetime.now()
        return dumps(config)





