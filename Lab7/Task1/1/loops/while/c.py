n = int(input())
min = n % 10
max = n % 10
n //= 10
while(n > 0):
    if(min > n % 10):
        min = n % 10
    if(max < n % 10):
        max = n % 10
    n //= 10
print(min, max)