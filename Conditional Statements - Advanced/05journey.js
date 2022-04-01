function journey(input) {
  let budget = Number(input[0]);
  let season = input[1];

  let destination;
  let price;
  let placeForSleep;
  switch (season) {
    case "summer":
      if (budget <= 100) {
        destination = "Bulgaria";
        price = budget * 0.3;
        placeForSleep = "Camp";
      } else if (budget <= 1000) {
        destination = "Balkans";
        price = budget * 0.4;
        placeForSleep = "Camp";
      } else if (budget > 1000) {
        destination = "Europe";
        price = budget * 0.9;
        placeForSleep = "Hotel";
      }

      break;
    case "winter":
      if (budget <= 100) {
        destination = "Bulgaria";
        price = budget * 0.7;
        placeForSleep = "Hotel";
      } else if (budget <= 1000) {
        destination = "Balkans";
        price = budget * 0.8;
        placeForSleep = "Hotel";
      } else if (budget > 1000) {
        destination = "Europe";
        price = budget * 0.9;
        placeForSleep = "Hotel";
      }
      break;
  }
  console.log(`Somewhere in ${destination}`);
  console.log(`${placeForSleep} - ${price.toFixed(2)}`);
}

journey(["1500", "summer"]);
