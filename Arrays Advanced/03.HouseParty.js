function houseParty(input) {
  let newArr = [];
  for (let i = 0; i < input.length; i++) {
    let element = input[i].split();
    let separetdEl = element.join(" ").split(" ");

    if (!separetdEl.includes("not")) {
      let namesGoing = separetdEl[0];

      if (!newArr.includes(namesGoing)) {
        newArr.push(namesGoing);
      } else {
        console.log(`${namesGoing} is already in the list!`);
      }
    } else {
      let namesNotGoing = separetdEl[0];
      if (newArr.includes(namesNotGoing)) {
        let indexOfnotGoing = newArr.indexOf(namesNotGoing);
        newArr.splice(indexOfnotGoing, 1);
      } else {
        console.log(`${namesNotGoing} is not in the list!`);
      }
    }
  }
  for (let elements of newArr) {
    console.log(elements);
  }
}

houseParty([
  "Allie is going!",
  "George is going!",
  "John is not going!",
  "George is not going!",
]);
