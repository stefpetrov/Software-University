function shopping(input) {

    let budget = Number(input[0]);
    let countVideoCards = Number(input[1]);
    let countCPU = Number(input[2]);
    let countRAM = Number(input[3]);

    let priceVideoCards = countVideoCards * 250;
    let priceCPU = priceVideoCards * 0.35 * countCPU
    let priceRAM = priceVideoCards * 0.10 * countRAM
    let totalPrice = priceVideoCards + priceCPU + priceRAM;
    
    
    
    if (countVideoCards > countCPU) {
        totalPrice = totalPrice * 0.85
        
    }
    
    let diff = Math.abs(budget - totalPrice).toFixed(2);


    if (totalPrice <= budget) {
        console.log(`You have ${diff} leva left!`)
    } else {
        console.log(`Not enough money! You need ${diff} leva more!`)
    }
}

shopping(["920.45",
"3",
"1",
"1"])