const primeOrNot = number => {
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      console.log(`The number ${number} is not a prime number`);
      return;
    }
  }
  return console.log(`The number ${number} is a prime number`);
};

primeOrNot(8);
