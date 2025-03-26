arr = list(map(int, input().split()))
total = 0
for i in range(1, len(arr)-1):
    if(arr[i] > arr[i-1] and arr[i] > arr[i+1]):
        total += 1
print(total)