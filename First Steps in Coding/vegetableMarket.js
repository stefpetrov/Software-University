function vegetableMarket(input) {

    let priceForKgVegitables = Number(input[0]);
    let priceForKGgFruits = Number(input[1]);
    let totalKgVegi = Number(input[2]);
    let totalKgFruits = Number(input[3]);

    let totalVegiBGN = totalKgVegi * priceForKgVegitables;
    let totalFruitsBGN = totalKgFruits * priceForKGgFruits;
    let totalBGN = totalVegiBGN + totalFruitsBGN;
    let totalEuro = totalBGN / 1.94;

    console.log(totalEuro.toFixed(2));


}

vegetableMarket(["0.194", "19.4", "10", "10"]);






