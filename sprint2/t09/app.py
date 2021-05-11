from flask import Flask, render_template, request
from methods import *
from formuls import *

app = Flask(__name__)


def work_with_formula(formula):
	if(formula == '1'):
		return formul1
	elif(formula == '2'):
		return formul2
	elif(formula == '3'):
		return formul3
	elif(formula == '4'):
		return formul4
	elif(formula == '5'):
		return formul5
	elif(formula == '6'):
		return formul6
	elif(formula == '7'):
		return formul7

def work_with_methods2(method, formula, a, b, Yo, N):
	F = work_with_formula(formula)
	result = None
	if(method == '6'):
		result = euler(F, a, b, Yo, N)
	elif(method == '7'):
		result = runge_kutta_2(F, a, b, Yo, N)
	elif(method == '8'):
		result = runge_kutta_3(F, a, b, Yo, N)
	elif(method == '9'):
		result = runge_kutta_4(F, a, b, Yo, N)
	return result


def work_with_methods(method, formula, a, b, N):
	F = work_with_formula(formula)
	result = None
	if(method == '1'):
		result = left_rectangles(F, a, b, N)
	elif(method == '2'):
		result = right_rectangles(F, a, b, N)
	elif(method == '3'):
		result = central_rectangles(F, a, b, N)
	elif(method == '4'):
		result = trapezium(F, a, b, N)
	elif(method == '5'):
		result = parabola(F, a, b, N)
	return result



@app.route('/', methods=['post', 'get'])
def start_page():
	result = []
	a = None
	b = None
	N = None
	if request.method == 'POST':
		try:
			method = request.form.get('methods1')
			formula = request.form.get('formula1')
			a = int(request.form.get('A1'))
			b = int(request.form.get('B1'))
			N = int(request.form.get('N1'))
			result = work_with_methods(method, formula, a, b, N)
		except:
			method = request.form.get('methods2')
			formula = request.form.get('formula2')
			a = int(request.form.get('A2'))
			b = int(request.form.get('B2'))
			N = int(request.form.get('N2'))
			Yo = float(request.form.get('Y0'))
			result = work_with_methods2(method, formula, a, b, Yo, N)
	return render_template('index.html', A=a, B=b, N=N, result=result)


if __name__ == "__main__":
	app.run(host='127.0.0.1', port=5000)