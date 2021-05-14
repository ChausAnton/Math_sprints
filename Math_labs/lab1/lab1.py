import copy

def chek_input(matrixA, matrixB):
    A = []
    for i in matrixA:
        if i not in A:
            A.append(i.upper())
    
    B = []
    for i in matrixB:
        if i not in B:
            B.append(i.upper())

    return A, B

def entry(matrixA, matrixB):
    for i in matrixA:
       if i not in matrixB:
           return 'False'

    return 'True'

def union(matrixA, matrixB):
    res = matrixA.copy()
    for i in matrixB:
        if i not in res:
            res.append(i)
    return res

def intersection(matrixA, matrixB):
    return [i for i in matrixB if i in matrixA]

def difference(matrixA, matrixB):
    return [i for i in matrixA if i not in matrixB]

def symmetric_difference(matrixA, matrixB):
    return [i for i in union(matrixA, matrixB) if i not in matrixB or i not in matrixA]

if __name__ == "__main__":
    myA = [21, 9, 10, 7, 1, 2, 3, 3, 1, 7]
    myB = [21, 9, 10, 7, 0, 5, 14, 14, 9 ,10]
    myA1 = {21, 9, 10, 7, 1, 2, 3}
    myB1 = {21, 9, 10, 7, 0, 5, 14}
    myA, myB = chek_input(myA, myB)
    print(myA)
    print(myB)