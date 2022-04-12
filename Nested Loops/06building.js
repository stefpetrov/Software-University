function building(input) {
  let floors = Number(input[0]);
  let rooms = Number(input[1]);

  for (let i = floors; i >= 1; i--) {
    let type = "";
    for (let x = 0; x < rooms; x++) {
      if (i % 2 === 0 && i !== floors) {
        type += "O" + i + x + " ";
      } else if (i % 2 !== 0 && i !== floors) {
        type += "A" + i + x + " ";
      }
      if (i === floors) {
        type += "L" + i + x + " ";
      }
    }

    console.log(`${type}`);
  }
}

building(["6", "4"]);
