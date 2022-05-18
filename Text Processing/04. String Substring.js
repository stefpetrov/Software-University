function solve(word,text){
    word = word.toLowerCase()
    text = text.toLowerCase()
    let textAsArr = text.split(" ")
    
    if(textAsArr.includes(word)){
        console.log(word)
    }else{
        console.log(`${word} not found!`)
    }

    
}

solve('python',
'JavaScript is the best programming language')