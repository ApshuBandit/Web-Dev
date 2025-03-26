arr = list(map(int, input().split()))
for i in range(0, len(arr)+1, 2):
    print(arr[i], end=' ')