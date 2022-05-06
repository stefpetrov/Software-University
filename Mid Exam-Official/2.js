function solve(input) {
  let arr = input.shift().split(" ").map(Number);

  let index = 0;
  let command = input[index];
  index++;

  while (command !== "Finish") {
    let exactCommand = command.split(" ").shift();

    if (exactCommand === "Add") {
      command = command.split(" ");
      let elementToAdd = +command[1];
      arr.push(elementToAdd);
    } else if (exactCommand === "Remove") {
      command = command.split(" ");
      let elementToRemove = +command[1];
      let indexToRemove = arr.indexOf(elementToRemove);
      if (arr.includes(elementToRemove)) {
        arr.splice(indexToRemove, 1);
      }
    } else if (exactCommand === "Replace") {
      command = command.split(" ");
      let elementToreplace = +command[1];
      let newElement = +command[2];
      if (arr.includes(elementToreplace)) {
        let indexToReplace = arr.indexOf(elementToreplace);

        arr.splice(indexToReplace, 1, newElement);
      }
    } else if (exactCommand === "Collapse") {
      command = command.split(" ");
      let elementToCollapse = +command[1];
      arr = arr.filter((el) => el >= elementToCollapse);
    }

    command = input[index];
    index++;
  }

  console.log(arr.join(" "));
}

solve(["5 9 70 -56 9 9", "Replace 9 10", "Remove 9", "Finish"]);
