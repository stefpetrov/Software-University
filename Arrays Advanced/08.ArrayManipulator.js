function arrayManipulator(arr, arrOfCommands) {
  let index = 0;
  let commands = arrOfCommands[index++];

  while (commands !== "print") {
    commands = commands.split(" ");
    let currentCommand = commands.shift();

    if (currentCommand === "add") {
      let indexToAdd = +commands[0];
      let numToAdd = +commands[1];

      add(indexToAdd, numToAdd);
    } else if (currentCommand === "addMany") {
      let indexToAddMany = +commands.shift();
      let commandAsNums = commands.map(Number);

      addMany(indexToAddMany, commandAsNums);
    } else if (currentCommand === "contains") {
      let element = +commands.shift();

      contains(arr, element);
    } else if (currentCommand === "remove") {
      let indexToRemove = +commands.shift();

      remove(indexToRemove);
    } else if (currentCommand === "shift") {
      let position = +commands.shift();

      for (let i = 0; i < position; i++) {
        let element = arr.shift();
        arr.push(element);
      }
    } else if (currentCommand === "sumPairs") {
      let newArr = [];

      if (arr.length % 2 !== 0) {
        arr.push(0);
      }
      let arrL = arr.length;
      for (let i = 0; i < arrL; i += 2) {
        let currentElement = arr.shift();
        let nextElement = arr.shift();

        let sum = currentElement + nextElement;
        newArr.push(sum);
      }
      arr = newArr;
    }

    commands = arrOfCommands[index++];
  }

  function add(index, el) {
    arr.splice(index, 0, el);
    return arr;
  }
  function addMany(index, elements) {
    arr.splice(index, 0, ...elements);
    return arr;
  }
  function contains(arr, el) {
    if (arr.includes(el)) {
      console.log(arr.indexOf(el));
    } else {
      console.log("-1");
    }
  }
  function remove(index) {
    arr.splice(index, 1);
    return arr;
  }

  console.log(`[ ${arr.join(", ")} ]`);
}

arrayManipulator(
  [1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2],
  ["sumPairs", "sumPairs", "addMany 0 -1 -2 -3", "print"]
);
