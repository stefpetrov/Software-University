function basketballTournament(input){

    let index = 0
    let command = input[index];
    index++
    let winCounter = 0
    let loseCounter = 0
    let totalCounter = 0
    

    while(command !== "End of tournaments"){

        let name = command
        let matches = Number(input[index]);
        index++
        let matchCounter = 0
        

        for(let i = 0; i < matches; i++){
            
            let desiResults = Number(input[index]);
            index++
            let otherResults = Number(input[index]);
            index++
            matchCounter++
            totalCounter++
            let diff = Math.abs(desiResults - otherResults)

            if(desiResults > otherResults){
                winCounter++

                console.log(`Game ${matchCounter} of tournament ${name}: win with ${diff} points.`)
                
            } else {
                loseCounter++
                console.log(`Game ${matchCounter} of tournament ${name}: lost with ${diff} points.`)
                }
        }
        
        command = input[index];
        index++
    }

    if(command === "End of tournaments"){

        console.log(`${(winCounter / totalCounter * 100).toFixed(2)}% matches win`)
        console.log(`${(loseCounter / totalCounter * 100).toFixed(2)}% matches lost`)
    }

}

basketballTournament(["Dunkers",
"2",
"75",
"65",
"56",
"73",
"Fire Girls",
"3",
"67",
"34",
"83",
"98",
"66",
"45",
"End of tournaments"])