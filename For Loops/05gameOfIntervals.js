function gameOfIntervals(input) {


let index = 0
let countNumbers = Number(input[index]);
index++

let from0to9Counter = 0
let from10to19Counter = 0
let from20to29Counter = 0
let from30to39Counter = 0
let from40to49Counter = 0
let invalidCounter = 0
let currentNumber
let points = 0


for(i = 0; i < countNumbers; i++) {
    
currentNumber = Number(input[index])
index++

if(currentNumber >= 0 && currentNumber <= 9) {
    points += (currentNumber * 0.20)
    from0to9Counter++

} else if(currentNumber >= 10 && currentNumber <= 19) {
    points += (currentNumber * 0.30)
    from10to19Counter++

} else if(currentNumber >= 20 && currentNumber <= 29) {
    points += (currentNumber * 0.40)
    from20to29Counter++

} else if(currentNumber >= 30 && currentNumber <= 39) {
    points += 50
    from30to39Counter++

} else if(currentNumber >= 40 && currentNumber <= 50) {
    points += 100
    from40to49Counter++

} else if(currentNumber < 0 || currentNumber > 50 ) {
    points = points / 2
    invalidCounter++
}

}

let percentfrom0to9 = (from0to9Counter / countNumbers * 100).toFixed(2)
let percentfrom10to19 = (from10to19Counter / countNumbers * 100).toFixed(2)
let percentfrom20to29C = (from20to29Counter / countNumbers * 100).toFixed(2)
let percentfrom30to39 = (from30to39Counter / countNumbers * 100).toFixed(2)
let percentfrom40to49 = (from40to49Counter / countNumbers * 100).toFixed(2)
let percentInvalid = (invalidCounter / countNumbers * 100).toFixed(2)

console.log(points.toFixed(2));
console.log(`From 0 to 9: ${percentfrom0to9}%`)
console.log(`From 10 to 19: ${percentfrom10to19}%`)
console.log(`From 20 to 29: ${percentfrom20to29C}%`)
console.log(`From 30 to 39: ${percentfrom30to39}%`)
console.log(`From 40 to 50: ${percentfrom40to49}%`)
console.log(`Invalid numbers: ${percentInvalid}%`)
    
}

gameOfIntervals(["10",
"43",
"57",
"-12",
"23",
"12",
"0",
"50",
"40",
"30",
"20"])