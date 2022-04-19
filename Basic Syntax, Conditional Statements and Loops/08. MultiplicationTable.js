function solve(n){

    let num = Number(n);

    for(let i = 1; i <= 10; i++){

        let result = num * i

        console.log(`${num} X ${i} = ${result}`)
    }
}

solve(2)