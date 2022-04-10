function moving(input) {
  let index = 0;
  let w = Number(input[index]);
  index++;
  let l = Number(input[index]);
  index++;
  let h = Number(input[index]);
  index++;
  let command = input[index];
  index++;

  let space = w * l * h;
  let boxesCounter = 0;

  while (command !== "Done") {
    let boxes = Number(command);
    boxesCounter += boxes;

    if (boxesCounter >= space) {
      console.log(`No more free space! You need ${Math.abs(space - boxesCounter)} Cubic meters more.`);
      break;
    }

    command = input[index];
    index++;
  }

  if (command === "Done") {
    console.log(`${Math.abs(space - boxesCounter)} Cubic meters left.`);
  }
}

moving(["10", "1", "2", "4", "6", "Done"]);
