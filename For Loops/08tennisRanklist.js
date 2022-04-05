function tennisRanklist(input) {
  let index = 0;
  let countTournaments = Number(input[index]);
  index++;
  let startingPoints = Number(input[index]);
  index++;
  let points = 0;
  let totalPoints;
  let winCounter = 0;

  for (i = 0; i < countTournaments; i++) {
    let result = input[index];
    index++;

    switch (result) {
      case "W":
        points += 2000;
        winCounter++;
        break;
      case "F":
        points += 1200;
        break;
      case "SF":
        points += 720;
        break;
    }
    totalPoints = points + startingPoints;
  }

  let avgPoints = Math.floor(points / countTournaments);
  let winPercent = ((winCounter / countTournaments) * 100).toFixed(2);
  console.log(`Final points: ${totalPoints}`);
  console.log(`Average points: ${avgPoints}`);
  console.log(winPercent + "%");
}

tennisRanklist(["7", "1200", "SF", "F", "W", "F", "W", "SF", "W"]);
