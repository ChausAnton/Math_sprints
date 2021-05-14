from flask import Flask, render_template, request
from lab1 import *

app = Flask(__name__)

def find_method(method, A, B):
	if(method == '1'):
		return entry(A, B)
	elif(method == '2'):
		return entry(B, A)
	elif(method == '3'):
		return difference(A, B)
	elif(method == '4'):
		return difference(B, A)
	elif(method == '5'):
		return union(B, A)
	elif(method == '6'):
		return intersection(A, B)
	elif(method == '7'):
		return symmetric_difference(A, B)
	

@app.route('/', methods=['post', 'get'])
def start_page():
	result = []
	A = None
	B = None
	if request.method == 'POST':
		method = request.form.get('methods')
		A = request.form.get('A')
		B = request.form.get('B')
		A, B = chek_input(A, B)
		result = find_method(method, A, B)
		print(result)
	return render_template('index.html', result=result, A=A, B=B)


if __name__ == "__main__":
	app.run(host='127.0.0.1', port=5000)