function train(commands) {
  let wagons = commands.shift().split(" ").map(Number);

  let capacity = Number(commands.shift());

  let command = commands.join(" ").split(" ");

  for (let i = 0; i < command.length; i++) {
    let currentCommand = command[i];
    if (currentCommand === "Add") {
      let wagonsToAdd = Number(command[i + 1]);
      i++;
      wagons.push(wagonsToAdd);
    } else {
      let passengersToAdd = Number(currentCommand);

      for (let j = 0; j < wagons.length; j++) {
        if (wagons[j] + passengersToAdd <= capacity) {
          wagons[j] += passengersToAdd;

          break;
        }
      }
    }
  }
  console.log(wagons.join(" "));
}

train(["32 54 21 12 4 0 23",
 "75",
 "Add 10",
 "Add 0",
 "30",
 "10",
 "75"]);
