const fibonacciSeries = limit => {
  let series = [0, 1];

  while (true) {
    const nextNumber = series[series.length - 1] + series[series.length - 2];

    if (nextNumber > limit) break;

    series.push(nextNumber);
  }
  console.log(series);
};

fibonacciSeries(10);
