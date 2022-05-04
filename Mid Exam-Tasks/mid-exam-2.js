function arrayModifier(input) {
  let arr = input.shift().split(" ").map(Number);

  let index = 0;
  let command = input[index];
  index++;

  while (command !== "end") {
    command = command.split(" ");
    let correctCommand = command.shift();

    if (correctCommand === "swap") {
      let firstIndex = +command[0];
      let secondIndex = +command[1];
      let buffer = arr[firstIndex];

      arr[firstIndex] = arr[secondIndex];
      arr[secondIndex] = buffer;
    } else if (correctCommand === "multiply") {
      let firstIndex = +command[0];
      let secondIndex = +command[1];
      let multiply = arr[firstIndex] * arr[secondIndex];
      arr[firstIndex] = multiply;
    } else if (correctCommand === "decrease") {
      arr = arr.map((x) => x - 1);
    }
    command = input[index];
    index++;
  }
  console.log(arr.join(", "));
}

arrayModifier([
  "23 -2 321 87 42 90 -123",
  "swap 1 3",
  "swap 3 6",
  "swap 1 0",
  "multiply 1 2",
  "multiply 2 1",
  "decrease",
  "end",
]);
