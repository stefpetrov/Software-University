function streamOfLetters(input) {

let index = 0
let command = input[index];
index++
let passC = 0
let passO = 0
let passN = 0


    while(command !== "End") {

        let letter = command
        if((letter >= "A" && letter <= "Z") || (letter >= "a" && letter <= "z")){

        if(letter === "c") {
            passC++
            
        }else if(letter === "o") {
            passO++
        }else if(letter === "n") {
            passN++
        }

        














        }
        


        command = input[index];
        index++

    }

    console.log("Hello there")
}

streamOfLetters(["H",
"n",
"e",
"l",
"l",
"o",
"o",
"c",
"t",
"c",
"h",
"o",
"e",
"r",
"e",
"n",
"e",
"End"])