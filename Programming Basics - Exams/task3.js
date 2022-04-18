function transport(input){

    let weight = Number(input[0]);
    let service = input[1];
    let distance = Number(input[2]);

    let pricePerKm = 0
    let addPrice = 0
    let addPricePerKm = 0
    

    switch(service){

        case "standard":
            if(weight >= 90)
            pricePerKm = 0.20
            else if(weight >= 40){
                pricePerKm = 0.15
            }
            else if(weight >= 10){
                pricePerKm = 0.10
            }
            else if(weight >= 1){
                pricePerKm = 0.05
            }
            else{
                pricePerKm = 0.03
            }
             break
        case "express": 
        if(weight >= 90){
            pricePerKm = 0.20
            addPrice = 0.20 * 0.01
        }
            else if(weight >= 40){
                addPrice = 0.15 * 0.02
                pricePerKm = 0.15
                
            }
            else if(weight >= 10){
                addPrice = 0.10 * 0.05
                pricePerKm = 0.10
            }
            else if(weight >= 1){
                addPrice = 0.05 * 0.4
                pricePerKm = 0.05
            }
            else{
                addPrice = 0.03 * 0.80
                pricePerKm = 0.03
            }    
            break
    }
    addPricePerKm = weight * addPrice
    let totalAddPrice = addPricePerKm * distance
    

    let totalCost = pricePerKm * distance + totalAddPrice
    

    console.log(`The delivery of your shipment with weight of ${weight.toFixed(3)} kg. would cost ${totalCost.toFixed(2)} lv.`)





}

transport(["1.5",
"standard",
"100"])