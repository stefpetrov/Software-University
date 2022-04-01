function skiTrip(input) {
  let days = Number(input[0]);
  let room = input[1];
  let feedback = input[2];

  let nights = days - 1;
  let price;

  switch (room) {
    case "room for one person":
      price = nights * 18;
      break;
    case "apartment":
      if (days > 15) {
        price = nights * 25 * 0.5;
      } else if (days >= 10) {
        price = nights * 25 * 0.65;
      } else if (days < 10) {
        price = nights * 25 * 0.7;
      }
      break;
    case "president apartment":
      if (days > 15) {
        price = nights * 35 * 0.8;
      } else if (days >= 10) {
        price = nights * 35 * 0.85;
      } else if (days < 10) {
        price = nights * 35 * 0.9;
      }
      break;
  }

  switch (feedback) {
    case "positive":
      price = price * 1.25;
      break;

    case "negative":
      price = price * 0.9;
      break;
  }

  console.log(price.toFixed(2));
}

skiTrip(["14", "apartment", "positive"]);
