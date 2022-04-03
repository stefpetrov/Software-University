function matchTickets(input) {
  let budget = Number(input[0]);
  let category = input[1];
  let fans = Number(input[2]);

  let amountAfterTransport;
  let diff = Math.abs(amountAfterTransport - budget).toFixed(2);
  let priceForTickets = 249.99;

  switch (category) {
    case "VIP":
      if (fans >= 50) {
        amountAfterTransport = budget * 0.75;
      } else if (fans >= 25) {
        amountAfterTransport = budget * 0.6;
      } else if (fans >= 10) {
        amountAfterTransport = budget * 0.5;
      } else if (fans >= 5) {
        amountAfterTransport = budget * 0.4;
      } else if (fans >= 1) {
        amountAfterTransport = budget * 0.25;
      }
      priceForTickets = 499.99 * fans;
      diff = Math.abs(amountAfterTransport - priceForTickets).toFixed(2);
      if (amountAfterTransport >= priceForTickets) {
        console.log(`Yes! You have ${diff} leva left.`);
      } else {
        console.log(`Not enough money! You need ${diff} leva.`);
      }
      break;

    case "Normal":
      if (fans >= 50) {
        amountAfterTransport = budget * 0.75;
      } else if (fans >= 25) {
        amountAfterTransport = budget * 0.6;
      } else if (fans >= 10) {
        amountAfterTransport = budget * 0.5;
      } else if (fans >= 5) {
        amountAfterTransport = budget * 0.4;
      } else if (fans >= 1) {
        amountAfterTransport = budget * 0.25;
      }
      priceForTickets = 249.99 * fans;
      diff = Math.abs(amountAfterTransport - priceForTickets).toFixed(2);

      if (amountAfterTransport >= priceForTickets) {
        console.log(`Yes! You have ${diff} leva left.`);
      } else {
        console.log(`Not enough money! You need ${diff} leva.`);
      }
      break;
  }
}

matchTickets(["1000", "Normal", "1"]);
