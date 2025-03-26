x = input()
nul = True

x = x[::-1]
for c in x:
    if(c != '0'):
        nul = False
    if(nul != True):
        print(c, end='')