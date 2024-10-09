def primeOrNot(number):

    for num in range(2,number):
        if number % num == 0:
            print(f"The number {number} is not a prime number.")
            return          
        
    print(f"The number {number} is a prime number.")


primeOrNot(7)