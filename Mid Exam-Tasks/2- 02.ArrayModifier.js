function arrayModifier(input) {
  let arr = input.shift().split(" ").map(Number);

  let index = 0;
  let commands = input[index];
  index++;

  while (commands !== "end") {
    let newCommand = commands.split(" ");

    let exactCommand = newCommand.shift();
    let buffer = 0;
    if (exactCommand === "swap") {
      let firstIndex = +newCommand.shift();
      let secondIndex = +newCommand.shift();
      buffer = arr[firstIndex];

      arr[firstIndex] = arr[secondIndex];
      arr[secondIndex] = buffer;
    } else if (exactCommand === "multiply") {
      let firstIndex = +newCommand.shift();
      let secondIndex = +newCommand.shift();
      buffer = arr[firstIndex] * arr[secondIndex];
      arr[firstIndex] = buffer;
    } else if (exactCommand === "decrease") {
      arr = arr.map((el) => {
        return el - 1;
      });
    }

    commands = input[index];
    index++;
  }
  console.log(arr.join(", "));
}

arrayModifier([
  "1 2 3 4",
  "swap 0 1",
  "swap 1 2",
  "swap 2 3",
  "multiply 1 2",
  "decrease",
  "end",
]);
