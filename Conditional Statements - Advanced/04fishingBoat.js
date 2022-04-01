function fishingBoat(input) {
  let budget = Number(input[0]);
  let season = input[1];
  let fisherman = input[2];
  let price;
  
  switch (season) {
    case "Spring":
      if (fisherman <= 6) {
        price = 3000 * 0.9;
      } else if (fisherman <= 11 && fisherman >= 7) {
        price = 3000 * 0.85;
      } else if (fisherman >= 12) {
        price = 3000 * 0.75;
      }
      break;
    case "Autumn":
    case "Summer":
      if (fisherman <= 6) {
        price = 4200 * 0.9;
      } else if (fisherman <= 11 && fisherman >= 7) {
        price = 4200 * 0.85;
      } else if (fisherman >= 12) {
        price = 4200 * 0.75;
      }
      break;

    case "Winter":
      if (fisherman <= 6) {
        price = 2600 * 0.9;
      } else if (fisherman <= 11 && fisherman >= 7) {
        price = 2600 * 0.85;
      } else if (fisherman >= 12) {
        price = 2600 * 0.75;
      }
      break;
  }

  if (fisherman % 2 === 0 && season !== "Autumn") {
    price = price * 0.95;
  }
  let diff = Math.abs(budget - price).toFixed(2);
  if (price <= budget) {
    console.log(`Yes! You have ${diff} leva left.`);
  } else {
    console.log(`Not enough money! You need ${diff} leva.`);
  }
}

fishingBoat(["2000", "Winter", "13"]);
