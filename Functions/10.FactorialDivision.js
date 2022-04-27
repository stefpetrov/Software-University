function factorialDivision(num, devider) {
  let result = 1;
  let currentMultiply = 1;
  let currentDev = 1;

  for (let i = num - 1; i > 0; i--) {
    let currentMultiplier = i;

    currentMultiply *= currentMultiplier;
  }

  for (let j = devider - 1; j > 0; j--) {
    let currentDevider = j;

    currentDev *= currentDevider;
  }

  result = currentMultiply * num;
  let finalDevider = currentDev * devider;
  let finalResult = result / finalDevider;

  console.log(finalResult.toFixed(2));
}
factorialDivision(6, 2);
