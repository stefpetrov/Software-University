function sumOfTwoNumbers(input) {
  let startNum = Number(input[0]);
  let endNum = Number(input[1]);
  let magicNum = Number(input[2]);
  
  let counter = 0;

  
  let isHaveAresult = false;

  for (i = startNum; i <= endNum; i++) {
    for (x = startNum; x <= endNum; x++) {
      counter++;

      if (i + x === magicNum) {
        console.log(`Combination N:${counter} (${i} + ${x} = ${magicNum})`);
        isHaveAresult = true;
        break;
      }
    }
    if (isHaveAresult === true) {
      break;
    }
  }

  if (isHaveAresult === false) {
    console.log(`${counter} combinations - neither equals ${magicNum}`);
  }
}

sumOfTwoNumbers(["1", "10", "5"]);
