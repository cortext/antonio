#!/usr/bin/env python
from bottle import route, run, template, get, debug, static_file
import os, re
from convertor import Db
debug(True)
# this will be the dictionary returned by the ajax call.
# Bottle convert this in a json compatibile string.


# # Project configuration # #
PROJECT_PATH = os.getcwd()
views_path = os.path.join(PROJECT_PATH,'views')
static_path = os.path.join(PROJECT_PATH,'static')
result_path = os.path.join(PROJECT_PATH,'data')

@get('/static/<filename:re:.*\.js>')
def javascripts(filename):
    return static_file(filename, root='static/js')

@get('/static/<filename:re:.*\.css>')
def stylesheets(filename):
    return static_file(filename, root='static/css')

@get('/static/<filename:re:.*\.(jpg|png|gif|ico)>')
def images(filename):
    return static_file(filename, root='static/img')

@get('/static/<filename:re:.*\.(eot|ttf|woff|svg)>')
def fonts(filename):
    return static_file(filename, root='static/fonts')

@route('/view/<db_name>')
def jsontest(db_name):
    return template('json', db_name=db_name)


@route('/<name>/getallitems.json')
def getallitems(name):
    db_new = os.path.join(PROJECT_PATH, name)
    db = Db(db_new)
    db.__connect__()
    db.select_tables()
    db.build_schema()
    if db.convert():
        return template('json', db_name = db.name)
    else:
        return template('404', db = db)

run(host='localhost', port=8080)

# vim: tabstop=8 expandtab shiftwidth=4 softtabstop=4
