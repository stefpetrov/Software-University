function solve(input) {
  let neededlineAsArray = input.shift().split(" ");
  let list = new Map();

  for (let neededWord of neededlineAsArray) {
    list.set(neededWord, 0);
    for (let wordToCheck of input) {
      if (neededWord === wordToCheck) {
        let currentOccurrences = list.get(wordToCheck);
        currentOccurrences++;
        list.set(wordToCheck, currentOccurrences);
      }
    }
  }
  let sorted = Array.from(list).sort((a, b) => b[1] - a[1]);
  for (let kvp of sorted) {
    console.log(`${kvp[0]} - ${kvp[1]}`);
  }
}

solve([
  "is the",
  "first",
  "sentence",
  "Here",
  "is",
  "another",
  "the",
  "And",
  "finally",
  "the",
  "the",
  "sentence",
]);
