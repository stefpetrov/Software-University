function flowerShop(input) {

    let magnoliaCount = Number(input[0]);
    let zombulCount = Number(input[1]);
    let rosesCount = Number(input[2]);
    let cactusCount = Number(input[3]);
    let presentPrice = Number(input[4]);

    let totalSum = (magnoliaCount * 3.25 + zombulCount * 4 + rosesCount * 3.50 + cactusCount * 8) * 0.95
    let diff = Math.abs(presentPrice - totalSum)

    if (totalSum >= presentPrice) {
        console.log(`She is left with ${Math.floor(diff)} leva.`);
    } else {
        console.log(`She will have to borrow ${Math.ceil(diff)} leva.`)
    }


}

flowerShop([15,
    7,
    5,
    10,
    100])