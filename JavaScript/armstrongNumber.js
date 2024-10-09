const armstrongNumber = number => {
  const numStr = number.toString();
  const power = numStr.length;
  let sum = 0;
  for (let i = 0; i < numStr.length; i++) {
    sum += Math.pow(Number(numStr[i]), power);
  }
  if (sum === number) {
    console.log(`The given number ${number} is a Armstrong number.`);
  } else {
    console.log(`The given number ${number} is not a Armstrong number.`);
  }
};

armstrongNumber(370);
