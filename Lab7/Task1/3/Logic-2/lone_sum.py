def lone_sum(a, b, c):
    return sum(n for n in (a, b, c) if (a, b, c).count(n) == 1)
