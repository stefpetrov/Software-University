function solve(char) {
  let upperCase = char.toUpperCase();
  let lowerCase = char.toLowerCase();

  if (char === upperCase) {
    console.log("upper-case");
  } else if (char === lowerCase) {
    console.log("lower-case");
  }
}
solve("l");
