function coins(input) {
    
    let money = Number(input[0]);
    

    money = Math.floor(money * 100)
    let coinCounter = 0



    while(money > 0) {

        if(money >= 200) {
            coinCounter ++
            money -= 200

        } else if(money >= 100) {
            coinCounter++
            money -= 100
        } else if(money >= 50) {
            coinCounter++
            money -= 50
        } else if(money >= 20) {
            coinCounter++
            money -= 20
        } else if(money >= 10) {
            coinCounter++
            money -= 10
        } else if(money >= 5) {
            coinCounter++
            money -= 5
        }else if(money >= 2) {
            coinCounter++
            money -= 2
        }else if(money >= 1) {
            coinCounter++
            money -= 1
        }

        
    }
    
    console.log(coinCounter)

}

coins(["1.23"])