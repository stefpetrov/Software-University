function searchForANumber(arr, parameters) {
  let elementsToTake = parameters[0];
  let elementsToDel = parameters[1];
  let searchingNum = parameters[2];

  let modifiedArr = arr.slice(0, elementsToTake);
  modifiedArr.splice(0, elementsToDel);
  let counter = 0;
  for (let i = 0; i < modifiedArr.length; i++) {
    if (modifiedArr[i] === searchingNum) {
      counter++;
    }
  }
  console.log(`Number ${searchingNum} occurs ${counter} times.`);
}

searchForANumber([5, 2, 3, 4, 1, 6],
    [5, 2, 3]);
