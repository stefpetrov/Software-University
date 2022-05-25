function solve(input) {
    let numOfCars = Number(input.shift());

    let result = {};

    for (let i = 0; i < numOfCars; i++) {
        let line = input.shift();
        let splitted = line.split("|");
        let car = splitted[0];
        let kilometers = +splitted[1];
        let fuel = +splitted[2];

        result[car] = {
            kilometers,
            fuel,
        };
    }

    let line = input.shift();

    while (line !== "Stop") {
        let splittedLine = line.split(" : ");
        let command = splittedLine.shift();

        if (command === "Drive") {
            let car = splittedLine[0];
            let kilometers = +splittedLine[1];
            let fuel = +splittedLine[2];

            if (result[car].fuel >= fuel) {
                result[car].fuel -= fuel;
                result[car].kilometers += kilometers;
                console.log(`${car} driven for ${kilometers} kilometers. ${fuel} liters of fuel consumed.`);

                if (result[car].kilometers >= 100000) {
                    delete result[car];
                    console.log(`Time to sell the ${car}!`);
                }
            }
            else {
                console.log("Not enough fuel to make that ride");
            }
        }
        else if (command === "Refuel") {
            let car = splittedLine[0];
            let fuel = +splittedLine[1];
            let currentFuel = result[car].fuel;
            let newFuel = currentFuel + fuel;
            if (newFuel > 75) {
                newFuel = 75;
            }
            result[car].fuel = newFuel;
            console.log(`${car} refueled with ${newFuel - currentFuel} liters`);
        }
        else if (command === "Revert") {
            let car = splittedLine[0];
            let kilometers = +splittedLine[1];
            let currentKilometers = result[car].kilometers;

            if (currentKilometers - kilometers >= 10000) {
                console.log(`${car} mileage decreased by ${kilometers} kilometers`);
                result[car].kilometers = currentKilometers - kilometers;
            }
            else {
                result[car].kilometers = 10000;
            }
        }

        line = input.shift();
    }

    for (let car of Object.keys(result)) {
        console.log(`${car} -> Mileage: ${result[car].kilometers} kms, Fuel in the tank: ${result[car].fuel} lt.`);
    }
}

solve([
    "3",
    "Audi A6|38000|62",
    "Mercedes CLS|11000|35",
    "Volkswagen Passat CC|45678|5",
    "Drive : Audi A6 : 543 : 47",
    "Drive : Mercedes CLS : 94 : 11",
    "Drive : Volkswagen Passat CC : 69 : 8",
    "Refuel : Audi A6 : 50",
    "Revert : Mercedes CLS : 500",
    "Revert : Audi A6 : 30000",
    "Stop",
]);
