def split_and_join(line):
    line = list(line)
    for i in range(len(line)):
        if(line[i] == ' '):
            line[i] = '-'
    return ''.join(line)

if __name__ == '__main__':
    line = input()
    result = split_and_join(line)
    print(result)