import math

def func(x):
    return math.exp((-4 * x) - (x ** 3))

def left_rectangles(f, a, b, N):
    h = (b - a) / N
    temp_res = 0.0

    for i in range(N):
        x = a + (i * h)
        temp_res += f(x)

    return temp_res * h

    

if __name__ == "__main__":
    print(left_rectangles(func, 2, 4, 10000))