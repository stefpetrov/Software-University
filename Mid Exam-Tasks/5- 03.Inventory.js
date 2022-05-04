function inventory(input) {
  let arr = input.shift().split(", ");

  let index = 0;
  let command = input[index];
  index++;

  while (command !== "Craft!") {
    let operation = command.split(" - ");

    if (operation[0] === "Collect" && !arr.includes(operation[1])) {
      arr.push(operation[1]);
    } else if (operation[0] === "Drop" && arr.includes(operation[1])) {
      let indexToDrop = arr.indexOf(operation[1]);
      arr.splice(indexToDrop, 1);

      command = input[index];
      index++;

      continue;
    } else if (operation[0] === "Combine Items") {
      let items = operation[1].split(":");
      let oldItem = items[0];
      let newItem = items[1];
      if (arr.includes(oldItem)) {
        let indexToCombine = arr.indexOf(oldItem) + 1;
        arr.splice(indexToCombine, 0, newItem);

        command = input[index];
        index++;
        continue;
      }
      command = input[index];
      index++;
      continue;
    } else if (operation[0] === "Renew" && arr.includes(operation[1])) {
      let indexToRenew = arr.indexOf(operation[1]);
      arr.splice(indexToRenew, 1);
      arr.push(operation[1]);

      command = input[index];
      index++;
      continue;
    }

    command = input[index];
    index++;
  }
  console.log(arr.join(", "));
}
inventory([
    'Iron, Wood, Sword', 
    'Collect - Gold', 
    'Drop - Wood', 
    'Craft!'
  ])
