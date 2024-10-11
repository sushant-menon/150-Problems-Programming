const factorial = number => {
  let factorialOfNumber = 1;

  for (i = 1; i <= number; i++) {
    factorialOfNumber *= i;
  }
  console.log(factorialOfNumber);
};

factorial(6);
