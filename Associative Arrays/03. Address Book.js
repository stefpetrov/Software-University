function solve(input) {
  let adressList = {};

  for (let line of input) {
    line = line.split(":");

    let [name, adress] = line;
    adressList[name] = adress;
  }
  let arr = [];

  for (let item of Object.keys(adressList)) {
    let newObj = {
      name: item,
      adress: adressList[item],
    };

    arr.push(newObj);
  }
  arr.sort((a, b) => a.name.localeCompare(b.name));

  for (let element of arr) {
    console.log(`${element.name} -> ${element.adress}`);
  }
}

solve([
  "Tim:Doe Crossing",
  "Bill:Nelson Place",
  "Peter:Carlyle Ave",
  "Bill:Ornery Rd",
]);
