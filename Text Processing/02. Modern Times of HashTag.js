function solve(text){

    let textAsArr = text.split(" ")

    for (let word of textAsArr) {
        if(word.includes("#") && word.length > 1){
            
            word = word.replace("#","")
            if(onlyLetters(word)){ // invoke the regex function
                console.log(word)
            }
        }
    }
    function onlyLetters(str) {  // we use regex function to chek is there only letters
        return /^[a-zA-Z]+$/.test(str);
      }
    
}

solve('The symbol # is known #variously in English-speaking #regions as the #number sign')