function dungeonestDark(arr) {
  let rooms = arr.join(" ").split("|");

  let health = 100;
  let coins = 0;
  let counter = 0;

  let healthPlus = 0;
  let coinsPlus = 0;
  let monsterDemage = 0;

  let isPassed = true;

  for (let i = 0; i < rooms.length; i++) {
    let command = rooms[i].split(" ").shift();
    counter++;

    if (command === "potion") {
      healthPlus = Number(rooms[i].split(" ").pop());
      health += healthPlus;
      let usedPotion = healthPlus;
      if (health > 100) {
        usedPotion = 100 - (health - healthPlus);
        health = 100;
      }

      console.log(`You healed for ${usedPotion} hp.`);
      console.log(`Current health: ${health} hp.`);
    } else if (command === "chest") {
      coinsPlus = Number(rooms[i].split(" ").pop());
      coins += coinsPlus;
      console.log(`You found ${coinsPlus} coins.`);
    } else {
      monsterName = rooms[i].split(" ").shift();
      monsterDemage = Number(rooms[i].split(" ").pop());
      health -= monsterDemage;
      if (health > 0) {
        console.log(`You slayed ${monsterName}.`);
      } else {
        console.log(`You died! Killed by ${monsterName}.`);
        isPassed = false;

        break;
      }
    }
  }
  if (isPassed) {
    console.log("You've made it!");
    console.log(`Coins: ${coins}`);
    console.log(`Health: ${health}`);
  } else {
    console.log(`Best room: ${counter}`);
  }
}

dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);
