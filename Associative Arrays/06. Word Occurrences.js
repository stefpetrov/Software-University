function solve(input) {
  let result = new Map();

  for (let word of input) {
    if (!result.has(word)) {
      result.set(word, 1);
    } else {
      let currentTimes = result.get(word);
      currentTimes++;
      result.set(word, currentTimes);
    }
  }
  let sorted = Array.from(result).sort((a, b) => b[1] - a[1]);

  for (let kvp of sorted) {
    console.log(`${kvp[0]} -> ${kvp[1]} times`);
  }
}

solve([
  "Here",
  "is",
  "the",
  "first",
  "sentence",
  "Here",
  "is",
  "another",
  "sentence",
  "And",
  "finally",
  "the",
  "third",
  "sentence",
]);
