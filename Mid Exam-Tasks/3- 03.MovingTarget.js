function movingTarget(input) {
  let arr = input.shift().split(" ").map(Number);

  let index = 0;
  let command = input[index];
  index++;
  while (command !== "End") {
    let separateCommand = command.split(" ");

    let correctCommand = separateCommand[0];
    let indexToModifie = +separateCommand[1];

    if (correctCommand === "Shoot") {
      let shootingPower = +separateCommand[2];

      if (indexToModifie >= 0 && indexToModifie < arr.length) {
        arr[indexToModifie] -= shootingPower;
        if (arr[indexToModifie] <= 0) {
          arr.splice(indexToModifie, 1);
        }
      } else {
        command = input[index];
        index++;
        continue;
      }
    } else if (correctCommand === "Add") {
      let numToAdd = +separateCommand[2];

      if (indexToModifie >= 0 && indexToModifie < arr.length) {
        arr.splice(indexToModifie, 0, numToAdd);
      } else {
        console.log("Invalid placement!");
        command = input[index];
        index++;
        continue;
      }
    } else if (correctCommand === "Strike") {
      let radius = +separateCommand[2];
      if (indexToModifie >= 0 && indexToModifie < arr.length) {
        let strikePower = radius * 2 + 1;
        let startingIndex = indexToModifie - radius;
        if (startingIndex >= 0 || startingIndex >= arr.length) {
          arr.splice(startingIndex, strikePower);
        } else {
          console.log("Strike missed!");
        }
      }
    }

    command = input[index];
    index++;
  }
  if (command === "End") {
    console.log(`${arr.join("|")}`);
  }
}

movingTarget([
  "52 74 23 44 96 110",
  "Shoot 5 10",
  "Shoot 1 80",
  "Strike 2 1",
  "Add 22 3",
  "End",
]);
