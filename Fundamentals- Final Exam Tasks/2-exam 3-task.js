function solve(input) {

    let n = Number(input.shift())
    let collection = {}

    for (let i = 0; i < n; i++) {
        let line = input.shift().split("<->")
        let [plant, rarity] = line
        rarity = Number(rarity)

        collection[plant] = {
            rarity: rarity,
            rating: [],
            avgRating: 0

        }
    }
    
    let line = input.shift()

    while (line !== "Exhibition") {

        line = line.split(": ")
        let command = line.shift()

        if (command === "Rate") {
            line = line.shift().split(" - ")
            let plant = line[0]
            let rating = Number(line[1])

            if (!collection.hasOwnProperty(plant)) {
                console.log("error")
            } else {
                collection[plant].rating.push(rating)

            }
        }
        else if (command === "Update") {
            line = line.shift().split(" - ")
            let plant = line[0]
            let newRarity = Number(line[1])

            if (!collection.hasOwnProperty(plant)) {
                console.log("error")
            } else {
                collection[plant].rarity = newRarity

            }
        }
        else if (command === "Reset") {
            let plant = line[0]

            if (!collection.hasOwnProperty(plant)) {
                console.log("error")
            } else {
                collection[plant].rating.length = 0
            }
        }

        line = input.shift()
    }

    for (let element of Object.entries(collection)) {
        let avg = 0

        for (let num of element[1].rating) {
            avg += num
            element[1].avgRating = avg / element[1].rating.length
        }
    }

    console.log(`Plants for the exhibition:`)
    for (let element in collection) {
        console.log(`- ${element}; Rarity: ${collection[element].rarity}; Rating: ${collection[element].avgRating.toFixed(2)}`)
    }

}

solve(["3",
    "Arnoldii<->4",
    "Woodii<->7",
    "Welwitschia<->2",
    "Rate: Woodii - 10",
    "Rate: Welwitschia - 7",
    "Rate: Arnoldii - 3",
    "Rate: Woodii - 5",
    "Update: Woodii - 5",
    "Reset: Arnoldii",
    "Exhibition"])