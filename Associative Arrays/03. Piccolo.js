function solve(input) {
  let parking = {};

  for (let line of input) {
    line = line.split(", ");
    let command = line[0];
    let carNumber = line[1];

    if (command === "IN") {
      parking[carNumber] = 1;
    } else {
      parking[carNumber] = 0;
    }
  }
  let arr = [];
  for (let key of Object.keys(parking)) {
    let carQuantity = parking[key];
    if (carQuantity !== 0) {
      arr.push(key);
    }
  }
  arr = arr.sort((a, b) => a.localeCompare(b));
  let arrL = arr.length;
  if (arrL === 0) {
    console.log("Parking Lot is Empty");
  } else {
    for (let carNumber of arr) {
      console.log(carNumber);
    }
  }
}

solve([
  "IN, CA2844AA",
  "IN, CA1234TA",
  "OUT, CA2844AA",
  "IN, CA9999TT",
  "IN, CA2866HI",
  "OUT, CA1234TA",
  "IN, CA2844AA",
  "OUT, CA2866HI",
  "IN, CA9876HH",
  "IN, CA2822UU",
]);
