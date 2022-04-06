function equalPairs(input) {
  index = 0;

  let pairs = Number(input[index]);
  index++;

  let currentNumber;
  let pairSum = 0;
  let nextNumber;
  let nextCouple = 0;
  let maxdiff = 0;
  let newPairSum = 0;

  for (i = 0; i < pairs; i++) {
    currentNumber = Number(input[index]);
    index++;
    nextNumber = Number(input[index]);
    index++;

    if (i >= 1) {
      newPairSum = currentNumber + nextNumber;

      if (pairSum !== newPairSum) {
        maxdiff = Math.abs(pairSum - newPairSum);
      }
    }

    pairSum = currentNumber + nextNumber;
  }
  if (maxdiff > 0) {
    console.log(`No, maxdiff=${maxdiff}`);
  } else {
    console.log(`Yes, value=${pairSum}`);
  }
}

equalPairs([4, 1, 1, 3, 1, 2, 2, 0, 0]);
