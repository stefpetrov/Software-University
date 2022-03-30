function pets(input) {

let days = Number(input[0]);
let foodInKG = Number(input[1]);
let dogFoodInKGPerDay = Number(input[2]);
let catFoodinKGPerDay = Number(input[3]);
let turtleFoodInGrPerDay = Number(input[4]);

let neededDogFood = days * dogFoodInKGPerDay
let neededCatFood = days * catFoodinKGPerDay
let neededturtleFood = days * turtleFoodInGrPerDay / 1000
let totalFoodNeeded = neededDogFood + neededCatFood + neededturtleFood
let diff = Math.abs(foodInKG - totalFoodNeeded)

if (foodInKG >= totalFoodNeeded) {
    console.log(`${Math.floor(diff)} kilos of food left.`)
} else {
    console.log(`${Math.ceil(diff)} more kilos of food are needed.`)
}


}

pets(["2","10","1","1","1200"])