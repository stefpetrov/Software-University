function solve(num,prec){
    let neededNum = Number(num)
    let precision = Number(prec)

    if(precision > 15){
        precision = 15
    }
    
    let result = neededNum.toFixed(precision)

    
    console.log(parseFloat(result))
    
}

solve(10.5,3)

