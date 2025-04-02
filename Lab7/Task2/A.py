num = int(input())

while num> 1:
    if num % 2!= 0:
        print("NO")
        break
    num //=2
else:
    print("YEs")




def recur(num):
    if num ==1:
        return 1
    if num % 2 != 0 or num == 0:
        return 0
    return recur(num //2 )

