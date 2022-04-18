function grandpaStavri(input){

    let index = 0
    let days = Number(input[index]);
    index++

    let sumDegreesForLiter = 0
    let totalLiters = 0
    let sumDegreesTotal = 0

    
    for(let i = 0; i < days; i ++){

        let countRakia = Number(input[index]);
        index++
        let degrees = Number(input[index]);
        index++

        totalLiters += countRakia


        sumDegreesForLiter = countRakia * degrees
        sumDegreesTotal += sumDegreesForLiter
        

        
    }

    console.log(`Liter: ${totalLiters.toFixed(2)}`)
    console.log(`Degrees: ${(sumDegreesTotal / totalLiters).toFixed(2)}`)

    let finalDegree = sumDegreesTotal / totalLiters

    if(finalDegree < 38 ){
        console.log("Not good, you should baking!")
    }
        else if(finalDegree >= 38 && finalDegree <= 42){
            console.log("Super!")

        }
        else if(finalDegree > 42){
            console.log("Dilution with distilled water!")
        }

        }
    





grandpaStavri(["3",
"100",
"45",
"50",
"55",
"150",
"36"])