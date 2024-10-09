def armstrongNumber(number):
    numStr = str(number)
    power = len(numStr)
    sum = 0

    for digit in numStr:
        sum += pow(int(digit), power)

    if sum == number:
        print(f"The given number {number} is a Armstrong number.")
    else: 
        print(f"The given number {number} is not a Armstrong number.")


armstrongNumber(371)
    