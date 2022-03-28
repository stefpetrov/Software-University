function trainingLab(input) {

    let w = Number(input[0]);
    let h = Number(input[1]);

    let totalDeskPerW = w  / 1.2
    let totalDeskPerWOne = parseInt(totalDeskPerW)
    let totalDeskPerH = (h - 1) / 0.7
    let totalDeskPerHOne = parseInt(totalDeskPerH)
    let totalDesks = totalDeskPerWOne * totalDeskPerHOne - 3


    console.log(totalDesks);
    
}

trainingLab([15, 8.9]);

