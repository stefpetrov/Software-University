function printSubtract(num1, num2, num3) {
  
    function sum(n1, n2) {
    return n1 + n2;
  }
  let sumOfTwoNums = sum(num1, num2);



  function subtract(suma, lastNum) {
    return suma - lastNum;
  }

  let finalResult = subtract(sumOfTwoNums, num3);

  console.log(finalResult);
}

printSubtract(23, 6, 10);
