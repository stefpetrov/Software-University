function solve(num1, num2, num3, num4, num5) {
  let lostFightCount = num1;
  let helmetPrice = num2;
  let swordPrice = num3;
  let shieldPrice = num4;
  let armorPrice = num5;

  let helmetDamagedTime = 0;
  let swordDamagedTime = 0;
  let shieldDamagedTime = 0;
  let armorDemagedTime = 0;

  for (let i = 1; i <= lostFightCount; i++) {
    if (i % 2 === 0) {
      helmetDamagedTime += 1;
    }
    if (i % 3 === 0) {
      swordDamagedTime += 1;
    }
    if (i % 6 === 0) {
      shieldDamagedTime += 1;
    }
    if (i % 12 === 0) {
      armorDemagedTime += 1;
    }
  }

  let totalExpense =
    helmetDamagedTime * helmetPrice +
    swordDamagedTime * swordPrice +
    shieldDamagedTime * shieldPrice +
    armorDemagedTime * armorPrice;

  console.log(`Gladiator expenses: ${totalExpense.toFixed(2)} aureus`);
}
solve(23, 12.5, 21.5, 40, 200);
