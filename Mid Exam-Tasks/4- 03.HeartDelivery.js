function heartDelivery(input) {
  let neighborhood = input.shift().split("@").map(Number);

  let index = 0;
  let command = input[index];
  index++;

  let currentIndex = 0;

  while (command !== "Love!") {
    let jumpCommand = command.split(" ");
    let jumpLength = +jumpCommand[1];

    currentIndex += jumpLength;

    if (currentIndex > neighborhood.length - 1) {
      currentIndex = 0;
    }

    if (neighborhood[currentIndex] !== 0) {
      neighborhood[currentIndex] -= 2;

      if (neighborhood[currentIndex] === 0) {
        console.log(`Place ${currentIndex} has Valentine's day.`);

        command = input[index];
        index++;
        continue;
      }
    }
    if (neighborhood[currentIndex] === 0) {
      console.log(`Place ${currentIndex} already had Valentine's day.`);

      command = input[index];
      index++;
      continue;
    }

    command = input[index];
    index++;
  }
  console.log(`Cupid's last position was ${currentIndex}.`);

  let failCounter = 0;

  for (let house of neighborhood) {
    if (house > 0) {
      failCounter++;
    }
  }

  if (failCounter > 0) {
    console.log(`Cupid has failed ${failCounter} places.`);
  } else {
    console.log("Mission was successful.");
  }
}

heartDelivery(["10@10@10@2", "Jump 1", "Jump 2", "Love!"]);
