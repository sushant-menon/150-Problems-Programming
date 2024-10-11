import math


def sumOfDigits(number):
    sum = 0

    while number > 0:
        sum += number % 10
        number = math.floor(number / 10)

    print(sum)


sumOfDigits(2333)
