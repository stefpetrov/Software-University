function solve(input) {

    let line = input.shift()

    let collection = {}

    while (line !== "Sail") {
        let splitted = line.split("||")
        let town = splitted[0]
        let population = +splitted[1]
        let gold = +splitted[2]
        if (!collection.hasOwnProperty(town)) {
            collection[town] = {
                population,
                gold
            }
        }
        else {
            collection[town].population += population
            collection[town].gold += gold
        }

        line = input.shift()
    }

    let newLine = input.shift()

    while (newLine !== "End") {

        let splitted = newLine.split("=>")
        let command = splitted.shift()

        if (command === "Plunder") {
            let town = splitted[0]
            let population = +splitted[1]
            let gold = +splitted[2]

            console.log(`${town} plundered! ${gold} gold stolen, ${population} citizens killed.`)

            collection[town].population -= population
            collection[town].gold -= gold

            if (collection[town].population <= 0 || collection[town].gold <= 0) {
                console.log(`${town} has been wiped off the map!`)
                delete collection[town]
            }

        }
        else if (command === "Prosper") {
            let town = splitted[0]
            let gold = +splitted[1]

            if (gold < 0) {
                console.log("Gold added cannot be a negative number!")
            }
            else {
                collection[town].gold += gold
                console.log(`${gold} gold added to the city treasury. ${town} now has ${collection[town].gold} gold.`)
            }

        }

        newLine = input.shift()
    }
    let result = Object.keys(collection)
    if (result.length === 0) {
        console.log("Ahoy, Captain! All targets have been plundered and destroyed!")
    }
    else {
        console.log(`Ahoy, Captain! There are ${result.length} wealthy settlements to go to:`)
    }
    for (let town of Object.keys(collection)) {

        console.log(`${town} -> Population: ${collection[town].population} citizens, Gold: ${collection[town].gold} kg`)

    }

}

solve(["Tortuga||345000||1250",
    "Santo Domingo||240000||630",
    "Havana||410000||1100",
    "Sail",
    "Plunder=>Tortuga=>75000=>380",
    "Prosper=>Santo Domingo=>180",
    "End"])