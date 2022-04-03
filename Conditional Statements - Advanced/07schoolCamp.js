function schoolCamp(input) {
  let season = input[0];
  let groupGender = input[1];
  let countStudents = Number(input[2]);
  let nights = Number(input[3]);

  let sport;
  let price;

  switch (season) {
    case "Winter":
      switch (groupGender) {
        case "boys":
          sport = "Judo";

          if (countStudents >= 50) {
            price = (nights * countStudents * 9.6 * 0.5).toFixed(2);
          } else if (countStudents >= 20) {
            price = (nights * countStudents * 9.6 * 0.85).toFixed(2);
          } else if (countStudents >= 10) {
            price = (nights * countStudents * 9.6 * 0.95).toFixed(2);
          } else {
            price = (nights * countStudents * 9.6).toFixed(2);
          }
          break;

        case "girls":
          sport = "Gymnastics";
          if (countStudents >= 50) {
            price = (nights * countStudents * 9.6 * 0.5).toFixed(2);
          } else if (countStudents >= 20) {
            price = (nights * countStudents * 9.6 * 0.85).toFixed(2);
          } else if (countStudents >= 10) {
            price = (nights * countStudents * 9.6 * 0.95).toFixed(2);
          } else {
            price = (nights * countStudents * 9.6).toFixed(2);
          }
          break;

        case "mixed":
          sport = "Ski";
          if (countStudents >= 50) {
            price = (nights * countStudents * 10 * 0.5).toFixed(2);
          } else if (countStudents >= 20) {
            price = (nights * countStudents * 10 * 0.85).toFixed(2);
          } else if (countStudents >= 10) {
            price = (nights * countStudents * 10 * 0.95).toFixed(2);
          } else {
            price = (nights * countStudents * 10).toFixed(2);
          }
          break;
      }
      console.log(`${sport} ${price} lv.`);
      break;

    case "Spring":
      switch (groupGender) {
        case "boys":
          sport = "Tennis";

          if (countStudents >= 50) {
            price = (nights * countStudents * 7.2 * 0.5).toFixed(2);
          } else if (countStudents >= 20) {
            price = (nights * countStudents * 7.2 * 0.85).toFixed(2);
          } else if (countStudents >= 10) {
            price = (nights * countStudents * 7.2 * 0.95).toFixed(2);
          } else {
            price = (nights * countStudents * 7.2).toFixed(2);
          }
          break;

        case "girls":
          sport = "Athletics";
          if (countStudents >= 50) {
            price = (nights * countStudents * 7.2 * 0.5).toFixed(2);
          } else if (countStudents >= 20) {
            price = (nights * countStudents * 7.2 * 0.85).toFixed(2);
          } else if (countStudents >= 10) {
            price = (nights * countStudents * 7.2 * 0.95).toFixed(2);
          } else {
            price = (nights * countStudents * 7.2).toFixed(2);
          }
          break;

        case "mixed":
          sport = "Cycling";
          if (countStudents >= 50) {
            price = (nights * countStudents * 9.5 * 0.5).toFixed(2);
          } else if (countStudents >= 20) {
            price = (nights * countStudents * 9.5 * 0.85).toFixed(2);
          } else if (countStudents >= 10) {
            price = (nights * countStudents * 9.5 * 0.95).toFixed(2);
          } else {
            price = (nights * countStudents * 9.5).toFixed(2);
          }
          break;
      }
      console.log(`${sport} ${price} lv.`);
      break;

    case "Summer":
      switch (groupGender) {
        case "boys":
          sport = "Football";

          if (countStudents >= 50) {
            price = (nights * countStudents * 15 * 0.5).toFixed(2);
          } else if (countStudents >= 20) {
            price = (nights * countStudents * 15 * 0.85).toFixed(2);
          } else if (countStudents >= 10) {
            price = (nights * countStudents * 15 * 0.95).toFixed(2);
          } else {
            price = (nights * countStudents * 15).toFixed(2);
          }
          break;

        case "girls":
          sport = "Volleyball";
          if (countStudents >= 50) {
            price = (nights * countStudents * 15 * 0.5).toFixed(2);
          } else if (countStudents >= 20) {
            price = (nights * countStudents * 15 * 0.85).toFixed(2);
          } else if (countStudents >= 10) {
            price = (nights * countStudents * 15 * 0.95).toFixed(2);
          } else {
            price = (nights * countStudents * 15).toFixed(2);
          }
          break;

        case "mixed":
          sport = "Swimming";
          if (countStudents >= 50) {
            price = (nights * countStudents * 20 * 0.5).toFixed(2);
          } else if (countStudents >= 20) {
            price = (nights * countStudents * 20 * 0.85).toFixed(2);
          } else if (countStudents >= 10) {
            price = (nights * countStudents * 20 * 0.95).toFixed(2);
          } else {
            price = (nights * countStudents * 20).toFixed(2);
          }
          break;
      }
      console.log(`${sport} ${price} lv.`);
  }
}

schoolCamp(["Summer", "boys", "60", "7"]);
