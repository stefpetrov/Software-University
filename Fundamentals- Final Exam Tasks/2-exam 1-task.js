function solve(input){

    let text = input.shift()

    let line = input.shift()

    while(line !== "Travel"){

        let splitted = line.split(":")
        let command = splitted[0]

        if(command === "Add Stop"){
            let index = Number(splitted[1])
            let stringToAdd = splitted[2]

            if(index >= 0 && index < text.length){
                let firstPart = text.slice(0,index)
                let lastPart = text.slice(index)
                text = firstPart + stringToAdd + lastPart

            }
            console.log(text)

        }
        else if(command === "Remove Stop"){
            let startIndex = Number(splitted[1])
            let endIndex = Number(splitted[2])
            if(startIndex >= 0 && startIndex < text.length && endIndex >= 0 && endIndex < text.length){
                let firstPart = text.substring(0,startIndex)
                let lastPart = text.substring(endIndex + 1)
                text = firstPart + lastPart
                
            }
            console.log(text)

        }
        else if(command === "Switch"){
            let oldString = splitted[1]
            let newString = splitted[2]

            if(text.includes(oldString)){

               text = text.replace(oldString,newString)
            }
            console.log(text)
        }

        line = input.shift()
    }
    console.log(`Ready for world tour! Planned stops: ${text}`)

}

solve(["Hawai::Cyprys-Greece",
"Add Stop:7:Rome",
"Remove Stop:11:16",
"Switch:Hawai:Bulgaria",
"Travel"])