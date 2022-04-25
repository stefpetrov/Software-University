function lastKNumbersSequence(n, k) {
  let result = [1];

  let lengthOfSequance = n;
  let countOfNumsToSum = k;

  for (let i = 1; i < lengthOfSequance; i++) {
    let startIndex = Math.max(0, i - countOfNumsToSum);
    let currentElement = result.slice(startIndex,startIndex + countOfNumsToSum);
    let sum = currentElement.reduce((suma, element) => {
      return suma + element;
    });
    result.push(sum);
  }

  console.log(result.join(" "));
}
lastKNumbersSequence(6, 3);
