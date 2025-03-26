bin = input()
dec = 0

bin = bin[::-1]

for b in bin:
    dec *= 2
    if(b == '1'):
        dec += 1
print(dec)