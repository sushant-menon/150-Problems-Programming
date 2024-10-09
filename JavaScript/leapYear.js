const leapYear = year => {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log(`The year ${year} is a leap year.`);
  } else {
    console.log(`The year ${year} is not a leap year.`);
  }
};

leapYear(1900);
