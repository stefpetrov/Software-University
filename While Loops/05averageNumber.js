function averageNumber(input) {
    let index = 0
    let n = Number(input[index]);
    index++

    let sum = 0
    let counter = 0

    for(let i = 1; i <= n; i++) {

       let num = Number(input[i]);
        counter++
       sum += num
        
    }

    console.log((sum/ counter).toFixed(2))

}

averageNumber([4,
    3,
    2,
    4,
    2])

