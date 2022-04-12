function traveling(input) {


    let index = 0
    let command = input[index]
    index++
    
    
    while(command !== "End") {

        let budget = Number(input[index]);
        index++
        let money = Number(input[index]);
        index++

        
        let destination = command
        let totalMoney = 0
        
        while(totalMoney < budget){
            totalMoney += money

            if(totalMoney >= budget){
                console.log(`Going to ${destination}!`)
                break
                
            }
            
            money = Number(input[index]);
            index++
            
        }
       
        command = input[index]
    index++
    
    }

}

traveling(["Greece",
"1000",
"200",
"200",
"300",
"100",
"150",
"240",
"Spain",
"1200",
"300",
"500",
"193",
"423",
"End"])

