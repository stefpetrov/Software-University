function cleverLily(input) {
  let age = Number(input[0]);
  let washingMachinePrice = Number(input[1]);
  let pricePerToy = Number(input[2]);
  let totalMoney = 0;
  let money = 10;
  let toys = 0;

  for (let i = 1; i <= age; i++) {
    if (i % 2 === 0) {
      totalMoney += money;
      money += 10;
      totalMoney -= 1;
    } else {
      toys++;
    }
  }
  let moneyFromToys = toys * pricePerToy;
  let totalMoneyPlusMoneyFromToys = totalMoney + moneyFromToys;
  let diff = Math.abs(
    washingMachinePrice - totalMoneyPlusMoneyFromToys
  ).toFixed(2);
  if (totalMoneyPlusMoneyFromToys >= washingMachinePrice) {
    console.log(`Yes! ${diff}`);
  } else {
    console.log(`No! ${diff}`);
  }
}

cleverLily(["21", "1570.98", "3"]);
