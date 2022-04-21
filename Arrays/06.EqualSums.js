function solve(arr) {
  let sumLeft = 0;
  let sumRight = 0;
  let isEqual = false;

  for (let i = 0; i < arr.length; i++) {
    sumRight = 0;
    sumLeft = 0;

    for (let j = i + 1; j < arr.length; j++) {
      let nextElement = Number(arr[j]);
      sumRight += nextElement;
    }

    for (let k = 0; k <= i - 1; k++) {
      let previousElement = Number(arr[k]);
      sumLeft += previousElement;
    }

    if (sumLeft === sumRight) {
      isEqual = true;
      console.log(i);
    }
  }
  if (isEqual === false) {
    console.log("no");
  }
}

solve([1, 2, 3, 3]);
