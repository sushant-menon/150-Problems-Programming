const gcd = (a, b) => {
  let min = 0;

  if (a > b) {
    min = b;
  } else {
    min = a;
  }

  for (let i = 1; i <= min; i++) {
    if (a % i === 0 && b % i === 0) {
      hcf = i;
    }
  }

  console.log(hcf);
};

gcd(48, 18);
