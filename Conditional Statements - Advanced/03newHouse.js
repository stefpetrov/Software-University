function newHouse(input) {
  let flower = input[0];
  let quantity = Number(input[1]);
  let budget = Number(input[2]);

  let price;

  switch (flower) {
    case "Roses":
      if (quantity > 80) {
        price = quantity * 5 * 0.9;
      } else {
        price = quantity * 5;
      }
      break;
    case "Dahlias":
      if (quantity > 90) {
        price = quantity * 3.8 * 0.85;
      } else {
        price = quantity * 3.8;
      }
      break;
    case "Tulips":
      if (quantity > 80) {
        price = quantity * 2.8 * 0.85;
      } else {
        price = quantity * 2.8;
      }
      break;
    case "Narcissus":
      if (quantity < 120) {
        price = quantity * 3 * 1.15;
      } else {
        price = quantity * 3;
      }
      break;
    case "Gladiolus":
      if (quantity < 80) {
        price = quantity * 2.5 * 1.2;
      } else {
        price = quantity * 2.5;
      }
      break;
  }
  let diff = Math.abs(budget - price).toFixed(2);

  if (budget >= price) {
    console.log(
      `Hey, you have a great garden with ${quantity} ${flower} and ${diff} leva left.`
    );
  } else {
    console.log(`Not enough money, you need ${diff} leva more.`);
  }
}

newHouse(["Narcissus", "119", "360"]);
