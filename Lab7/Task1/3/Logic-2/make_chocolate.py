def make_chocolate(small, big, goal):
    big_used = min(big, goal // 5)
    remaining = goal - big_used * 5
    return remaining if remaining <= small else -1
