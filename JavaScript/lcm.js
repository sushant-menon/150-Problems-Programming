const lcm = (a, b) => {
  let min;
  let hcf;
  let lcm;

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

  lcm = (a * b) / hcf;
  console.log(lcm);
};

lcm(12, 15);
