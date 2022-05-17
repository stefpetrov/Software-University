function solve(words,str){
    words = words.split(", ")
    
    for (let word of words) {
        let neededWord = "*".repeat(word.length)
        if(str.includes(neededWord)){
           str = str.replace(neededWord,word)
        }
    }
    console.log(str)
}

solve('great, learning',
'softuni is ***** place for ******** new programming languages')