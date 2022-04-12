function sumPrimeNonPrime(input) {
  let index = 0;
  let command = input[index];
  index++;

  let sumPrime = 0;
  let sumNotPrime = 0;

  while (command !== "stop") {
    let currentNum = Number(command);
    let counter = 0;

    if (currentNum < 0) {
      console.log("Number is negative.");

      command = input[index];
      index++;
      continue;
    }

    for (let n = 1; n <= currentNum; n++) {
      if (currentNum % n === 0) {
        counter++;

        if (counter > 2) {
          sumNotPrime += currentNum;
          break;
        }
      }
    }
    if (counter <= 2) {
      sumPrime += currentNum;
    }

    command = input[index];
    index++;
  }

  console.log(`Sum of all prime numbers is: ${sumPrime}`);
  console.log(`Sum of all non prime numbers is: ${sumNotPrime}`);
}

sumPrimeNonPrime(["30", "83", "33", "-1", "20", "stop"]);
