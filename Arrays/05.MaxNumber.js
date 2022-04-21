function solve(arr) {
  let startArr = arr;
  let newArr = [];

  for (let i = 0; i < startArr.length; i++) {
    let isTop = true;
    let currentElement = Number(startArr[i]);
    for (let j = i + 1; j < startArr.length; j++) {
      let nextElement = Number(startArr[j]);
      if (currentElement <= nextElement) {
        isTop = false;
        break;
      }
    }
    if (isTop) {
      newArr.push(currentElement);
    }
  }
  console.log(newArr.join(" "));
}

solve([14, 24, 3, 19, 15, 17]);
