from math import sqrt
import copy
import numpy as np

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

def Jacobi(A,b):
    x = np.zeros(len(A[0]))

    D = np.diag(A)
    R = A - np.diagflat(D)

    for i in range(100):
        x = (b - np.dot(R,x)) / D
    return x

def SwapRows(A, B, row1, row2):
    A[row1], A[row2] = A[row2], A[row1]
    B[row1], B[row2] = B[row2], B[row1]

def DivideRow(A, B, row, divider):
    A[row] = [a / divider for a in A[row]]
    B[row] /= divider

def CombineRows(A, B, row, source_row, weight):
    A[row] = [(a + k * weight) for a, k in zip(A[row], A[source_row])]
    B[row] += B[source_row] * weight

def Gauss(A, B):
    column = 0
    while (column < len(B)):
        current_row = None
        for r in range(column, len(A)):
            if current_row is None or abs(A[r][column]) > abs(A[current_row][column]):
                 current_row = r
        if current_row is None:
            return None
        if current_row != column:
            SwapRows(A, B, current_row, column)
        DivideRow(A, B, column, A[column][column])
        for r in range(column + 1, len(A)):
            CombineRows(A, B, r, column, -A[r][column])
        column += 1
    X = [0 for b in B]
    for i in range(len(B) - 1, -1, -1):
        X[i] = B[i] - sum(x * a for x, a in zip(X[(i + 1):], A[i][(i + 1):]))
    return X

def Gauss_Jordan(A, B):
    cpy_A = np.copy(A)
    cpy_B = np.copy(B)
    column = 0
    while (column < len(cpy_B)):
        current_row = None
        for max_num_row in range(column, len(cpy_A)):
            if current_row is None:
                current_row = max_num_row
            elif abs(cpy_A[max_num_row][column]) > abs(cpy_A[current_row][column]):
                current_row = max_num_row

        if current_row is None:
            print("No results")
            return None
        
        if current_row != column:
            cpy_A[current_row], cpy_A[column] = np.copy(cpy_A[column]), np.copy(cpy_A[current_row])
            cpy_B[current_row], cpy_B[column] = np.copy(cpy_B[column]), np.copy(cpy_B[current_row])
        
        num = cpy_A[column][column]
        if(num != 0):
            for i in range(len(cpy_A[column])):
                cpy_A[column][i] /= num
            cpy_B[column] /= num
        
        for r in range(column + 1, len(cpy_A)):
            tmp = cpy_A[r][column]
            for i in range(len(cpy_A[r])):
                cpy_A[r][i] = cpy_A[r][i] - (cpy_A[column][i] * tmp)
            cpy_B[r] = cpy_B[r] - (cpy_B[column] * tmp)
        column += 1
    
    column -= 1
    while column > -1:
        for i in range(0,column):
            tmp = cpy_A[i][column]
            for j in range(len(cpy_A[i])):
                cpy_A[i][j] = cpy_A[i][j] - (cpy_A[column][j] * tmp)
            cpy_B[i] = cpy_B[i] - (cpy_B[column] * tmp)
        column -= 1
    
    X = [a for a in cpy_B]
    return X

def Cramer(A, B):
    result = np.array([], copy=True)
    D = np.linalg.det(A)
    a_work = np.copy(A)
    for i in range(len(B)):
        a_work[:, i] = B
        result = np.append(result, np.linalg.det(a_work)/D)
        a_work = np.copy(A)
    return result

def check_matrix(myA, myB, result):
    for line in range(len(myA)):
        count = 0
        for i in range(len(myA[line])):
            count += (myA[line][i] * result[i])
        if count != myB[line]:
            return False
    return True
        