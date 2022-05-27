function solve(input) {
    let text = input.shift();
    let line = input.shift();

    while (line !== "Generate") {
        let splitted = line.split(">>>");
        let command = splitted.shift();

        if (command === "Contains") {
            let subText = splitted[0];

            if (text.includes(subText)) {
                console.log(`${text} contains ${subText}`);
            } else {
                console.log("Substring not found!");
            }
        } else if (command === "Flip") {
            let lowerOrUpeer = splitted[0]
            let startIndex = +splitted[1]
            let endIndex = +splitted[2]

            let firstPart = text.substring(0,startIndex)
            let lastPart = text.substring(endIndex)
            let partToChange = text.substring(startIndex,endIndex)
            if(lowerOrUpeer === "Upper"){
                partToChange = partToChange.toUpperCase()
            }
            else if(lowerOrUpeer === "Lower"){
                partToChange = partToChange.toLowerCase()
            }
            text = firstPart + partToChange + lastPart

            console.log(text)



        } else if (command === "Slice") {

            let startIndex = +splitted[0]
            let endIndex = +splitted[1]

            let textToDelete = text.substring(startIndex,endIndex)
            text = text.replace(textToDelete,"")
            console.log(text)

        }

        line = input.shift();
    }
    console.log(`Your activation key is: ${text}`)
}

solve([
    "abcdefghijklmnopqrstuvwxyz",
    "Slice>>>2>>>6",
    "Flip>>>Upper>>>3>>>14",
    "Flip>>>Lower>>>5>>>7",
    "Contains>>>def",
    "Contains>>>deF",
    "Generate",
]);
