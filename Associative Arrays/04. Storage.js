function solve(input) {
  //   let productList = {};

  //   for (let line of input) {
  //     line = line.split(" ");
  //     let product = line[0];
  //     let quantity = Number(line[1]);

  //     if (!productList.hasOwnProperty(product)) {
  //       productList[product] = quantity;
  //     } else {
  //       productList[product] += quantity;
  //     }
  //   }

  //   for (let key of Object.keys(productList)) {
  //     console.log(`${key} -> ${productList[key]}`);
  //   }

  let productList = new Map();

  for (let line of input) {
    line = line.split(" ");
    let product = line[0];
    let quantity = Number(line[1]);

    if (!productList.has(product)) {
      productList.set(product, quantity);
    } else {
      let currentQuantity = productList.get(product);
      currentQuantity += quantity;
      productList.set(product, currentQuantity);
    }
  }
  for (let kvp of productList) {
    console.log(`${kvp[0]} -> ${kvp[1]}`);
  }
}

solve(["tomatoes 10", "coffee 5", "olives 100", "coffee 40"]);
