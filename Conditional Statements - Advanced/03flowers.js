function flowers(input) {
  let countChrusantemum = Number(input[0]);
  let countRoses = Number(input[1]);
  let countTulips = Number(input[2]);
  let season = input[3];
  let isHoliday = input[4];

  let priceForChrusantemum;
  let priceForRoses;
  let priceForTulips;
  let totalPrice;
  let totalCountFlowers = countChrusantemum + countRoses + countTulips;

  switch (season) {
    case "Spring":
    case "Summer":
      priceForChrusantemum = countChrusantemum * 2;
      priceForRoses = countRoses * 4.1;
      priceForTulips = countTulips * 2.5;
      totalPrice = priceForChrusantemum + priceForRoses + priceForTulips;
      if (isHoliday === "Y") {
        totalPrice = totalPrice * 1.15;
      }
      if (countTulips > 7 && season === "Spring") {
        totalPrice = totalPrice * 0.95;
      }
      if (totalCountFlowers > 20) {
        totalPrice = totalPrice * 0.8;
      }
      console.log((totalPrice + 2).toFixed(2));
      break;

    case "Autumn":
    case "Winter":
      priceForChrusantemum = countChrusantemum * 3.75;
      priceForRoses = countRoses * 4.5;
      priceForTulips = countTulips * 4.15;
      totalPrice = priceForChrusantemum + priceForRoses + priceForTulips;

      if (isHoliday === "Y") {
        totalPrice = totalPrice * 1.15;
      }
      if (countRoses >= 10 && season === "Winter") {
        totalPrice = totalPrice * 0.9;
      }
      if (totalCountFlowers > 20) {
        totalPrice = totalPrice * 0.8;
      }
      console.log((totalPrice + 2).toFixed(2));
      break;
  }
}

flowers(["10", "10", "10", "Autumn", "N"]);
