from flask import Flask, render_template, request
from lab2 import *

app = Flask(__name__)


@app.route('/', methods=['post', 'get'])
def start_page():
	ribs = []
	ribs.append([1, 2])
	ribs.append([2, 3])
	ribs.append([3, 6])
	ribs.append([1, 4])
	ribs.append([4, 3])
	ribs.append([3, 4])
	ribs.append([4, 5])
	ribs.append([6, 5])
	ribs.append([2, 4])
	ribs.append([5, 3])
	numNodes = 6

	adjacencies = get_adjacencies(ribs, numNodes)
	incident = get_incident(ribs, numNodes)
	degrees_vertices = degrees_of_vertices(ribs, numNodes)
	form = formF(ribs, numNodes)
	display = displayF(ribs, numNodes)
	return render_template('index.html', adjacencies=adjacencies, incident=incident, degrees_vertices=degrees_vertices, form=form, display=display)


if __name__ == "__main__":
	app.run(host='127.0.0.1', port=5000)