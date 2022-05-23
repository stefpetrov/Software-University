function solve(input) {

    let numberOfPieces = Number(input.shift())

    let collection = {}

    for (let i = 0; i < numberOfPieces; i++) {
        let splittedLine = input.shift().split("|")
        let [piece, composer, key] = splittedLine
        collection[piece] = {
            composer: composer,
            key: key
        }
    }
    
    let line = input.shift()

    while (line !== "Stop") {

        let splitted = line.split("|")
        let command = splitted.shift()

        if (command === "Add") {
            let [piece, composer, key] = splitted

            if (!collection.hasOwnProperty(piece)) {
                collection[piece] = {
                    composer: composer,
                    key: key
                }
                console.log(`${piece} by ${composer} in ${key} added to the collection!`)
            } else {
                console.log(`${piece} is already in the collection!`)
            }
        }
        else if (command === "Remove") {
            let piece = splitted[0]
            if (collection.hasOwnProperty(piece)) {
                delete collection[piece]
                console.log(`Successfully removed ${piece}!`)
            }
            else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`)

            }
        }
        else if (command === "ChangeKey") {
            let piece = splitted[0]
            let newKey = splitted[1]

            if (collection.hasOwnProperty(piece)) {
                collection[piece].key = newKey
                console.log(`Changed the key of ${piece} to ${newKey}!`)
            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`)
            }
        }

        line = input.shift()
    }

    for (let line of Object.entries(collection)) {
        let song = line[0]
        let properties = line[1]

        console.log(`${song} -> Composer: ${properties.composer}, Key: ${properties.key}`)
    }
}

solve([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'
])