function smallestTwoNums(input) {
  
    let newArr = input.sort((a, b) => {
    return a - b;
  });

  let result = newArr.slice(0, 2);

  console.log(result.join(" "));
  
}

smallestTwoNums([3, 0, 10, 4, 7, 3]);
