import math

def func(x):
    return math.exp((-4 * x) - (x ** 3))

def trapezium(f, a, b, N):
    h = (b - a) / N
    temp_res = 0.0

    for i in range(1, N):
        x = a + (i * h)
        temp_res += f((x + (h/2)))


    return ((temp_res + ((f(a) + f(a + (N * h)))/2)) * h)

    

if __name__ == "__main__":
    print(trapezium(func, 2, 4, 10000))