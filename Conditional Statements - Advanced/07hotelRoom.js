function hotelRoom(input) {
  let season = input[0];
  let days = Number(input[1]);

  let priceApartment;
  let priceStudio;
  // May, June, July, August, September или October

  switch (season) {
    case "May":
    case "October":
      if (days > 14) {
        priceApartment = days * 65 * 0.9;
        priceStudio = days * 50 * 0.7;
        console.log(`Apartment: ${priceApartment.toFixed(2)} lv.`);
        console.log(`Studio: ${priceStudio.toFixed(2)} lv.`);
      } else if (days > 7) {
        priceApartment = days * 65;
        priceStudio = days * 50 * 0.95;
        console.log(`Apartment: ${priceApartment.toFixed(2)} lv.`);
        console.log(`Studio: ${priceStudio.toFixed(2)} lv.`);
      } else {
        priceApartment = days * 65;
        priceStudio = days * 50;
        console.log(`Apartment: ${priceApartment.toFixed(2)} lv.`);
        console.log(`Studio: ${priceStudio.toFixed(2)} lv.`);
      }
      break;

    case "June":
    case "September":
      if (days > 14) {
        priceApartment = days * 68.7 * 0.9;
        priceStudio = days * 75.2 * 0.8;
        console.log(`Apartment: ${priceApartment.toFixed(2)} lv.`);
        console.log(`Studio: ${priceStudio.toFixed(2)} lv.`);
      } else {
        priceApartment = days * 68.7;
        priceStudio = days * 75.2;
        console.log(`Apartment: ${priceApartment.toFixed(2)} lv.`);
        console.log(`Studio: ${priceStudio.toFixed(2)} lv.`);
      }
      break;

    case "July":
    case "August":
      if (days > 14) {
        priceApartment = days * 77 * 0.9;
        priceStudio = days * 76;
        console.log(`Apartment: ${priceApartment.toFixed(2)} lv.`);
        console.log(`Studio: ${priceStudio.toFixed(2)} lv.`);
      } else {
        priceApartment = days * 77;
        priceStudio = days * 76;
        console.log(`Apartment: ${priceApartment.toFixed(2)} lv.`);
        console.log(`Studio: ${priceStudio.toFixed(2)} lv.`);
      }
      break;
  }
}
hotelRoom(["August", "20"]);
