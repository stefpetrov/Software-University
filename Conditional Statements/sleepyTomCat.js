function sleepyTomCat(input) {

let freeDays = Number(input[0]);
let workingDays = 365 - freeDays;
let playfreeDaysInMin = freeDays * 127;
let playWorkingDaysInMin = workingDays * 63;
let totalPlay = playfreeDaysInMin + playWorkingDaysInMin
let diffInH = Math.floor(Math.abs((30000 - totalPlay) / 60))
let diffInMin = Math.abs((30000 - totalPlay )% 60)


if (totalPlay > 30000 ) {
    console.log("Tom will run away");
    console.log(`${diffInH} hours and ${diffInMin} minutes more for play`)
} else {
    console.log("Tom sleeps well")
    console.log(`${diffInH} hours and ${diffInMin} minutes less for play`)
}





}
sleepyTomCat([113])