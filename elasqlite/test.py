import unittest

from esqlite import detect_type, read_csv


class TestFonctions(unittest.TestCase):
    def test_detect_type(self):
        input_list = ["type.db", "type.csv", "type.json", "type", "type.txt"]
        result_list = ["db", "csv", "json", False, False]
        for x,y in zip(input_list, result_list):
            element = detect_type(x)
            print y
            self.assertEqual(element, y)
	
	def test_read_csv(self):
		pass

	def test_read(self):
    	pass


if __name__ == '__main__':
    unittest.main()