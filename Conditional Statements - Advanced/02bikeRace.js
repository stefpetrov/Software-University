function bikeRace(input) {
  let juniors = Number(input[0]);
  let seniors = Number(input[1]);
  let trace = input[2];

  let priceForJunior;
  let priceForSenior;
  let totalAmount;
  let fund;

  switch (trace) {
    case "trail":
      priceForJunior = juniors * 5.5;
      priceForSenior = seniors * 7;
      totalAmount = priceForJunior + priceForSenior;
      fund = (totalAmount * 0.95).toFixed(2);
      console.log(fund);
      break;

    case "cross-country":
      priceForJunior = juniors * 8;
      priceForSenior = seniors * 9.5;
      totalAmount = priceForJunior + priceForSenior;

      if (juniors + seniors >= 50) {
        totalAmount = totalAmount * 0.75;
      }
      fund = (totalAmount * 0.95).toFixed(2);
      console.log(fund);
      break;

    case "downhill":
      priceForJunior = juniors * 12.25;
      priceForSenior = seniors * 13.75;
      totalAmount = priceForJunior + priceForSenior;
      fund = (totalAmount * 0.95).toFixed(2);
      console.log(fund);
      break;
    case "road":
      priceForJunior = juniors * 20;
      priceForSenior = seniors * 21.5;
      totalAmount = priceForJunior + priceForSenior;
      fund = (totalAmount * 0.95).toFixed(2);
      console.log(fund);
      break;
  }
}

bikeRace(["21", "26", "cross-country"]);
