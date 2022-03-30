function pipesInPool(input){

    let fuelPool = Number(input[0]);
    let debitPipe1perHour = Number(input[1]);
    let debitPipe2perHour = Number(input[2]);
    let missingHours = Number(input[3]);

    let debitPipe1 = debitPipe1perHour * missingHours
    let debitPipe2 = debitPipe2perHour * missingHours
    let totalDebit = debitPipe1 + debitPipe2
    let percentPipe1 = (debitPipe1 / totalDebit * 100).toFixed(2)
    let percentPipe2 = (debitPipe2 / totalDebit * 100).toFixed(2)
    let totalPecentPool = (totalDebit / fuelPool * 100).toFixed(2)
    let letersMore = (totalDebit - fuelPool).toFixed(2);
    
    if(totalDebit <= fuelPool) {
        console.log(`The pool is ${totalPecentPool}% full. Pipe 1: ${percentPipe1}%. Pipe 2: ${percentPipe2}%`)
    } else {
        console.log(`For ${missingHours.toFixed(2)} hours the pool overflows with ${letersMore} liters.`)
        
    }

}

pipesInPool([100,
100,
100,
2.5])