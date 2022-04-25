function listOfProducts(input) {
  
  
    let sortedArr = input.sort()

  let sortedArrLength = sortedArr.length;

  for (let i = 0; i < sortedArrLength; i++) {
    console.log(`${i + 1}.${sortedArr[i]}`);
  }
}

listOfProducts(['Watermelon', 'Banana', 'Apples']);
