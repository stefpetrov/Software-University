function harvest(input) {

    let grapesM2 = Number(input[0]);
    let grapesFrom1m2 = Number(input[1]);
    let neededWine = Number(input[2]);
    let workers = Number(input[3]);

    let totalGrapes = grapesM2 * grapesFrom1m2
    let totalWineLiters = totalGrapes * 0.40 / 2.5
    let diff = Math.abs(totalWineLiters - neededWine)

    if (totalWineLiters < neededWine) {
        console.log(`It will be a tough winter! More ${Math.floor(diff)} liters wine needed.`)
    } else {
        console.log(`Good harvest this year! Total wine: ${Math.floor(totalWineLiters)} liters.`)
        console.log(`${Math.ceil(diff)} liters left -> ${Math.ceil(diff / workers)} liters per person.`)
    }
}

harvest([1020,
    1.5,
    425,
    4])