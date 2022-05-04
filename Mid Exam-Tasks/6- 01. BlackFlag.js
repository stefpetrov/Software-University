function blackFlag(input) {
  let daysOfThePlunder = Number(input[0]);
  let dailyPlunder = Number(input[1]);
  let expectedPlunder = Number(input[2]);

  let collectedPlunder = 0;

  for (let i = 1; i <= daysOfThePlunder; i++) {
    let currentDay = i;
    collectedPlunder += dailyPlunder;

    if (currentDay % 3 === 0) {
      collectedPlunder += dailyPlunder / 2;

    }
    if(currentDay % 5 === 0){
        collectedPlunder -= collectedPlunder * 0.3
    }
  }
  if(collectedPlunder >= expectedPlunder){
      console.log(`Ahoy! ${collectedPlunder.toFixed(2)} plunder gained.`)
  }
  else{
      console.log(`Collected only ${(collectedPlunder / expectedPlunder * 100).toFixed(2)}% of the plunder.`)
  }
}

blackFlag(["10",
"20",
"380"])
