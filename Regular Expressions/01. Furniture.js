function solve(input) {
  let pattern = />>(?<item>[A-Z]+[a-z]*)<<(?<price>\d+(?:\.\d+)?)!(?<qty>\d+)/;

  let command = input.shift();
  let furniture = [];
  let money = 0;
  while (command !== "Purchase") {
    let matches = pattern.exec(command);
    if (matches !== null) {
      let { item, price, qty } = matches.groups;
      price = Number(price);
      qty = Number(qty);
      furniture.push(item);
      money += price * qty;
    }

    command = input.shift();
  }
  console.log("Bought furniture:");
  for (let item of furniture) {
    console.log(item);
  }

  console.log(`Total money spend: ${money.toFixed(2)}`);
}

solve([">Invalid<<!4", ">Invalid<<!2", ">Invalid<<!5", "Purchase"]);
