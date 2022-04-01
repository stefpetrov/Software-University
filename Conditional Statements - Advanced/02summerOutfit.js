function summerOutfit(input) {
  let degrees = Number(input[0]);
  let timeOfday = input[1];
  let clothes;
  let shoes;
  switch (timeOfday) {
    case "Morning":
      if (degrees >= 10 && degrees <= 18) {
        clothes = "Sweatshirt";
        shoes = "Sneakers";
        console.log(
          `It's ${degrees} degrees, get your ${clothes} and ${shoes}.`
        );
      } else if (degrees > 18 && degrees <= 24) {
        clothes = "Shirt";
        shoes = "Moccasins";
        console.log(
          `It's ${degrees} degrees, get your ${clothes} and ${shoes}.`
        );
      } else if (degrees >= 25) {
        clothes = "T-Shirt";
        shoes = "Sandals";
        console.log(
          `It's ${degrees} degrees, get your ${clothes} and ${shoes}.`
        );
      }
      break;
    case "Afternoon":
      if (degrees >= 10 && degrees <= 18) {
        clothes = "Shirt";
        shoes = "Moccasins";
        console.log(
          `It's ${degrees} degrees, get your ${clothes} and ${shoes}.`
        );
      } else if (degrees > 18 && degrees <= 24) {
        clothes = "T-Shirt";
        shoes = "Sandals";
        console.log(
          `It's ${degrees} degrees, get your ${clothes} and ${shoes}.`
        );
      } else if (degrees >= 25) {
        clothes = "Swim Suit";
        shoes = "Barefoot";
        console.log(
          `It's ${degrees} degrees, get your ${clothes} and ${shoes}.`
        );
      }
      break;

    case "Evening":
      if (degrees >= 10 && degrees <= 18) {
        clothes = "Shirt";
        shoes = "Moccasins";
        console.log(
          `It's ${degrees} degrees, get your ${clothes} and ${shoes}.`
        );
      } else if (degrees > 18 && degrees <= 24) {
        clothes = "Shirt";
        shoes = "Moccasins";
        console.log(
          `It's ${degrees} degrees, get your ${clothes} and ${shoes}.`
        );
      } else if (degrees >= 25) {
        clothes = "Shirt";
        shoes = "Moccasins";
        console.log(
          `It's ${degrees} degrees, get your ${clothes} and ${shoes}.`
        );
      }
      break;
  }
}

summerOutfit(["28", "Evening"]);
