function printSmallestNum(num1, num2, num3) {
  
    
    function smallestNum(a, b, c) {
    let newArr = [];
    newArr.push(a, b, c);
    let newArrL = newArr.length;
    let minNum = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < newArrL; i++) {
      let currentElement = newArr[i];

      if (currentElement < minNum) {
        minNum = currentElement;
      }
    }
    return minNum;
  }
  
  console.log(smallestNum(num1, num2, num3));
}

printSmallestNum(2, 5, 3);
