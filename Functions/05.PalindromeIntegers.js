function isPalindromeIntegers(input) {
  let arrayOfNums = input;

  for (let elements of arrayOfNums) {
    let reversedElement = elements.toString().split("").reverse().join("");
    reversedElement = Number(reversedElement);

    if (reversedElement === elements) {
      console.log("true");
    } else {
      console.log("false");
    }
  }
}

isPalindromeIntegers([32,2,232,1010]);
