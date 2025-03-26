def swap_case(s):
    s = list(s)
    for i in range(len(s)):
        if 'a' <= s[i] <= 'z':
            s[i] = chr(ord(s[i]) - 32)
        elif 'A' <= s[i] <= 'Z':
            s[i] = chr(ord(s[i]) + 32)
    return ''.join(s)

if __name__ == '__main__':
    s = input()
    print(swap_case(s))