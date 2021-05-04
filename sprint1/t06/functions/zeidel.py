from math import sqrt
import copy

def Zeidel(A, b):
	x = [.0 for i in range(len(A))]
	Iteration = 0
	converge = False
	pogr = 0.
	while not converge:
	    x_new = copy.copy(x)
	    for i in range(len(A)):
	        s1 = sum(A[i][j] * x_new[j] for j in range(i))
	        s2 = sum(A[i][j] * x[j] for j in range(i + 1, len(A)))
	        x_new[i] = (b[i] - s1 - s2) / A[i][i]
	    pogr = sum(abs(x_new[i] - x[i])  for i in range(len(A)))
	    converge =  pogr < 1e-6
	    Iteration += 1
	    x = x_new
	return x

if __name__ == "__main__":
    myA=[
    [2, 1, 1],
    [1, -1, 0],
    [3, -1, 2]
    ]
    myB = [2, -2, 2]
    print(Zeidel(myA, myB))
    