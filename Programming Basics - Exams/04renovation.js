function renovation(input){

let index = 0
let h = Number(input[index]);
index++
let w = Number(input[index]);
index++

let notPainedPercent = Number(input[index]);
index++
let command = input[index];
index++
let totalLiters = 0


    let area = (w * h * 4)
    let finalArea = Math.ceil(area -  (area * notPainedPercent / 100))
    

    while(command !== "Tired!") {

        let litersPaint = Number(command)
        totalLiters += litersPaint

        finalArea -= litersPaint
        let diff = Math.abs(finalArea)
        
        if(totalLiters > Math.ceil(area -  (area * notPainedPercent / 100))) {

            console.log(`All walls are painted and you have ${diff} l paint left!`) ;break
        } else if(totalLiters === Math.ceil(area -  (area * notPainedPercent / 100))) {
            console.log("All walls are painted! Great job, Pesho!")
            break
        }



        command = input[index];
        index++

    } if(command === "Tired!") {

        console.log(`${finalArea} quadratic m left.`)
    
    }



}

renovation(["3",
"5",
"10",
"2",
"3",
"4",
"Tired!"])