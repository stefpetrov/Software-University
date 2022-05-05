function computerStore(input) {
  let sum = 0;

  for (let i = 0; i < input.length; i++) {
    let commands = input[i];
    if (commands === "special" || commands === "regular") {
      break;
    }
    let price = Number(commands);
    if (price < 0) {
      console.log("Invalid price!");
      continue;
    }
    sum += price;
  }
  let sumWithTax = 0;
  if (sum <= 0) {
    return console.log("Invalid order!");
  } else {
    sumWithTax = sum * 1.2;
  }

  let kindOfcustomer = input[input.length - 1];
  let sumWithDiscount = 0;
  if (kindOfcustomer === "special") {
    sumWithDiscount = sumWithTax * 0.9;
  } else if (kindOfcustomer === "regular") {
    sumWithDiscount = sumWithTax;
  }
  console.log(`Congratulations you've just bought a new computer!
  Price without taxes: ${sum.toFixed(2)}$
  Taxes: ${(sumWithTax - sum).toFixed(2)}$
  -----------
  Total price: ${sumWithDiscount.toFixed(2)}$`);
}

computerStore(["regular"]);
