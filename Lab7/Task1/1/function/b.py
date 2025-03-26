def power(a, n):
    return a**n

a, n = list(map(int, input().split()))
print(power(a, n))