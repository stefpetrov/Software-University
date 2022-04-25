function processOddNums(input) {
  let newArr = [];
  let inputL = input.length;

  for (let i = 0; i < inputL; i++) {
    if (i % 2 !== 0) {
      newArr.push(input[i]);
    }
  }
  newArr.reverse();

  let result = newArr.map((element) => {
    return element * 2;
  });
  console.log(result.join(" "));
}

processOddNums([3, 0, 10, 4, 7, 3]);
