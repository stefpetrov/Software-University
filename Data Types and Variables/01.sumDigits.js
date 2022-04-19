function solve(num) {
  let numString = num.toString()
  let result = 0;

  for (let i = 0; i < numString.length; i++) {
    let currentNum = Number(numString[i]);
    result += currentNum;
  }
  console.log(result);
}

solve(97561);
