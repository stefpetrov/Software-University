function dishwasher(input) {
  let index = 0;
  let bottles = Number(input[index]);
  index++;
  let command = input[index];
  index++;
  let dishes = 0;
  let pots = 0;
  let counterCommands = 0;

  let chemicalInMl = bottles * 750;
  let chemFor1Pot = 15;
  let chemFor1Dish = 5;

  while (command !== "End") {
    let utensils = Number(command);
    counterCommands++;

    if (pots * 15 + dishes * 5 > bottles * 750) {
      console.log(`Not enough detergent, ${Math.abs(chemicalInMl - (chemFor1Pot * pots + chemFor1Dish * dishes))} ml. more necessary!`);
      break;
    }

    if (counterCommands % 3 === 0) {
      pots += utensils;
    } else {
      dishes += utensils;
    }

    command = input[index];
    index++;
  }

  let diff = Math.abs(chemicalInMl - (chemFor1Pot * pots + chemFor1Dish * dishes));

  if (command === "End" || chemicalInMl >= chemFor1Pot * pots + chemFor1Dish * dishes) {
    if (chemicalInMl >= chemFor1Pot * pots + chemFor1Dish * dishes) {
      console.log("Detergent was enough!");
      console.log(`${dishes} dishes and ${pots} pots were washed.`);
      console.log(`Leftover detergent ${diff} ml.`);
    } else {
      console.log(`Not enough detergent, ${diff} ml. more necessary!`);
    }
  }
}

dishwasher(["1", "10", "15", "10", "12", "13", "30"]);
