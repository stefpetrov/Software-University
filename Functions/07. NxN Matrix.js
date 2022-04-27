function matrix(n) {
  let rows = n;
  let output = [];

  for (let i = 1; i <= rows; i++) {
    output.push(rows);
  }
  for (let j = 0; j < n; j++) {
    console.log(output.join(" "));
  }
}

matrix(5);
