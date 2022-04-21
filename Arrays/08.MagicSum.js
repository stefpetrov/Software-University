function solve(arr, neededSum) {
  for (let i = 0; i < arr.length; i++) {
    let element = arr[i];
    let newArr = [];
    for (let j = i + 1; j < arr.length; j++) {
      let secondElement = arr[j];
      if (element + secondElement === neededSum) {
        console.log(`${element} ${secondElement}`);
      }
    }
  }
}

solve([14, 20, 60, 13, 7, 19, 8], 27);
