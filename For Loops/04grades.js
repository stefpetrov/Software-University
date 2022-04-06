function grades(input) {

    let index = 0
    let students = Number(input[index])
    index++
    let currentScore
    let over5 = 0
    let over4 = 0
    let over3 = 0
    let under3 = 0
    let totalScore = 0

    for(i = 0; i < students; i++) {

        currentScore = Number(input[index])
        index++
        totalScore += currentScore

        if(currentScore >= 5) {
            over5++
        } else if(currentScore >= 4) {
            over4++
        } else if(currentScore >= 3) {
            over3++
        } else {
            under3 ++
        }
        
    }

    console.log(`Top students: ${(over5 / students * 100).toFixed(2)}%`)
    console.log(`Between 4.00 and 4.99: ${(over4 / students * 100).toFixed(2)}%`)
    console.log(`Between 3.00 and 3.99: ${(over3 / students * 100).toFixed(2)}%`)
    console.log(`Fail: ${(under3 / students * 100).toFixed(2)}%`)
    console.log(`Average: ${(totalScore / students).toFixed(2)}`)


    
}

grades(["10",
    "3.00",
    "2.99",
    "5.68",
    "3.01",
    "4",
    "4",
    "6.00",
    "4.50",
    "2.44",
    "5"])