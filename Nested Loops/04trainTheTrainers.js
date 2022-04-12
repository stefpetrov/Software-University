function trainTheTrainers(input) {
  let index = 0;
  let judges = Number(input[index]);
  index++;
  let command = input[index];
  index++;

  let sumOfGrade = 0;
  let counter = 0;

  while (command !== "Finish") {
    let name = command;
    let tempSumGrade = 0;

    for (let i = 0; i < judges; i++) {
      counter++;
      let grade = Number(input[index]);
      index++;

      tempSumGrade += grade;
      sumOfGrade += grade;
    }

    let avgTempGrade = tempSumGrade / judges;

    console.log(`${name} - ${avgTempGrade.toFixed(2)}.`);

    command = input[index];
    index++;
  }
  let avgGrade = sumOfGrade / counter;
  console.log(`Student's final assessment is ${avgGrade.toFixed(2)}.`);

  
}

trainTheTrainers([
  "2",
  "While-Loop",
  "6.00",
  "5.50",
  "For-Loop",
  "5.84",
  "5.66",
  "Finish",
]);
