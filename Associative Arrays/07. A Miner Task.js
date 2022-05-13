function solve(input) {
  let MineCollection = {};
  for (let i = 0; i < input.length; i += 2) {
    let resource = input[i];
    let qty = Number(input[i + 1]);
    if (!MineCollection.hasOwnProperty(resource))
      MineCollection[resource] = qty;
    else {
      MineCollection[resource] += qty;
    }
  }
  for (let resource in MineCollection) {
    console.log(`${resource} -> ${MineCollection[resource]}`);
  }
}

solve(["gold", "155", "silver", "10", "copper", "17", "gold", "15"]);
