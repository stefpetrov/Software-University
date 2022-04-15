function addBags(input) {

    let priceBagageOver20Kg = Number(input[0]);
    let bagageKg = Number(input[1]);
    let daysToFly = Number(input[2]);
    let countBagage = Number(input[3]);
    
    let price = 0
    
    if (bagageKg > 20) {
    price = priceBagageOver20Kg

    } else if (bagageKg >= 10) {
        price = priceBagageOver20Kg * 0.5
    } else if (bagageKg < 10) {
        price = priceBagageOver20Kg * 0.20
    }
    let totalPrice = (price * countBagage)

    if (daysToFly > 30) {
        console.log(`The total price of bags is: ${(totalPrice * 1.1).toFixed(2)} lv.`)
    } else if (daysToFly >= 7) {
        console.log(`The total price of bags is: ${(totalPrice * 1.15).toFixed(2)} lv.`)
    } else if (daysToFly < 7) {
        console.log(`The total price of bags is: ${(totalPrice * 1.40).toFixed(2)} lv.`)
    }

    }

    addBags([63.80, 23, 3, 1])

