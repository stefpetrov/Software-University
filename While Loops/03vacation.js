function vacation(input) {
  let index = 0;
  let neededMoney = Number(input[index]);
  index++;
  let money = Number(input[index]);
  index++;
  let command = input[index];
  index++;
  let amount = Number(input[index]);
  index++;
  let dayCounter = 0;
  let lastCommand;
  let spendCounter = 0;

  while (money < neededMoney) {
    dayCounter++;
    switch (command) {
      case "save":
        money += amount;
        spendCounter = 0;
        break;
      case "spend":
        if (amount > money) {
          money = 0;
        } else {
          money -= amount;
        }
        break;
    }

    if (command === "spend") {
      lastCommand = "spend";
      spendCounter++;

      if (spendCounter > 4) {
        console.log("You can't save the money.");
        console.log(`${dayCounter}`);
        break;
      }
    }

    command = input[index];
    index++;
    amount = Number(input[index]);
    index++;
  }
  if (money >= neededMoney) {
    console.log(`You saved the money for ${dayCounter} days.`);
  }
}
vacation([
  "110",
  "60",
  "spend",
  "10",
  "spend",
  "10",
  "spend",
  "10",
  "spend",
  "10",
  "spend",
  "10",
]);
