#!/usr/bin/env python2.7

from bottle import route, run, template, get, debug
import os
debug(True)

# this will be the dictionary returned by the ajax call.
# Bottle convert this in a json compatibile string.
from convertor import Db
# # Project configuration # #
PROJECT_PATH = os.getcwd()
views_path = os.path.join(PROJECT_PATH,'views')
static_path = os.path.join(PROJECT_PATH,'static')
result_path = os.path.join(PROJECT_PATH,'data')

@route('/view/<db_name>')
def get_data(db_name):
    db_new = os.path.join(PROJECT_PATH, db_name)
    db = Db(db_new)
    db.__connect__()
    db.select_tables()
    db.convert()
    # for col, items in db.data.items():
    #     for n in items.values():
    #         print n
    #     break
    return template('json_simple', data = db.data, db_name = db_name)

run(host='localhost', port=8080)
# get_data("cop-clean.db")
