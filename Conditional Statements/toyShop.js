function toyShop(input) {

    let priceForHodilay = Number(input[0])
    let countPuzzles = Number(input[1]);
    let countTalkingDolls = Number(input[2]);
    let countTeddyBears = Number(input[3]);
    let countMinions = Number(input[4]);
    let countTrucks = Number(input[5]);

    let totalSum = countPuzzles * 2.60 + countTalkingDolls * 3 + countTeddyBears * 4.10 + countMinions * 8.20 +
    countTrucks * 2
    let totalCount = countPuzzles + countTalkingDolls + countTeddyBears + countMinions + countTrucks
    
    if (totalCount >= 50) {
        totalSum = totalSum * 0.75
    }
    let totalSumAfterRent = totalSum * 0.90
    let money = Math.abs(totalSumAfterRent - priceForHodilay).toFixed(2)
    
    if (totalSum * 0.90 >= priceForHodilay) {
        console.log(`Yes! ${money} lv left.`)
    } else {
        console.log(`Not enough money! ${money} lv needed.`)
    }

}
toyShop(["40.8",
"20",
"25",
"30",
"50",
"10"])
