def close_far(a, b, c):
    def is_close(x, y):
        return abs(x - y) <= 1

    def is_far(x, y):
        return abs(x - y) >= 2

    return (is_close(a, b) and is_far(b, c) and is_far(a, c)) or \
           (is_close(a, c) and is_far(c, b) and is_far(a, b))
