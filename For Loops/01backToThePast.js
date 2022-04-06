function backToThePast(input) {
  let index = 0;
  let moneyWish = Number(input[index]);
  index++;
  let yearsToLive = Number(input[index]);
  index++;
  let yearsIvancho = 18;

  for (let i = 1800; i <= yearsToLive; i++) {
    if (i % 2 === 0) {
      moneyWish -= 12000;
      yearsIvancho++;
    } else {
      moneyWish -= 12000 + 50 * yearsIvancho;
      yearsIvancho++;
    }
  }
  let diff = Math.abs(0 - moneyWish);
  if (moneyWish >= 0) {
    console.log(
      `Yes! He will live a carefree life and will have ${diff.toFixed(
        2
      )} dollars left.`
    );
  } else {
    console.log(`He will need ${diff.toFixed(2)} dollars to survive.`);
  }
}
backToThePast(["100000.15", "1808"]);
