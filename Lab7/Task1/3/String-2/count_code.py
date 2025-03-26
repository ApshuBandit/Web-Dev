def count_code(s):
    return sum(1 for i in range(len(s) - 3) if s[i:i+2] == 'co' and s[i+3] == 'e')
