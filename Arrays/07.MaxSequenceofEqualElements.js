function solve(arr) {
  let sequance = [];

  for (let i = 0; i < arr.length; i++) {
    let element = arr[i];
    newArr = [element];

    for (let j = i + 1; j < arr.length; j++) {
      let nextElement = arr[j];

      if (element === nextElement) {
        newArr.push(element);
      } else {
        break;
      }
    }
    if (newArr.length > sequance.length) {
      sequance = newArr;
    }
  }
  console.log(sequance.join(" "));
}

solve([0, 1, 1, 5, 2, 2, 6, 3, 3]);
