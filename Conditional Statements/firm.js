function firm(input) {

let neededHours = Number(input[0]);
let workingDays = Number(input[1]);
let countOfEmployesOvertime = Number(input[2]);

let hoursForWork = workingDays * 8 * 0.90;
let overtime = countOfEmployesOvertime * 2 * workingDays
let totalWorkingHours = Math.floor(hoursForWork + overtime)
let diff = Math.abs(totalWorkingHours - neededHours)

if (totalWorkingHours >= neededHours) {

console.log(`Yes!${diff} hours left.`)
} else {
    console.log(`Not enough time!${diff} hours needed.`)
}

}

firm([50,
    5,
    2])