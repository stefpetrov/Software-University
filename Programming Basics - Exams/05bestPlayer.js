function bestPlayer(input) {
  let index = 0;
  let name = input[index];
  index++;
  let goals = Number(input[index]);
  index++;
  let maxGoals = Number.MIN_SAFE_INTEGER;
  let maxGoalScorer;
  let isHasHatrick = false;

  while (name !== "END") {
    if (goals > maxGoals) {
      maxGoals = goals;
      maxGoalScorer = name;
    }
    if (maxGoals >= 10) {
      break;
    }

    name = input[index];
    index++;
    goals = Number(input[index]);
    index++;
  }
  if (maxGoals >= 3) {
    isHasHatrick = true;
  }

  const printString = isHasHatrick ? `He has scored ${maxGoals} goals and made a hat-trick !!!` : `He has scored ${maxGoals} goals.`;
  console.log(printString);

  if (isHasHatrick) {
    console.log(`${maxGoalScorer} is the best player!`);
    console.log(`He has scored ${maxGoals} goals and made a hat-trick !!!`);
  } else {
    console.log(`${maxGoalScorer} is the best player!`);
    console.log(`He has scored ${maxGoals} goals.`);
  }
}

bestPlayer(["Petrov", "2", "Drogba", "11"]);
