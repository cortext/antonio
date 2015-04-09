#!/usr/bin/env python

from bottle import route, run, template, get, debug

debug(True)

# this will be the dictionary returned by the ajax call.
# Bottle convert this in a json compatibile string.

items = {1: 'first item', 2: 'second item'}

# a simple json test main page
@route('/')
def jsontest():
    return template('json')

@route('/getallitems.json')
def shop_aj_getallitems():
    return (items)

run(host='localhost', port=8080)

