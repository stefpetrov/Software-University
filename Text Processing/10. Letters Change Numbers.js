function solve(input) {
    

  let sequences = input.trim().split(/\s+/);


  let result = 0;

  for (let word of sequences) {
    let splittedWord = word.split("");
    let firstLetter = splittedWord.shift();
    let lastLetter = splittedWord.pop();
    let num = Number(splittedWord.join(""));
    let firstNum = 0;
    let finalNum = 0;

    if (isCapital(firstLetter) === true) {
      firstNum = num / letterPosition(firstLetter);
    } else {
      firstNum = num * letterPosition(firstLetter);
    }

    if (isCapital(lastLetter) === true) {
      finalNum = firstNum - letterPosition(lastLetter);
    } else {
      finalNum = firstNum + letterPosition(lastLetter);
    }

    result += finalNum;
  }

  console.log(result.toFixed(2));

  function letterPosition(letter) {
    if (letter === letter.toLowerCase()) {
      let letterPos = Number(letter.charCodeAt(0)) - 96;
      return letterPos;
    } else {
      let letterPos = Number(letter.charCodeAt(0)) - 64;
      return letterPos;
    }
  }

  function isCapital(letter) {
    if (letter.charCodeAt(0) >= 65 && letter.charCodeAt(0) <= 90) {
      return true;
    } else {
      return false;
    }
  }
}

solve("z3232323z z090z    a456z");
