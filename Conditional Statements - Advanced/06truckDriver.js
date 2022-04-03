function truckDriver(input) {
  let season = input[0];
  let kmMonthly = Number(input[1]);

  let amount;

  switch (season) {
    case "Spring":
    case "Autumn":
      if (kmMonthly <= 5000) {
        amount = kmMonthly * 4 * 0.75 * 0.9;
        console.log(amount.toFixed(2));
      } else if (kmMonthly > 5000 && kmMonthly <= 10000) {
        amount = kmMonthly * 4 * 0.95 * 0.9;
        console.log(amount.toFixed(2));
      } else if (kmMonthly > 10000 && kmMonthly <= 20000) {
        amount = kmMonthly * 4 * 1.45 * 0.9;
        console.log(amount.toFixed(2));
      }
      break;

    case "Summer":
      if (kmMonthly <= 5000) {
        amount = kmMonthly * 4 * 0.9 * 0.9;
        console.log(amount.toFixed(2));
      } else if (kmMonthly > 5000 && kmMonthly <= 10000) {
        amount = kmMonthly * 4 * 1.1 * 0.9;
        console.log(amount.toFixed(2));
      } else if (kmMonthly > 10000 && kmMonthly <= 20000) {
        amount = kmMonthly * 4 * 1.45 * 0.9;
        console.log(amount.toFixed(2));
      }
      break;

    case "Winter":
      if (kmMonthly <= 5000) {
        amount = kmMonthly * 4 * 1.05 * 0.9;
        console.log(amount.toFixed(2));
      } else if (kmMonthly > 5000 && kmMonthly <= 10000) {
        amount = kmMonthly * 4 * 1.25 * 0.9;
        console.log(amount.toFixed(2));
      } else if (kmMonthly > 10000 && kmMonthly <= 20000) {
        amount = kmMonthly * 4 * 1.45 * 0.9;
        console.log(amount.toFixed(2));
      }
      break;
  }
}

truckDriver(["Winter", "4350"]);
