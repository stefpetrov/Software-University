function solve(arr) {
  let firstArray = arr;
  let secondArray = [];
  let firstArrSum = 0;
  let secondArrSum = 0;

  for (let i = 0; i < firstArray.length; i++) {
    let currentNum = firstArray[i];
    let newCurrentNum;
    firstArrSum += currentNum;

    if (currentNum % 2 === 0) {
      newCurrentNum = currentNum + i;
      secondArrSum += newCurrentNum;
      secondArray.push(newCurrentNum);
    } else {
      newCurrentNum = currentNum - i;
      secondArrSum += newCurrentNum;
      secondArray.push(newCurrentNum);
    }
  }
  console.log(secondArray);
  console.log(firstArrSum);
  console.log(secondArrSum);
}
solve([5, 15, 23, 56, 35]);
