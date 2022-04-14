function mountainRun(input) {

    let recordInSec = Number(input[0]);
    let distanceInM = Number(input[1]);
    let timeInSecFor1m = Number(input[2]);

    let neededSeconds = distanceInM * timeInSecFor1m
    let delayInSec = (Math.floor(distanceInM / 50 )) * 30

    let totalTimeInSec = neededSeconds + delayInSec
    let diff = Math.abs(recordInSec - totalTimeInSec)

    if (totalTimeInSec < recordInSec) {
        console.log(`Yes! The new record is ${(totalTimeInSec).toFixed(2)} seconds.`)
    } else {
        console.log(`No! He was ${(diff).toFixed(2)} seconds slower.`);
    }
}

mountainRun(["10164",
"1400",
"25"])