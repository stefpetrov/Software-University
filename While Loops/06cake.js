function cake(input) {
    let index = 0
    let w = Number(input[index])
    index++
    let l = Number(input[index]);
    index++

    let command = input[index];
    index++
    

    let sizeCake = w * l
    let onePiece = 1
    let pieceCounter = 0
    


    while(command !== "STOP") {
        command = Number(command)
        

        sizeCake -= (command * onePiece)
        pieceCounter += command

        
        if(sizeCake <= 0) {
            console.log(`No more cake left! You need ${Math.abs(0 - sizeCake)} pieces more.`)
            break
        }
        command = input[index];
        index++


}

if(command === "STOP") {

    
    
    console.log(`${Math.abs((w * l) - pieceCounter)} pieces are left.`)
}



}
cake(["10",
"2",
"2",
"4",
"6",
"STOP"])