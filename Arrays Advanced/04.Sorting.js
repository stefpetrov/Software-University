function sorting(arr) {
  let newArr = [];

  let sortedArr = arr.sort((a, b) => {
    return a - b;
  });

  for (let i = sortedArr.length / 2; i > 0; i--) { // 1 iteration =  2 operations

    let biggestElement = sortedArr.pop();
    newArr.push(biggestElement);
    let smallestElement = sortedArr.shift();
    newArr.push(smallestElement);
  }
  console.log(newArr.join(" "));
}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
