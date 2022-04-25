function arrayManipulations(commands) {
  let arr = commands.shift().split(" ").map(Number);
  
  for (let i = 0; i < commands.length; i++) {
    let command = commands[i].split(" ");
    let currentCommand = command[0];
    let firstNum = Number(command[1]);
    let secondNum = Number(command[2]);

    switch (currentCommand) {
      case "Add":
        arr.push(firstNum);
        break;
      case "Remove":
        for (let element of arr) {
          if (element === firstNum) {
            let index = arr.indexOf(element);
            arr.splice(index, 1);
          }
        }
        break;
      case "RemoveAt":
        arr.splice(firstNum, 1);

        break;
      case "Insert":
        arr.splice(secondNum, 0, firstNum);
        break;
    }
  }
  console.log(arr.join(" "));
}

arrayManipulations([
  "6 12 2 65 6 42",
  "Add 8",
  "Remove 12",
  "RemoveAt 3",
  "Insert 6 2",
]);
