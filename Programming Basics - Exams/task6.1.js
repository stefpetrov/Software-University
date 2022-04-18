function sumAndProduct(input) {
    let n = input;
    for(let a = 1; a <= 9; a++){
        for(let b = 9; b >= a; b--){
            for(let c = 0; c <= 9; c++) {
                for(let d = 9; d >= c; d--){
                        if((a + b + c + d) === (a * b * c * d)){
                        if(n % 10 === 5) {
                            console.log(`${a}${b}${c}${d}`)
                            return;
                        }  
                    }
                    let proba = Math.trunc((a * b * c * d) / (a + b + c + d))
                    if(proba === 3){
                        if(n % 3 === 0) {
                            if(d > 0) {
                                console.log(`${d}${c}${b}${a}`)
                                return;
                            }
                        } 
                    } 
                }   
            }
        }
    }
    console.log("Nothing found")
}

sumAndProduct(123)