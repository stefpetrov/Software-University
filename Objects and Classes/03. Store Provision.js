function storeProvision(initialProducts, orderedProducts) {
    
  for (let i = 0; i < orderedProducts.length; i += 2) {
    let currentProduct = orderedProducts[i];
    let quantity = +orderedProducts[i + 1];

    if (!initialProducts.includes(currentProduct)) {
      initialProducts.push(currentProduct);
      initialProducts.push(quantity);
    } else {
      let index = initialProducts.indexOf(currentProduct) + 1;
      initialProducts[index] = +initialProducts[index] + quantity;
    }
  }

  for (let i = 0; i < initialProducts.length; i += 2) {
    let product = initialProducts[i];
    let quant = Number(initialProducts[i + 1]);

    console.log(`${product} -> ${quant}`);
  }

}

storeProvision(
  ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],
  ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
);
