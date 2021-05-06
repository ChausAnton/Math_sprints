import math

def func(x):
    return math.exp((-4 * x) - (x ** 3))


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

    

if __name__ == "__main__":
    print(parabola(func, 2, 4, 10000))

#6.734836315721683e-09