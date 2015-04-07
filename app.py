__doc__ = '''Bottle APP'''
import sys, os
import bottle
import views

logger = logging.getLogger(__name__)
FORMAT = "[%(filename)s:%(lineno)s - %(funcName)20s() ] %(message)s"
logging.basicConfig(file="corpus_viz.log", format=FORMAT, level=logging.INFO)

#Bottle App Configuration
from beaker.middleware import SessionMiddleware
import views
app = bottle.app()
session_opts = {
    'session.cookie_expires': True,
    'session.encrypt_key': 'please use a random key and keep it secret!',
    'session.httponly': True,
    'session.timeout': 3600 * 24, # 1 day
    'session.type': 'cookie',
    'session.validate_key': True,
    }

app = SessionMiddleware(app, session_opts)


def run_app(host="localhost", port=8000):
    logging.basicConfig(filename='myapp.log',level=logging.DEBUG)
    logging.getLogger(__name__)
    bottle.debug(True)
    logging.info('Starting app')
    bottle.run(app=app, quiet=False, reloader=True, host=host, port=port)

if __name__ == '__main__':
    run_app()
