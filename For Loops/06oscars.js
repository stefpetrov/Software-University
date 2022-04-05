function oscars(input) {
  let index = 0;
  let nameActor = input[index];
  index++;
  let pointsFromAcademy = Number(input[index]);
  index++;
  let countJudges = Number(input[index]);
  index++;

  let judgeName;
  let judgePoints = 0;
  let sum = 0;

  for (i = 0; i < countJudges; i++) {
    judgeName = input[index];
    index++;
    judgePoints = Number(input[index]);
    index++;
    let totalJudgePointsFor1Judge = (judgePoints * judgeName.length) / 2;

    sum += totalJudgePointsFor1Judge;

    if (sum + pointsFromAcademy > 1250.5) {
      break;
    }
  }

  let finalScore = sum + pointsFromAcademy;
  let diff = Math.abs(finalScore - 1250.5);

  if (finalScore > 1250.5) {
    console.log(
      `Congratulations, ${nameActor} got a nominee for leading role with ${finalScore.toFixed(
        1
      )}!`
    );
  } else {
    console.log(`Sorry, ${nameActor} you need ${diff.toFixed(1)} more!`);
  }
}

oscars([
  "Sandra Bullock",
  "340",
  "5",
  "Robert De Niro",
  "50",
  "Julia Roberts",
  "40.5",
  "Daniel Day-Lewis",
  "39.4",
  "Nicolas Cage",
  "29.9",
  "Stoyanka Mutafova",
  "33",
]);
