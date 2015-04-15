#!/usr/bin/env python2.7

from bottle import route, run, template, get, debug
import os
debug(True)

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
    db.build_schema()
    db.convert()
    return template('json_simple', db = db)

run(host='localhost', port=8000)
# get_data("cop-clean.db")
