n = int(input())
m = 0

while(n > 0):
    if (n % 10 == 0):
        m += 1
    n //= 10
print(m)