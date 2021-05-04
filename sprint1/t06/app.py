
import numpy
from flask import Flask, render_template, request
import copy
from functions import *

UPLOAD_FOLDER = '/uploads/files/'
ALLOWED_EXTENSIONS = set(['txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif'])

app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER


@app.route('/', methods=['post', 'get'])
def start_page():
	if request.method == 'POST':
		method = request.form.get('methods')
		myA = request.form.get('A')
		myB = request.form.get('B')
		print(method)
		if(not myA or not myB):
			data_file = request.form.get('file')
			print(data_file)
		else:
			print(myA)
			print(myB)
	return render_template('main_page.html')



