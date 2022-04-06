function footballLeague(input) {

    index = 0
    let capacity = Number(input[index]);
    index++
    let totalFans = Number(input[index]);
    index++

    let currentSector
    let fansInA = 0
    let fansInB = 0
    let fansInV = 0
    let fansInG = 0

    for(i = 0; i < totalFans; i++) {

        currentSector = input[index]
        index++
        
        switch(currentSector){

            case "A": fansInA++ ; break;
            case "B": fansInB++ ; break;
            case "V": fansInV++ ; break;
            case "G": fansInG++ ; break;

        }
    }
    console.log((fansInA / totalFans * 100).toFixed(2) + "%")
    console.log((fansInB / totalFans * 100).toFixed(2) + "%")
    console.log((fansInV / totalFans * 100).toFixed(2) + "%")
    console.log((fansInG / totalFans * 100).toFixed(2) + "%")
    console.log((totalFans / capacity * 100).toFixed(2) + "%")

}

footballLeague(["76","10","A","V","V","V","G","B","A","V","B","B"])