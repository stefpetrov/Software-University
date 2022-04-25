function negativeOrPositive(input) {
  let arrayAsNumbers = input.map(Number);

  let arrL = arrayAsNumbers.length;
  let result = [];

  for (let i = 0; i < arrL; i++) {
    let currentElement = arrayAsNumbers[i];
    if (currentElement < 0) {
      result.unshift(currentElement);
    } else {
      result.push(currentElement);
    }
  }

  for (let element of result) {
    console.log(element);
  }
}

negativeOrPositive(["3", "-2", "0", "-1"]);
