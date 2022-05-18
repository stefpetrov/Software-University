function solve(str){
    
    let output = []
    for(let i = 0; i < str.length; i++){

        if(str[i].charCodeAt(0) >= 65 && str[i].charCodeAt(0) <= 90){

            let capitalLetter = str[i]
            if(output.length > 0){
            output.push(", ")

            }
            output.push(capitalLetter)
        }
        else{
            let lowerletter = str[i]

            output.push(lowerletter)
        }
    }
    console.log(output.join(""))

   
   
   
   
   
   
   
    // console.log(str.split(/(?=[A-Z])/).join(", "))  solve with regex

}   

solve('SplitMeIfYouCanHaHaYouCantOrYouCan')