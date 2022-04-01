function cinema(input) {
  let ticket = input[0];
  let rows = Number(input[1]);
  let colons = Number(input[2]);

  let seats = rows * colons;
  let income = 0;
  switch (ticket) {
    case "Premiere":
      income = seats * 12;
      console.log(`${income.toFixed(2)} leva`);
      break;

    case "Normal":
      income = seats * 7.5;
      console.log(`${income.toFixed(2)} leva`);
      break;
    case "Discount":
      income = seats * 5;
      console.log(`${income.toFixed(2)} leva`);
      break;
  }
}

cinema(["Discount", "12", "30"]);
