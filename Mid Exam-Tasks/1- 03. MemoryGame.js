function memoryGame(input) {
  let sequance = input.shift().split(" ");
  let index = 0;
  let command = input[index];
  index++;

  let counterOfMoves = 0;

  while (command !== "end") {
    let commandAsArr = command.split(" ");

    let firstIndex = +commandAsArr[0];
    let secondIndex = +commandAsArr[1];
    counterOfMoves++;

    if (
      firstIndex === secondIndex ||
      firstIndex < 0 ||
      secondIndex < 0 ||
      firstIndex > sequance.length - 1 ||
      secondIndex > sequance.length - 1
    ) {
      sequance.splice(
        sequance.length / 2,
        0,
        `-${counterOfMoves}a`,
        `-${counterOfMoves}a`
      );
      console.log("Invalid input! Adding additional elements to the board");
    } else if (sequance[firstIndex] === sequance[secondIndex]) {
      let twin = sequance[+firstIndex];
      sequance.splice(+firstIndex, 1);
      let indexToRemove = sequance.indexOf(twin);
      sequance.splice(indexToRemove, 1);
      console.log(`Congrats! You have found matching elements - ${twin}!`);
      if (sequance.length <= 0) {
        console.log(`You have won in ${counterOfMoves} turns!`);
        break;
      }
    } else if (sequance[firstIndex] !== sequance[secondIndex]) {
      console.log("Try again!");
    }

    command = input[index];
    index++;
  }
  if (sequance.length > 0) {
    console.log(`Sorry you lose :(
        ${sequance.join(" ")}`);
  }
}

memoryGame(["1 1 2 2 3 3 4 4 5 5", "1 0", "-1 0", "1 0", "1 0", "1 0", "end"]);
