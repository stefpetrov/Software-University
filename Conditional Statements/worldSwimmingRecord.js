function worldSwimmingRecord(input) {

    let recordInSec = Number(input[0]);
    let distanceInMeters = Number(input[1]);
    let timeInSecFor1m = Number(input[2]);


    let neededSecends = distanceInMeters * timeInSecFor1m;
    let waterResistance = Math.floor(distanceInMeters / 15) * 12.5;
    let totalTime = (neededSecends + waterResistance).toFixed(2);
    let diff = (totalTime - recordInSec).toFixed(2);

    if (recordInSec <= totalTime) {
    
    console.log(`No, he failed! He was ${diff} seconds slower.`)
    } else if (recordInSec > totalTime) {
        console.log(`Yes, he succeeded! The new world record is ${totalTime} seconds.`)
    }
}

worldSwimmingRecord(["55555.67",
"3017",
"5.03"])
