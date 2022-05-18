function solve(str){

    let result = []
   for(let i = 0; i< str.length; i++){
      let currentLetter = str[i]
      let nextLetter =   str[i+1]
      if(currentLetter !== nextLetter){
        result.push(currentLetter)
      }

   }
   console.log(result.join(""))


}

solve('aaaaabbbbbcdddeeeedssaa')