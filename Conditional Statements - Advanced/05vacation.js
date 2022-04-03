function vacation(input) {
  let budget = Number(input[0]);
  let season = input[1];

  let placeType;
  let destination;
  let price;

  switch (season) {
    case "Summer":
      if (budget > 3000) {
        destination = "Alaska";
        placeType = "Hotel";
        price = (budget * 0.9).toFixed(2);
        console.log(`${destination} - ${placeType} - ${price}`);
      } else if (budget > 1000) {
        destination = "Alaska";
        placeType = "Hut";
        price = (budget * 0.8).toFixed(2);
        console.log(`${destination} - ${placeType} - ${price}`);
      } else if (budget <= 1000) {
        destination = "Alaska";
        placeType = "Camp";
        price = (budget * 0.65).toFixed(2);
        console.log(`${destination} - ${placeType} - ${price}`);
      }
      break;

    case "Winter":
      if (budget > 3000) {
        destination = "Morocco";
        placeType = "Hotel";
        price = (budget * 0.9).toFixed(2);
        console.log(`${destination} - ${placeType} - ${price}`);
      } else if (budget > 1000) {
        destination = "Morocco";
        placeType = "Hut";
        price = (budget * 0.6).toFixed(2);
        console.log(`${destination} - ${placeType} - ${price}`);
      } else if (budget <= 1000) {
        destination = "Morocco";
        placeType = "Camp";
        price = (budget * 0.45).toFixed(2);
        console.log(`${destination} - ${placeType} - ${price}`);
      }
  }
}
vacation(["2543.99", "Winter"]);
