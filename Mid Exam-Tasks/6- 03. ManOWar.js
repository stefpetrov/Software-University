function manOWar(input) {
  let pirateShip = input.shift().split(">").map(Number);
  let warShip = input.shift().split(">").map(Number);
  let maxHealth = +input.shift();

  let index = 0;
  let command = input[index];
  index++;
  let isPirateSunk = false;
  let isWarSunk = false;

  while (command !== "Retire") {
    let exactCommand = command.split(" ");
    let operation = exactCommand.shift();

    if (operation === "Fire") {
      let fireIndex = +exactCommand.shift();
      let damage = +exactCommand.shift();
      if (fireIndex >= 0 && fireIndex < warShip.length) {
        warShip[fireIndex] -= damage;
        if (warShip[fireIndex] <= 0) {
          isWarSunk = true;
          break;
        }
      } else {
        command = input[index];
        index++;
        continue;
      }
    } else if (operation === "Defend") {
      let startIndex = +exactCommand.shift();
      let endIndex = +exactCommand.shift();
      let damage = +exactCommand.shift();

      if (
        startIndex >= 0 &&
        startIndex < pirateShip.length &&
        endIndex >= 0 &&
        endIndex < pirateShip.length
      ) {
        for (let i = startIndex; i <= endIndex; i++) {
          pirateShip[i] -= damage;
          if (pirateShip[i] <= 0) {
            isPirateSunk = true;
            break;
          }
        }
      }
    } else if (operation === "Repair") {
      let repairIndex = +exactCommand.shift();
      let repairedHealthPlus = +exactCommand.shift();

      if (repairIndex >= 0 && repairIndex < pirateShip.length) {
        pirateShip[repairIndex] += repairedHealthPlus;
        if (pirateShip[repairIndex] > maxHealth) {
          pirateShip[repairIndex] = maxHealth;
        }
      }
    } else if (operation === "Status") {
      let counterForRepair = 0;
      for (let elements of pirateShip) {
        if (elements < maxHealth * 0.2) {
          counterForRepair++;
        }
      }
      console.log(`${counterForRepair} sections need repair.`);
    }

    command = input[index];
    index++;
  }
  if (isWarSunk) {
    console.log("You won! The enemy ship has sunken.");
  } else if (isPirateSunk) {
    console.log("You lost! The pirate ship has sunken.");
  } else {
    let finalPirateShip = pirateShip.reduce((acc, b) => {
      return acc + b;
    }, 0);
    let finalWarShip = warShip.reduce((acc, b) => {
      return acc + b;
    }, 0);
    console.log(`Pirate ship status: ${finalPirateShip}`);
    console.log(`Warship status: ${finalWarShip}`);
  }
}

manOWar([
  "12>13>11>20>66",
  "12>22>33>44>55>32>18",
  "70",
  "Fire 2 11",
  "Fire 8 100",
  "Defend 3 6 11",
  "Defend 0 3 5",
  "Repair 1 33",
  "Status",
  "Retire",
]);
