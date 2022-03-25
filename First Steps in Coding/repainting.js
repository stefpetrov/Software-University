function repainting(input) {

    let nylon = Number(input[0]);
    let paint = Number(input[1]) * 14.50;
    let thinner = Number(input[2]) * 5;
    let workingHours = Number(input[3]);

    let totalNylon = (nylon + 2) * 1.50
    let totalPaint = paint + (paint * 0.10);
    let bags = 0.40;
    let priceMaterials = totalNylon + totalPaint + thinner + bags
    let priceForWork = priceMaterials * workingHours * 0.30;
    
    let totalCost = priceMaterials + priceForWork;
    

    console.log(totalCost)




}

repainting(["5", "10", "10", "1"])


