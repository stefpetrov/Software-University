function solve(input){

    let text = input.shift()

    let line = input.shift()

    while(line !== "Reveal"){

        let splitted = line.split(":|:")
        let command = splitted.shift()

        if(command === "ChangeAll"){
            let oldText = splitted[0]
            let newText = splitted[1]
            
            while(text.includes(oldText)){
            text = text.replace(oldText,newText)
            
            
            }
            console.log(text)
        }

        else if(command === "Reverse"){
            let wordForReverse = splitted[0]

            if(text.includes(wordForReverse)){
                let index = text.indexOf(wordForReverse)
                let firstPart = text.substring(0,index)
                let lastPart = text.substring(index + wordForReverse.length)
                 let reversedWord = wordForReverse.split("").reverse().join("")
                 text = firstPart + lastPart + reversedWord
                
                 console.log(text)

            }
            else{
                console.log("error")
            }

        }

        else if(command === "InsertSpace"){
            let index = Number(splitted[0])

            let firstPart = text.substring(0,index)
            let lastPart = text.substring(index)
            text = firstPart + " " + lastPart
            console.log(text)


        }
        
        line = input.shift()
    }
    console.log(`You have a new text message: ${text}`)

}

solve([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'
  ])