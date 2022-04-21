function solve(arr, rotation) {
  let oldArr = arr;

  let countRotation = rotation;

  for (i = 0; i < countRotation; i++) {
    let numToMove = oldArr.shift();
    oldArr.push(numToMove);
  }
  console.log(oldArr.join(" "));
}

solve([2, 4, 15, 31], 5);
