def check_matrix(myA, myB, result):
    for line in range(len(myA)):
        count = 0
        for i in range(len(myA[line])):
            count += (myA[line][i] * result[i])
        if count != myB[line]:
            return False
    return True

if __name__ == "__main__":
    myA = [[2.0, 1.0, 1.0], [1.0, -2.0, 0.0], [3.0, -1.0, 2.0]]
    myB = [2.0, -2.0, 2.0]
    result = [-0.4, 0.8, 2]
    print(check_matrix(myA, myB, result))