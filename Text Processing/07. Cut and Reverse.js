function solve(str) {
  let strL = str.length;

  str = str.split("");

  let result = [];

  for (let i = 0; i < strL; i++) {
    let lastLetter = str.pop();

    result.push(lastLetter);
  }
  result = result.join("");

  let firstHalf = result.substring(0, strL / 2);
  let secondHalf = result.substring(strL / 2);
  
  console.log(secondHalf);
  console.log(firstHalf);
}

solve("tluciffiDsIsihTgnizamAoSsIsihT");
