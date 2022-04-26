function buildAWall(arr) {
  let workingCrews = arr.length;

  let isReady = false;
  let result = 0;
  let finalSum = 0;
  let finalArr = [];

  while (true) {
    if (arr.includes(30)) {
      for (let element of arr) {
        if (element === 30) {
          workingCrews--;
          if (workingCrews === 0) {
            isReady = true;
          }
        }
      }
      arr = arr.filter((el) => el !== 30);
    }
    if (isReady) {
      console.log(finalArr.join(", "));
    // One cubic yard of concrete costs 1900 pesos.
      console.log(`${finalSum * 1900} pesos`);
      break;
    }

    arr = arr.map((el) => el + 1);
    // one crew use 195 cubic yard concrete per day
    result = workingCrews * 195;
    finalArr.push(result);
    finalSum += result;
  }
}

buildAWall([29, 29, 29]);
