function godzillaVSKong(input) {

    let budget = Number(input[0]);
    let statists = Number(input[1]);
    let priceClothesFor1Statist = Number(input[2]);

    let decoration = budget * 0.10
    let clothes = statists * priceClothesFor1Statist

    if(statists > 150) {
        clothes = clothes * 0.90

    }
    let diff = Math.abs((clothes + decoration) - budget)
    if((clothes + decoration) > budget) {
        console.log("Not enough money!")
        console.log(`Wingard needs ${diff.toFixed(2)} leva more.`)

    } else {
        console.log("Action!")
        console.log(`Wingard starts filming with ${(budget - (clothes + decoration)).toFixed(2)} leva left.`)
    }

}

godzillaVSKong([9587.88,
    222,
    55.68])