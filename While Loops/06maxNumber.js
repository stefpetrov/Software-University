function maxNumber(input) {
  let index = 0;
  let command = input[index];
  index++;

  let maxNum = Number.MIN_SAFE_INTEGER;

  while (command !== "Stop") {
    let currentNum = Number(command);
    if (currentNum > maxNum) {
      maxNum = currentNum;
    }
    command = input[index];
    index++;
  }

  console.log(maxNum);
}

maxNumber(["-1", "-2", "Stop"]);
