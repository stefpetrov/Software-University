function counterStrike(input) {
  let initialEnergy = +input.shift();

  let index = 0;
  let command = input[index];
  index++;

  let countWins = 0;
  let isPassed = true;

  while (command !== "End of battle") {
    let distance = +command;

    if (initialEnergy >= distance) {
      initialEnergy -= distance;
      countWins++;
    } else if (initialEnergy < distance) {
      console.log(
        `Not enough energy! Game ends with ${countWins} won battles and ${initialEnergy} energy`
      );
      isPassed = false;
      break;
    }
    if (countWins % 3 === 0) {
      initialEnergy += countWins;
    }

    command = input[index];
    index++;
  }
  if (command === "End of battle") {
    console.log(`Won battles: ${countWins}. Energy left: ${initialEnergy}`);
  }
}

counterStrike(["200", "54", "14", "28", "13", "End of battle"]);
