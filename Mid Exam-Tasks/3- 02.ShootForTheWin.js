function shootForTheWin(input) {
  let arr = input.shift().split(" ").map(Number);

  let index = 0;
  let command = input[index];
  index++;
  let counter = 0;

  while (command !== "End") {
    let targetIndex = +command;

    if (
      targetIndex < 0 ||
      targetIndex > arr.length - 1 ||
      arr[targetIndex] === -1
    ) {
      command = input[index];
      index++;
      continue;
    } else {
      counter++;

      for (let i = 0; i < arr.length; i++) {
        if (i !== targetIndex && arr[i] !== -1) {
          if (arr[i] > arr[targetIndex]) {
            arr[i] -= arr[targetIndex];
          } else {
            arr[i] += arr[targetIndex];
          }
        }
      }

      arr[targetIndex] = -1;
    }

    command = input[index];
    index++;
  }
  if (command === "End") {
    console.log(`Shot targets: ${counter} -> ${arr.join(" ")}`);
  }
}

shootForTheWin(["24 50 36 70",
"0",
"4",
"3",
"1",
"End"]);
