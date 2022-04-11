function reportSystem(input) {

    let index = 0
    let neededSum = Number(input[index]);
    index++
    let command = input[index];
    index++
    let transCounter = 0
    let totalMoney = 0
    let cashCounter = 0
    let ccCounter = 0
    let cashMoney = 0
    let ccMoney = 0


    while(command !== "End") {

        let itemPrice = Number(command)
        transCounter++

        if(transCounter % 2 !== 0) {

            if(itemPrice <= 100) {
                console.log("Product sold!")
                totalMoney += itemPrice
                cashMoney +=  itemPrice
                cashCounter++
        } else {
            console.log("Error in transaction!")
        }
        
    } else if(transCounter % 2 === 0){
        if(itemPrice >= 10) {
            console.log("Product sold!")
            totalMoney += itemPrice
            ccMoney += itemPrice
            ccCounter ++
        } else {
            console.log("Error in transaction!")
        }
    }
        
        if(totalMoney >= neededSum) {
            console.log(`Average CS: ${(cashMoney / cashCounter).toFixed(2)}`)
            console.log(`Average CC: ${(ccMoney / ccCounter).toFixed(2)}`)
            break
        }


        command = input[index];
        index++
        
}

    if(command === "End") {

        console.log("Failed to collect required money for charity.")
    }
}
reportSystem(["600",
    "86",
    "150",
    "98",
    "227",
    "End"])