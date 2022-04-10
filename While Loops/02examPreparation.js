function examPreparation(input) {
  let index = 0;
  let notAcceptable = Number(input[index]);
  index++;
  let taskName = input[index];
  index++;
  let grades = Number(input[index]);
  index++;

  let lastTask;
  let totalGrades = 0;
  let poorCounter = 0;
  let taskCounter = 0;

  while (taskName !== "Enough") {
    lastTask = taskName;
    totalGrades += grades;
    taskCounter++;

    if (grades <= 4) {
      poorCounter++;
    }
    if (poorCounter === notAcceptable) {
      console.log(`You need a break, ${poorCounter} poor grades.`);
      break;
    }

    taskName = input[index];
    index++;
    grades = Number(input[index]);
    index++;
  }

  if (taskName === "Enough") {
    console.log(`Average score: ${(totalGrades / taskCounter).toFixed(2)}`);
    console.log(`Number of problems: ${taskCounter}`);
    console.log(`Last problem: ${lastTask}`);
  }
}

examPreparation([
  "3",
  "Money",
  "6",
  "Story",
  "4",
  "Spring Time",
  "5",
  "Bus",
  "6",
  "Enough",
]);
