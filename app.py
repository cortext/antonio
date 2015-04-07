__doc__ = '''Bottle APP'''
import sys, os
import bottle
import views

logger = logging.getLogger(__name__)
FORMAT = "[%(filename)s:%(lineno)s - %(funcName)20s() ] %(message)s"
logging.basicConfig(file="corpus_expo.log", format=FORMAT, level=logging.INFO)
