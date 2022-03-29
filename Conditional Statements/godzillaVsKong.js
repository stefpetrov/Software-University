function godzillaVsKong(input) {

    budget = Number(input[0]);
    countStatists = Number(input[1]);
    priceForClothesFor1Statist = Number(input[2]);

    let decoration = budget * 0.10
    let totalPriceForClothes = countStatists * priceForClothesFor1Statist

    if (countStatists >  150) {
        totalPriceForClothes = totalPriceForClothes * 0.90
    }

    let totalPrice = decoration + totalPriceForClothes
    let money = Math.abs(budget - totalPrice).toFixed(2)
    
    if (totalPrice > budget) {
        console.log("Not enough money!")
        console.log(`Wingard needs ${money} leva more.`)
    } else {
        console.log("Action!")
        console.log(`Wingard starts filming with ${money} leva left.`)
    }
}

godzillaVsKong(["9587.88",
"222",
"55.68"])