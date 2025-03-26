def count_substring(string, sub_string):
    len_str = len(string)
    len_sub = len(sub_string)
    total = 0
    for i in range(len_str-len_sub+1):
        t = True
        for j in range(len_sub):
            if(string[i+j] != sub_string[j]):
                t = False
                break
        if(t):
            total += 1
    return total

if __name__ == '__main__':
    string = input().strip()
    sub_string = input().strip()
    
    count = count_substring(string, sub_string)
    print(count)