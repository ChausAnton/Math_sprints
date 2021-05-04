import numpy

def jacobi(A,b):
    x = numpy.zeros(len(A[0]))

    D = numpy.diag(A)
    R = A - numpy.diagflat(D)

    for i in range(100):
        x = (b - numpy.dot(R,x)) / D
    return x



if __name__ == "__main__":
    myA=[
    [2, 1, 1],
    [1, -1, 0],
    [3, -1, 2]
    ]
    myB = [2, -2, 2]
    print(jacobi(myA,myB))