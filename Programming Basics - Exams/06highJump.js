function highJump(input) {

    let index = 0
    let targetHeight = Number(input[index]);
    index++
    
    let currentHeight = targetHeight - 30
    let jumpCounter = 0
    let failCounter = 0
    

    while (currentHeight <= targetHeight) {

       let currentJump = Number(input[index]);
        index++
        jumpCounter++

        if (currentJump > currentHeight) {
            currentHeight += 5
            failCounter = 0
        } else {
            failCounter++
        }

        if (failCounter === 3) {
            console.log(`Tihomir failed at ${currentHeight}cm after ${jumpCounter} jumps.`)
            break


        }

    }
    if (currentHeight > targetHeight)
        console.log(`Tihomir succeeded, he jumped over ${targetHeight}cm after ${jumpCounter} jumps.`)

}


highJump(["250",
    "225",
    "224",
    "225",
    "228",
    "231",
    "235",
    "234",
    "235"])