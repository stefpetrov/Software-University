function oddAndEvenSum(num) {
  function evenSumFunc(n1) {
    let evenSum = 0;
    let n1AsString = n1.toString();
    let n1Length = n1AsString.length;

    for (let i = 0; i < n1Length; i++) {
      let currentElement = Number(n1AsString[i]);
      if (currentElement % 2 === 0) {
        evenSum += currentElement;
      }
    }
    return evenSum;
  }
  function oddSumFunc(n2) {
    let oddSum = 0;
    let n2AsString = n2.toString();
    let n2Length = n2AsString.length;

    for (let i = 0; i < n2Length; i++) {
      let currentElement = Number(n2AsString[i]);
      if (currentElement % 2 !== 0) {
        oddSum += currentElement;
      }
    }
    return oddSum;
  }

  console.log(`Odd sum = ${oddSumFunc(num)}, Even sum = ${evenSumFunc(num)}`);

  //   let numToString = num.toString();
  //   let numLength = numToString.length;
  //   let evenSum = 0;
  //   let oddSum = 0;

  //   for (let i = 0; i < numLength; i++) {
  //     let currentElement = Number(numToString[i]);

  //     if (currentElement % 2 === 0) {
  //       evenSum += currentElement;
  //     } else {
  //       oddSum += currentElement;
  //     }
  //   }

  //   console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

oddAndEvenSum(3495892137259234);
