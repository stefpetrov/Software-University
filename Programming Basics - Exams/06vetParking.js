function vetParking(input) {


    let index = 0;
    let parkingDays = Number(input[index]);
    index++
    let parkingHours = Number(input[index]);
    index++
    let priceForHour = 1
    let totalPrice = 0
    


    for(let days = 1; days <= parkingDays; days++){

        let priceForCurrentDay = 0
        
        for(let hours = 1; hours <= parkingHours; hours++){

            if(days % 2 === 0 && hours % 2 !== 0){
                priceForHour = 2.50
                totalPrice += priceForHour
                priceForCurrentDay += priceForHour
            }
            else if(days % 2 !== 0 && hours % 2 === 0) {
                priceForHour = 1.25
                totalPrice += priceForHour
                priceForCurrentDay += priceForHour
            }
            else {
                priceForHour = 1
                totalPrice += priceForHour
                priceForCurrentDay += priceForHour
            }
            
        }
        console.log(`Day: ${days} - ${priceForCurrentDay.toFixed(2)} leva`)
    }
    
   console.log(`Total: ${totalPrice.toFixed(2)} leva`)

}

vetParking(["5",
"2"])