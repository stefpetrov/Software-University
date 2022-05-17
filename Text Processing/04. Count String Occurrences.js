function solve(text,word){

    let textAsArr = text.split(" ")
    let counter = 0

    for (let part of textAsArr) {

        if(part === word){
            counter++
        }
    }
    console.log(counter)

}

solve('This is a word and it also is a sentence',
'is')