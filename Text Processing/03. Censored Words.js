function solve(text,word){

    let censoredWord = "*".repeat(word.length)
    let censoredText = text
    while(censoredText.includes(word)){
       censoredText = censoredText.replace(word,censoredWord)
    }
    console.log(censoredText)




}

solve('A small sentence with small some words', 'small')