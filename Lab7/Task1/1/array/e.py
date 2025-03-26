arr = list(map(int, input().split()))
for i in range(1, len(arr)):
    if not((arr[i] > 0) ^ (arr[i-1] > 0)):
        print(arr[i-1], arr[i])
        break