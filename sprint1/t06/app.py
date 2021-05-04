
import numpy
from flask import Flask, render_template, request
import copy
from methods import *

UPLOAD_FOLDER = '/uploads/files/'
ALLOWED_EXTENSIONS = set(['txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif'])

app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

def TakeA(Matrix_a, Matrix_b):
	A = []
	j2 = 0
	for i in range(len(Matrix_b)):
		temp = []
		for j in range(len(Matrix_b)):
			temp.append(float(Matrix_a[0].split(' ')[j2]))
			j2 += 1
		A.append(temp)
	return A

def TakeB(Matrix_b):
	B = [float(i) for i in Matrix_b[0].split(' ')]
	return B

def work_with_methods(myA, myB, method):
	result = None
	if(method == '1'):
		result = Cramer(myA, myB)
	elif(method == '2'):
		result = Gauss(myA, myB)
	elif(method == '3'):
		result = Zeidel(myA, myB)
	elif(method == '4'):
		result = Gauss_Jordan(myA, myB)
	elif(method == '5'):
		result = Jacobi(myA, myB)
	return result



@app.route('/', methods=['post', 'get'])
def start_page():
	a_list = list()
	b_list = list()
	A = []
	B = []
	result = []
	if request.method == 'POST':
		method = request.form.get('methods')
		myA = request.form.get('A')
		myB = request.form.get('B')
		print(method)
		if(not myA or not myB):
			data_file = request.form.get('file')
			print(data_file)
		else:
			a_list.append(myA)
			b_list.append(myB)
			B = TakeB(b_list)
			A = TakeA(a_list, B)
			result = work_with_methods(A, B, method)
	return render_template('main_page.html', A=A, B=B, result=result)



