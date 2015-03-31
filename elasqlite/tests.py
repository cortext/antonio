import unittest

class Connect2SqliteTestCase(unittest.TestCase):
    def runtest(self, file):
        connect2sqlite(file)
