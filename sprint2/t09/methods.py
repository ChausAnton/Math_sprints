import math

def left_rectangles(f, a, b, N):
    h = (b - a) / N
    temp_res = 0.0

    for i in range(N):
        x = a + (i * h)
        temp_res += f(x)

    return temp_res * h

def right_rectangles(f, a, b, N):
    h = (b - a) / N
    temp_res = 0.0

    for i in range(1, N + 1):
        x = a + (i * h)
        temp_res += f(x)

    return temp_res * h

def central_rectangles(f, a, b, N):
    h = (b - a) / N
    temp_res = 0.0

    for i in range(N):
        x = a + (i * h)
        temp_res += f((x + (h/2)))

    return temp_res * h

def trapezium(f, a, b, N):
    h = (b - a) / N
    temp_res = 0.0

    for i in range(1, N):
        x = a + (i * h)
        temp_res += f((x + (h/2)))


    return ((temp_res + ((f(a) + f(a + (N * h)))/2)) * h)

def parabola(f, a, b, N):
    temp_res, odd, even = 0, 0, 0
    h = (b - a) / N

    first_last = (f(a) + f(a + (N * h)))

    for i in range(2 , N - 2, 2):
        x = a + (i * h)
        even += f(x)

    for i in range(1, N - 1, 2):
        x = a + (i * h)
        odd += f(x)

    temp_res = first_last + (2 * even) + (4 * odd) 

    return ((h/3) * temp_res)

def euler(f, a, b, Yo, N):
    res = []
    h = (b - a) / N
    x, y = a, Yo
    for i in range(1, N + 1):
        y = y + (h * f(x, y))
        x = a + (i * h)
        res.append(y)
    return res

def runge_kutta_2(f, a, b, Yo, N):
    res = []
    h = (b - a) / N
    x, y = a, Yo
    for i in range(1, N + 1):
        k1 = h * f(x, y)
        k2 = h * f(x + (h/2), y + (k1/2))
        y = y + k2
        x = a + (i * h)
        res.append(y)
    return res

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