def lcm(a, b):
    min = None
    hcf = None
    lcm = None

    if a > b:
        min = b
    else:
        min = a

    for i in range(1, min + 1):
        if a % i == 0 and b % i == 0:
            hcf = i

    lcm = round((a * b) / hcf)
    print(lcm)


lcm(12, 15)
