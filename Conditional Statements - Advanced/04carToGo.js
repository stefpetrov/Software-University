function carToGo(input) {
  let budget = Number(input[0]);
  let season = input[1];

  let carType;
  let carClass;
  let carPrice;

  switch (season) {
    case "Summer":
      if (budget > 500) {
        carType = "Jeep";
        carClass = "Luxury class";
        carPrice = (budget * 0.9).toFixed(2);
      } else if (budget > 100) {
        carType = "Cabrio";
        carClass = "Compact class";
        carPrice = (budget * 0.45).toFixed(2);
      } else if (budget <= 100) {
        carType = "Cabrio";
        carClass = "Economy class";
        carPrice = (budget * 0.35).toFixed(2);
      }
      console.log(`${carClass}`);
      console.log(`${carType} - ${carPrice}`);
      break;

    case "Winter":
      if (budget > 500) {
        carType = "Jeep";
        carClass = "Luxury class";
        carPrice = (budget * 0.9).toFixed(2);
      } else if (budget > 100) {
        carType = "Jeep";
        carClass = "Compact class";
        carPrice = (budget * 0.8).toFixed(2);
      } else if (budget <= 100) {
        carType = "Jeep";
        carClass = "Economy class";
        carPrice = (budget * 0.65).toFixed(2);
      }
      console.log(`${carClass}`);
      console.log(`${carType} - ${carPrice}`);
      break;
  }
}

carToGo(["70.50", "Winter"]);
