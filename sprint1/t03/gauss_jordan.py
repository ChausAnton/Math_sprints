import numpy as np


def gauss_jordan(A, B):
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

if __name__ == "__main__":
    myA=[[2.0, 1.0, 1.0],
    [1.0, -2.0, 0.0],
    [3.0, -1.0, 2.0]]
    myB = [2.0, -2.0, 2.0]
    print(gauss_jordan(myA, myB))