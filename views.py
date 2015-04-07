#!/usr/bin/env python2.7
# -*- coding: utf-8 -*-
#file:views.py

#from bottle import jinja2_view
from bottle import template, route, post, get, redirect, abort
import os
import re

# # Project configuration # #
PROJECT_PATH = os.getcwd()
views_path = os.path.join(PROJECT_PATH,'views')
static_path = os.path.join(PROJECT_PATH,'static')
result_path = os.path.join(PROJECT_PATH,'data')

# # Bottle methods # #
def postd():
	return bottle.request.forms

def post_get(name, default=''):
	return bottle.request.POST.get(name, default).strip()

def serve_tpl(tpl_name, **kwargs):
	template_file = os.path.join(views_path, tpl_name+".tpl")
	return bottle.template(template_file, **kwargs)

@route('/static/:path/:filename')
def serve_static(path, filename):
	return bottle.static_file(filename, root=os.path.join(static_path, path))

@route('/<db_name>')
def index(db_name):
	return serve_tpl("antonio", db="db_name")
