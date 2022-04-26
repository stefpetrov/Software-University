function bombNumbers(arr, parameters) {
  let sequance = arr;
  let specialBombNum = parameters[0];
  let bombPower = parameters[1];

  let countDetonatedNums = bombPower * 2 + 1; // left side + right side + the special bomb number

  while (sequance.includes(specialBombNum)) {
      let index = sequance.indexOf(specialBombNum);
      let firstNumIndexForDetonating = index - bombPower;

      if (firstNumIndexForDetonating < 0) {    // if index is < 0, we have to make it 0, but before this we have to modified countDetonatedNum
        countDetonatedNums += firstNumIndexForDetonating;
        firstNumIndexForDetonating = 0;
      }
      sequance.splice(firstNumIndexForDetonating, countDetonatedNums);
    
  }
    let finalResult = sequance.reduce((a,b)=>{
        return a + b
    },0)
    console.log(finalResult)
}

bombNumbers([1, 7, 7, 1, 2, 3], [7, 1]);
