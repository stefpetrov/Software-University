function solve(people, type, day) {
  let countOfPeople = Number(people);
  let typeOfGroup = type;
  let dayOfWeek = day;
  let totalPrice;

  switch (typeOfGroup) {
    case "Students":
      if (dayOfWeek === "Friday") {
        totalPrice = 8.45 * countOfPeople;
      } else if (dayOfWeek === "Saturday") {
        totalPrice = 9.8 * countOfPeople;
      } else if (dayOfWeek === "Sunday") {
        totalPrice = 10.46 * countOfPeople;
      }
      if (countOfPeople >= 30) totalPrice = totalPrice * 0.85;
      break;
    case "Business":
      if (dayOfWeek === "Friday") {
        totalPrice = 10.9 * countOfPeople;
      } else if (dayOfWeek === "Saturday") {
        totalPrice = 15.6 * countOfPeople;
      } else if (dayOfWeek === "Sunday") {
        totalPrice = 16 * countOfPeople;
      }
      totalPrice;
      if (countOfPeople >= 100 && dayOfWeek === "Friday") {
        totalPrice = totalPrice - 10 * 10.9;
      } else if (countOfPeople >= 100 && dayOfWeek === "Saturday") {
        totalPrice = totalPrice - 10 * 15.6;
      } else if (countOfPeople >= 100 && dayOfWeek === "Sunday") {
        totalPrice = totalPrice - 10 * 16;
      }
      break;
    case "Regular":
      if (dayOfWeek === "Friday") {
        totalPrice = 15 * countOfPeople;
      } else if (dayOfWeek === "Saturday") {
        totalPrice = 20 * countOfPeople;
      } else if (dayOfWeek === "Sunday") {
        totalPrice = 22.5 * countOfPeople;
      }
      if (countOfPeople >= 10 && countOfPeople <= 20) {
        totalPrice = totalPrice * 0.95;
      }
      break;
  }
  console.log(`Total price: ${totalPrice.toFixed(2)}`);
}

solve(30, "Students", "Sunday");
