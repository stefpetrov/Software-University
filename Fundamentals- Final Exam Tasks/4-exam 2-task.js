function solve(input) {
  let numOFBarcodes = Number(input.shift());

  let pattern = /@#+(?<name>[A-Z][A-Za-z0-9]{4,}[A-Z])@#+/;

  for (let i = 0; i < numOFBarcodes; i++) {
    let barcode = input[i];
    let matches = pattern.exec(barcode);

    if (matches !== null) {
      let valid = matches.groups.name;
      let pattern2 = /\d+/;
      if (pattern2.exec(valid) !== null) {
        console.log(`Product group: ${sumDigits(valid)}`);
      } else {
        console.log(`Product group: 00`);
      }
    } else {
      console.log("Invalid barcode");
    }
  }

  function sumDigits(text) {
    text = text.split("");
    let patternDigits = /\d+/;
    text = text.filter((el) => {
      if (patternDigits.exec(Number(el))) {
        return el;
      }
    });
    return text.join("");
  }
}

solve([
  "6",
  "@###Val1d1teM@###",
  "@#ValidIteM@#",
  "##InvaliDiteM##",
  "@InvalidIteM@",
  "@#Invalid_IteM@#",
  "@#ValiditeM@#",
]);
