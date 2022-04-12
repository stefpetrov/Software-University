function equalSumsEvenOddPosition(input){

     let startNum = Number(input[0]);
     let endNum = Number(input[1]);

     let result = ""
     

     for(let i = startNum; i <= endNum; i++){

        let currentNum = "" + i
        let even = 0
        let odds = 0

        for(let j = 0; j < currentNum.length; j++) {

            if(j % 2 === 0) {
                odds += Number(currentNum[j])
            }
            else {
                even += Number(currentNum[j])
            }
           
        }
        if(odds === even){
            result += currentNum + " "  
        }
        

     }
     console.log(result)

     






}

equalSumsEvenOddPosition(["123456",
"124000"])


