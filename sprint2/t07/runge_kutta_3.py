import math

def func(x, y):
    return ((x ** 2) - (2 * y))

def runge_kutta_3(f, a, b, Yo, N):
    res = []
    h = (b - a) / N
    x, y = a, Yo
    for i in range(1, N + 1):
        k1 = h * f(x, y)
        k2 = h * f(x + (h/2), y + (k1/2))
        k3 = h * f(x + h, y + (2 * k2) - k1)
        y = y + ((1/6) * (k1 + (4 * k2) + k3))
        x = a + (i * h)
        res.append(y)
    return res
    

if __name__ == "__main__":
    print(runge_kutta_3(func, 0, 1, 1, 10))