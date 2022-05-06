function solve(input){

    let arr = input.shift().split(", ")
    let numberOfCommands = Number(input.shift())

    for(let i = 0; i < numberOfCommands; i++){

        let line = input[i];
        let command = line.split(", ").shift()

        if(command === "Add"){
            let lineToAdd = line.split(", ")
            let elementToAdd = lineToAdd[1]
            if(!arr.includes(elementToAdd)){
                arr.push(elementToAdd)
                console.log("Card successfully added")
            }else{
                console.log("Card is already in the deck")
            }


        }else if(command === "Remove"){
            let lineToRemove = line.split(", ")
            let elementToRemove = lineToRemove[1]
            if(!arr.includes(elementToRemove)){
                console.log("Card not found")
            } else{
                let indexToRemove = arr.indexOf(elementToRemove)
                arr.splice(indexToRemove,1)
                console.log("Card successfully removed")
            }


        }else if(command === "Remove At"){
            let lineToAdd = line.split(", ")
            let indexToRemoveAt = +lineToAdd[1]
            if(indexToRemoveAt >= 0 && indexToRemoveAt < arr.length){
                arr.splice(indexToRemoveAt,1)
                console.log("Card successfully removed")
            }else{
                console.log("Index out of range")
            }


        }else if(command === "Insert"){
            let lineToInsert = line.split(", ")
            let indexToInsert = +lineToInsert[1]
            let elementToInsert = lineToInsert[2]
            if(indexToInsert >= 0 && indexToInsert < arr.length){
                if(!arr.includes(elementToInsert)){

                    arr.splice(indexToInsert,0,elementToInsert)
                    console.log("Card successfully added")
                }else{
                    console.log("Card is already added")
                }
            } else{
                console.log("Index out of range")
            }


        }
    }
    console.log(arr.join(", "))

}

solve(["Ace of Diamonds, Queen of Hearts, King of Clubs",
"3",
"Add, King of Diamonds",
"Insert, 2, Jack of Spades",
"Remove, Ace of Diamonds"])