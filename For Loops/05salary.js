function salary(input) {
  let index = 0;
  let countOpenTabs = Number(input[index]);
  index++;
  let money = Number(input[index]);
  index++;

  for (let i = 0; i < countOpenTabs; i++) {
    let x = input[index];
    index++;
    switch (x) {
      case "Facebook":
        money -= 150;
        break;
      case "Instagram":
        money -= 100;
        break;
      case "Reddit":
        money -= 50;
        break;
    }
  }
  if (money <= 0) {
    console.log("You have lost your salary.");
  } else {
    console.log(money);
  }
}

salary(["3", "500", "Facebook", "Stackoverflow.com", "softuni.bg"]);
