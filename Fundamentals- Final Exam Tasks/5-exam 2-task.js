function solve(input) {
    let digitPattern = /\d/g;

    let matchDigits = digitPattern.exec(input)
    let threshold = 1
    while(matchDigits !== null){
        threshold *= +matchDigits[0]

        matchDigits = digitPattern.exec(input)
    }
    console.log(`Cool threshold: ${threshold}`)

    let emojiPattern = /(\*\*|\:\:)(?<name>[A-Z][a-z]{2,})\1/g
    
    let matchEmojis = emojiPattern.exec(input)

    let emojiCounter = 0

    while(matchEmojis !== null){
        emojiCounter++

        matchEmojis = emojiPattern.exec(input)
    }
    console.log(`${emojiCounter} emojis found in the text. The cool ones are:`)

    matchEmojis = emojiPattern.exec(input)
    while(matchEmojis !== null){
        let emojiName = matchEmojis.groups.name
        let splitted = emojiName.split("")
        let counter = 0
        for (let letter of splitted) {
            let charCode = letter.charCodeAt()
            counter += charCode
        }
        if(counter > threshold){
            console.log(`${matchEmojis[0]}`)
        }

    matchEmojis = emojiPattern.exec(input)
    }

}

solve(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"])