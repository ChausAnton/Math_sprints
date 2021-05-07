import math

def func(x, y):
    return ((x ** 2) - (2 * y))

def euler(f, a, b, Yo, N):
    res = []
    h = (b - a) / N
    x, y = a, Yo
    for i in range(1, N + 1):
        y = y + (h * f(x, y))
        x = a + (i * h)
        res.append(y)
    return res
    

if __name__ == "__main__":
    print(euler(func, 0, 1, 1, 10))