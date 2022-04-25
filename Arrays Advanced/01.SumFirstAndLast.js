function sumFirstAndLast(input) {
  let arrAsNumbers = input.map(Number);

  let firstNum = arrAsNumbers.shift();

  let lastNum = arrAsNumbers.pop();

  let sum = firstNum + lastNum;

  console.log(sum);
}

sumFirstAndLast(["5", "30", "10"]);
