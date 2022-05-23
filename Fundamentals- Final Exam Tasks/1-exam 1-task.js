function solve(input){

    let text = input.shift()

    let line = input.shift()

    while(line !== "Decode"){

        let tokens = line.split("|")
        let command = tokens[0]

        if(command === "Move"){
            let countLettersToMove = +tokens[1]
            
            let slicedText = text.slice(0,countLettersToMove)
            let otherText = text.substring(countLettersToMove)
            text = otherText + slicedText
            

        }
        else if(command === "Insert"){
            let index = +tokens[1]
            let value = tokens[2]

            let firstPartOfText = text.substring(0,index)
            let lastPartOfText = text.substring(index)
            text = firstPartOfText + value + lastPartOfText
            
        }

        else if(command === "ChangeAll"){

            let oldLetter = tokens[1];
            let newLetter = tokens[2]

            while(text.includes(oldLetter)){
                text = text.replace(oldLetter,newLetter)
            }

        }
        


        line = input.shift()
    }

    console.log(`The decrypted message is: ${text}`)

}

solve([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode'
  ])