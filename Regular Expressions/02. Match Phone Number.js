function solve(text) {
  let regEx = /\+359([- ])2\1\d{3}\1\d{4}\b/g;

  let validNums = [];
  let validNum = regEx.exec(text)

  while (validNum !== null) {
    validNums.push(validNum[0]);

    validNum = regEx.exec(text)
  }

  console.log(validNums.join(", "));
}

solve(
  "+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222"
);
