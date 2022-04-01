function operationsBetweenNumbers(input) {
  let n1 = Number(input[0]);
  let n2 = Number(input[1]);
  let op = input[2];
  
  let result;
  let evenOrOdd;
  
  switch (op) {
    case "+":
      result = n1 + n2;
      if (result % 2 === 0) {
        evenOrOdd = "even";
      } else {
        evenOrOdd = "odd";
      }
      console.log(`${n1} ${op} ${n2} = ${result} - ${evenOrOdd}`);
      break;
    case "-":
      result = n1 - n2;
      if (result % 2 === 0) {
        evenOrOdd = "even";
      } else {
        evenOrOdd = "odd";
      }
      console.log(`${n1} ${op} ${n2} = ${result} - ${evenOrOdd}`);
      break;
    case "*":
      result = n1 * n2;
      if (result % 2 === 0) {
        evenOrOdd = "even";
      } else {
        evenOrOdd = "odd";
      }
      console.log(`${n1} ${op} ${n2} = ${result} - ${evenOrOdd}`);
      break;
    case "/":
      if (n2 === 0) {
        console.log(`Cannot divide ${n1} by zero`);
      } else {
        result = (n1 / n2).toFixed(2);
        console.log(`${n1} / ${n2} = ${result}`);
      }
      break;
    case "%":
      if (n2 === 0) {
        console.log(`Cannot divide ${n1} by zero`);
      } else {
        result = n1 % n2;
        console.log(`${n1} % ${n2} = ${result}`);
      }
      break;
  }
}

operationsBetweenNumbers(["112", "0", "/"]);
