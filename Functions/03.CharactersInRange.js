function printCharacters(char1, char2) {
  let char1ToNum = char1.charCodeAt(0);
  let char2ToNum = char2.charCodeAt(0);
  let minNum = Math.min(char1ToNum, char2ToNum);
  let maxNum = Math.max(char1ToNum, char2ToNum);

  let output = "";

  for (let i = minNum + 1; i < maxNum; i++) {
    let neededChar = String.fromCharCode(i);

    output += neededChar + " ";
  }

  console.log(output);
}

printCharacters("C", "#");
