__name__="APIthonio"
__doc__ = "Interface avec CM V2"

@get("/edit/<hash>/")
def access_antonio(/edit/<hashkey>):
    haskey = hashkey
    callback_json = request.query.callback_json
    callback_url = request.query.callback_url
    access_token = request.query.accessToken
    
def antonio(access_token, hashkey, callback_json, callback_url):
    '''main process'''
    #get auth
    if get_oauth(token):get_data(hashkey, token), access_token)
        #~ if locked:
            #~ #ici droit de modif
        #~ else:
            #~ #ici consultation simple
        db_infos = get_metadata(hashkey, token)
        filepath = os.path.join("./data_store", db_infos['filename'])
        #download with filename
        with open(filepath, "w") as f:
            f.write(get_data(hashkey, token))
        if locked:
            #load editor
        else:
            #load viz
        
def editor(filepath):
    pass
def visualizor(filepath):
    pass

def get_oauth(token):
    '''get authorized access to modification'''
    #ici on pourra mettre le hack pour accéder à d'autres app qui requierent certains privilèges
    auth_url = "http://auth.cortext.net/auth/access"
    r = requests.get(auth_url, data = {"accessToken": token})
    
    if r.status_code == "200":
        #try:
        resp = r.json()
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
    
    lock_url = "http://assets.cortext.net/docs/"+haskey+"/requestlock"
    
    lock_info = {"hash": hashkkey,"locked": "true"}
    r = requests.put(lock_url, data = {"accessToken":token}, lock_info)
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
    #unlock_url = callback_json+"?accessToken="+token
    unlock_data = {"hash": hashkkey,"closed": "true","updated_at": updated_at}
    r = request.put(callback_json, {"access_token":token}, unlock_data)
    if r.status_code == "200":
        resp = r.json
        return True
    else:
        return abort(r.status_code, "unable to requests unlock: assets.cortext.net is unreachable")

def get_db(haskkey):
    data_url = "http://assets.cortext.net/docs/"+haskey
    r = requests.get(data_url)
    if r.status_code == "200":
        resp = r.json
        print resp
        return True
    else:
        return template(r.status_code, error_msg="unable to get doc: assets.cortext.net is unreachable")
def store_db(filename):
    '''store inital db'''
    #os.path.join('./data_store')
    raise NotImplementedError
    
def get_data(hashkey, token):
    '''get the data file from assets'''
    #http://assets.cortext.net/docs/48d7d5c8550ac4811d93c89b39
    #http://assets.cortext.net/docs/<hash>?accessToken=<token>
    #http://assets.cortext.net/docs/f7ef64c1ded0dc2f831ec34089ffc2d2 
    data_url = "http://assets.cortext.net/docs/"+haskey
    r = requests.get(data_url, data={"accessToken":token})
    if r.status_code == "200":
        resp = r.json()
        #here download the file
        return True
    else:
        return template(r.status_code, error_msg="unable to get doc: assets.cortext.net is unreachable")

def get_metadata(hashkey, token):
    ''' get meta data of the file from assets '''
    #{   "alltables": [     "Layer",     "Time Steps",     "appln_abstract",     "appln_filing_year",     "appln_id",     "appln_title",     "applt_ctry",     "applt_std_name",     "domaine_techno",     "inv_ctry",     "inv_std_name",     "sous_champs_techno",     "Layer",     "Time Steps",     "appln_abstract",     "appln_filing_year",     "appln_id",     "appln_title",     "applt_ctry",     "applt_std_name",     "domaine_techno",     "inv_ctry",     "inv_std_name",     "sous_champs_techno"   ],   "corpus_type": "csv",   "custom_period": [     "Standard Periods"   ],   "extension": "db",   "file": "/srv/local/documents/877f/877f60e36a32f233d497b848758af51c/4573/02-cib2009-epo-allprior-cortext.db",   "indexed": false,   "origin": "dataset",   "structure": "reseaulu",   "tablenames": [     "Layer",     "Time Steps",     "appln_abstract",     "appln_filing_year",     "appln_id",     "appln_title",     "applt_ctry",     "applt_std_name",     "domaine_techno",     "inv_ctry",     "inv_std_name",     "sous_champs_techno"     ],   "textual_fields": [     "Layer",     "Time Steps",     "appln_abstract",     "appln_filing_year",     "appln_id",     "appln_title",     "applt_ctry",     "applt_std_name",     "domaine_techno",     "inv_ctry",     "inv_std_name",     "sous_champs_techno"   ],   "totaltables": [     "applt_ctry",     "applt_std_name",     "Layer",     "inv_std_name",     "domaine_techno",     "ISIpubdate",     "appln_filing_year",     "appln_id",     "inv_ctry",     "sous_champs_techno",     "appln_abstract",     "appln_title"   ],   "uri": "02-cib2009-epo-allprior-cortext",   "version": 1,   "localPath": "/srv/local/documents/877f/877f60e36a32f233d497b848758af51c/4573/02-cib2009-epo-allprior-cortext.db",   "date": "2015.10.22",   "time": "15:06:24",   "timestamp": "1445519184",   "size": "13.23 MB",   "type": "application/octet-stream",   "filename": "02-cib2009-epo-allprior-cortext.db",   "name": "02-cib2009-epo-allprior-cortext",   "hash": "3b3d90fd78c68ce8d3c0621a22e04926" }
    metadata_url = "http://assets.cortext.net/docs/"+hashkey+"/meta"
    requests.get(metadata_url, {"accessToken":token})
    if r.status_code == "200":
        data = r.json()
        return data
    else:
        return template(r.status_code, error_msg="unable to get metadata on the doc: assets.cortext.net is unreachable")

@get('/save/<hashkey>/')
def save2cortext(haskey, token):
    '''save data to cortext'''
    #find doc_id 
    #transform into json or not
    save_url = "http://assets.cortext.net/putFile/"+hash+"?accessToken"+token
    saved_data = {"file":json_doc, "updated_at":udpated_date, "modify_by":username}
    #or post?
    r = requests.put(save_url,{"accessToken":token}, saved_data)
    if r.status_code == "200":
        resp = r.json
        print resp
        return True
    else:
        return template(r.status_code, error_msg="unable to get doc: assets.cortext.net is unreachable")    
