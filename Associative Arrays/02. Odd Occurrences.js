function solve(input) {
  input = input.toLowerCase();

  let inputAsArr = input.split(" ");
  let map = new Map();

  for (let word of inputAsArr) {
    if (!map.has(word)) {
      map.set(word, 1);
    } else {
      let currentOcc = map.get(word);
      currentOcc++;
      map.set(word, currentOcc);
    }
  }
  let finalArr = [];
  for (let kvp of map) {
    let quantity = Number(kvp[1]);
    if (quantity % 2 !== 0) {
      let neededElement = kvp[0];
      finalArr.push(neededElement);
    }
  }
  console.log(finalArr.join(" "));
}

solve("Cake IS SWEET is Soft CAKE sweet Food");
