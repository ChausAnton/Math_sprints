import math

def func(x, y):
    return ((x ** 2) - (2 * y))

def runge_kutta_4(f, a, b, Yo, N):
    res = []
    h = (b - a) / N
    x, y = a, Yo
    for i in range(1, N + 1):
        k1 = f(x, y)
        k2 = (f(x + (h/2), y + ((h * k1)/2)))
        k3 = (f(x + (h/2), y + ((h * k2)/2)))
        k4 = f(x + h, y + (h * k3))
        y = y + ((h/6) * (k1 + (2 * k2) + (2 * k3) + k4))
        x = a + (i * h)
        res.append(y)
    return res
    

if __name__ == "__main__":
    print(runge_kutta_4(func, 0, 1, 1, 10))