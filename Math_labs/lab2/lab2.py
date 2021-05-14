import copy

def get_adjacencies(ribs, numNodes):
    res = [[0 for i in range(numNodes)] for j in range(numNodes)]
    for i in range(1, len(res) + 1):
        for j in range(1, len(res) + 1):
            for k in range(len(ribs)):
                if ribs[k][0] == i and ribs[k][1] == j:
                    res[i - 1][j - 1] = 1
                    break
    return res

def get_incident(ribs, numNodes):
    res = [[0 for i in range(len(ribs))] for j in range(numNodes)]

    for i in range(1, len(res) + 1):
        for j in range(1, len(res[i - 1]) + 1):
                if ribs[j - 1][0] == i:
                    res[i - 1][j - 1] = 1
                elif ribs[j - 1][1] == i:
                    res[i - 1][j - 1] = -1
    return res

def degrees_of_vertices(ribs, numNodes):
    adjacencies = get_adjacencies(ribs, numNodes)
    degrees = []
    for i in range(len(adjacencies)):
        count = 0
        for j in range(len(adjacencies)):
            if adjacencies[i][j] == 1:
                count += 1

        for j in range(len(adjacencies)):
            if adjacencies[j][i] == 1:
                count += 1

        degrees.append(count)
    return degrees


def formF(ribs, numNodes):
    adjacencies = get_adjacencies(ribs, numNodes)
    form = dict()
    for i in range(len(adjacencies)):
        for j in range(len(adjacencies)):
            if adjacencies[i][j] == 1:
                if ("c" + str(i + 1)) not in form:
                    form["c" + str(i + 1)] = [("c" + str(j + 1))]
                else:
                    temp = form["c" + str(i + 1)]
                    temp = temp.append(("c" + str(j + 1)))
    return form


def displayF(ribs, numNodes):
    adjacencies = get_adjacencies(ribs, numNodes)
    display = dict()
    for i in range(len(adjacencies)):
        for j in range(len(adjacencies)):
            if adjacencies[j][i] == 1:
                if ("c" + str(i + 1)) not in display:
                    display["c" + str(i + 1)] = [("c" + str(j + 1))]
                else:
                    temp = display["c" + str(i + 1)]
                    temp = temp.append(("c" + str(j + 1)))
    return display


if __name__ == "__main__":
    print(get_incident(ribs , 6))