function catWalking(input) {

    let minWalkPerDay = Number(input[0]);
    let countWalkPerDay = Number(input[1]);
    let eatedCaloriesPerDay = Number(input[2]);

    let catWalkinkPerDay = minWalkPerDay * countWalkPerDay
    let caloriesPerDay = catWalkinkPerDay * 5
    let walkingEnough = eatedCaloriesPerDay / 2

    if (caloriesPerDay >= walkingEnough) {

        console.log(`Yes, the walk for your cat is enough. Burned calories per day: ${caloriesPerDay}.`);
    } else {
        console.log(`No, the walk for your cat is not enough. Burned calories per day: ${caloriesPerDay}.`);
    }
    
}

catWalking([15,2,500])