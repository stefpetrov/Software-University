function tournamentOfChristmas(input){

    let index = 0
    let days = Number(input[index]);
    index++
    let command = input[index];
    index++
   
    let totalMoney = 0
    let totalWins = 0
    let totalLose = 0
     
    for(let i = 0; i < days; i++){
        
        let countWinsForDay = 0
        let countLoseForDay = 0
        money = 0

        while(command !== "Finish"){
            
             let result = input[index];
             index++
            

            if(result === "win"){
                money += 20
                countWinsForDay++
                totalWins ++
                
            } else {
                countLoseForDay++
                totalLose ++

            }
            
            command = input[index];
            index++

        }
        if(countWinsForDay > countLoseForDay){
            money = money * 1.1
            totalMoney += money
        } else{
            totalMoney += money
        }
        
        command = input[index];
        index++
        
    }
    
    if(totalWins > totalLose){
        totalMoney = totalMoney * 1.2
        console.log(`You won the tournament! Total raised money: ${totalMoney.toFixed(2)}`)

    }else {
        console.log(`You lost the tournament! Total raised money: ${totalMoney.toFixed(2)}`)
    }
 

}

tournamentOfChristmas(["2",
"volleyball",
"win",
"football",
"lose",
"basketball",
"win",
"Finish",
"golf",
"win",
"tennis",
"win",
"badminton",
"win",
"Finish"])