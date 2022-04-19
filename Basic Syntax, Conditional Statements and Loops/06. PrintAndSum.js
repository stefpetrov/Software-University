function solve(a, b) {
  let startNum = Number(a);
  let endNum = Number(b);
  let result = "";
  let sum = 0;
  for (let i = startNum; i <= endNum; i++) {
    result += i + " ";
    sum += i;
  }
  console.log(result);
  console.log(`Sum: ${sum}`);
}

solve(5, 10);
