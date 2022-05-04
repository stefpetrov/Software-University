function treasureHunt(input) {
  let arr = input.shift().split("|");

  let index = 0;
  let command = input[index];
  index++;

  while (command !== "Yohoho!") {
    let operation = command.split(" ");
    let exactOperation = operation.shift();

    if (exactOperation === "Loot") {
      for (let elements of operation) {
        if (!arr.includes(elements)) {
          arr.unshift(elements);
        }
      }
      command = input[index];
      index++;
      continue;
    } else if (exactOperation === "Drop") {
      let indexToDrop = +operation.shift();
      if (indexToDrop >= 0 && indexToDrop < arr.length) {
        let elementToDrop = arr[indexToDrop];
        arr.splice(indexToDrop, 1);
        arr.push(elementToDrop);

        command = input[index];
        index++;
        continue;
      } else {
        command = input[index];
        index++;
        continue;
      }
    } else if (exactOperation === "Steal") {
      let elementsCountToSteal = +operation.shift();
      let indexToSteal = arr.length - elementsCountToSteal;
      if (indexToSteal < 0) {
        indexToSteal = 0;
      }
      let stolenItems = arr.splice(indexToSteal, elementsCountToSteal);
      console.log(stolenItems.join(", "));

      command = input[index];
      index++;
      continue;
    }

    command = input[index];
    index++;
  }

  if (arr.length > 0) {
    let treasureGained = 0;

    for (let elements of arr) {
      treasureGained += elements.length;
    }
    let finalTreasure = treasureGained / arr.length;
    console.log(
      `Average treasure gain: ${finalTreasure.toFixed(2)} pirate credits.`
    );
  } else {
    console.log("Failed treasure hunt.");
  }
}

treasureHunt([
  "Gold|Silver|Bronze|Medallion|Cup",
  "Loot Wood Gold Coins",
  "Loot Silver Pistol",
  "Drop 3",
  "Steal 3",
  "Yohoho!",
]);
