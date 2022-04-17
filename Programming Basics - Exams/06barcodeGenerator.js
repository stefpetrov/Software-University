function barcodeGenerator(input){


    let startNum = Number(input[0]);
    let endNum = Number(input[1]);
    let result = ""

    startNum = "" + startNum
    let Num1StartNum = Number(startNum[0]);
    let Num2StartNum = Number(startNum[1]);
    let Num3StartNum = Number(startNum[2]);
    let Num4StartNum = Number(startNum[3]);
    
    endNum = "" + endNum
    let num1EndNum = Number(endNum[0]);
    let num2EndNum = Number(endNum[1]);
    let num3EndNum = Number(endNum[2]);
    let num4EndNum = Number(endNum[3]);

    
    for(let a = Num1StartNum; a <= num1EndNum; a++){
        for(let b = Num2StartNum; b <= num2EndNum; b++){
            for(let c = Num3StartNum; c <= num3EndNum; c++){
                for(let d = Num4StartNum; d <= num4EndNum; d++){

                    if(a % 2 !== 0 && b % 2 !== 0 && c % 2 !== 0 && d % 2 !== 0){

                        result = result + a + b + c + d + " "
                    }
                    
                    
                    
                }
            }
        }
    }
    

   console.log(result)
    
    
}

barcodeGenerator(["3256",
"6579"])