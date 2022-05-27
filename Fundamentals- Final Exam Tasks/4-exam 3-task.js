function solve(input) {

    let countHeroes = input.shift()
    let collection = {}

    for (let i = 0; i < countHeroes; i++) {
        let [heroName, HP, MP] = input.shift().split(" ")
        HP = Number(HP)
        MP = Number(MP)
        collection[heroName] = {
            HP,
            MP
        }
    }

    let line = input.shift()

    while (line !== "End") {

        let splitted = line.split(" - ")
        let command = splitted.shift()

        if (command === "CastSpell") {
            let heroName = splitted[0]
            let manaNeeded = +splitted[1]
            let spellName = splitted[2]

            if (collection[heroName].MP >= manaNeeded) {
                collection[heroName].MP -= manaNeeded

                console.log(`${heroName} has successfully cast ${spellName} and now has ${collection[heroName].MP} MP!`)
            } else {
                console.log(`${heroName} does not have enough MP to cast ${spellName}!`)
            }

        }
        else if (command === "TakeDamage") {
            let heroName = splitted[0]
            let damage = +splitted[1]
            let attacker = splitted[2]

            if (collection[heroName].HP > damage) {
                collection[heroName].HP -= damage

                console.log(`${heroName} was hit for ${damage} HP by ${attacker} and now has ${collection[heroName].HP} HP left!`)
            }
            else {
                console.log(`${heroName} has been killed by ${attacker}!`)
                delete collection[heroName]
            }
        }
        else if (command === "Recharge") {
            let heroName = splitted[0]
            let amount = +splitted[1]

            if (collection[heroName].MP + amount > 200) {
                let currentMana = collection[heroName].MP
                collection[heroName].MP = 200
                console.log(`${heroName} recharged for ${200 - currentMana} MP!`)
            } else {
                collection[heroName].MP += amount
                console.log(`${heroName} recharged for ${amount} MP!`)

            }
        }

        else if (command === "Heal") {
            let heroName = splitted[0]
            let amount = +splitted[1]

            if (collection[heroName].HP + amount > 100) {
                let currentLife = collection[heroName].HP
                collection[heroName].HP = 100
                console.log(`${heroName} healed for ${100 - currentLife} HP!`)

            } else {
                collection[heroName].HP += amount
                console.log(`${heroName} healed for ${amount} HP!`)
            }

        }

        line = input.shift()
    }

    for (let hero of Object.keys(collection)) {
        console.log(`${hero}`)
        console.log(`  HP: ${collection[hero].HP}`)
        console.log(`  MP: ${collection[hero].MP}`)
    }
}

solve([2,
    "Solmyr 85 120",
    "Kyrre 99 50",
    "Heal - Solmyr - 120",
    "Recharge - Solmyr - 90",
    "TakeDamage - Kyrre - 66 - Orc",
    "CastSpell - Kyrre - 15 - ViewEarth",
    "End"])