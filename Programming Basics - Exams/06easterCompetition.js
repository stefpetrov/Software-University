function easterCompetition(input){

    let index = 0
    let countCakes = Number(input[index]);
    index++
    let BestChefPoints = Number.MIN_SAFE_INTEGER
    let name
    let totalGrades
    let bestChefName

    for(i = 0; i < countCakes; i++){

        let command = input[index];
        index++
        name = command
        let newCommand = input[index];
        index++
        totalGrades = 0
        
        while(newCommand !== "Stop"){
            
           let grade = Number(newCommand)
            totalGrades += grade

           

            newCommand = input[index];
            index++
            
            
        }
        if(newCommand === "Stop"){
           
            console.log(`${name} has ${totalGrades} points.`)
            if(totalGrades > BestChefPoints){
                BestChefPoints = totalGrades
                bestChefName = name
                console.log(`${bestChefName} is the new number 1!`)
                
            }
            

        }
        

    }
    console.log(`${bestChefName} won competition with ${BestChefPoints} points!`)
    

}

easterCompetition(["3",
"Chef Manchev", "10",
"10",
"10",
"10",
"Stop",
"Natalie",
"8",
"2",
"9",
"Stop",
"George",
"9",
"2",
"4",
"2",
"Stop"])