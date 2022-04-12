function cinemaTickets(input) {
    let index = 0
    let command = input[index];
    index++

    let studentCounter = 0
    let standardCounter = 0
    let kidCounter = 0
    let totalTickets = 0

    while (command !== "Finish") {
        let movie = command
        let capacity = Number(input[index]);
        index++
        let ticketType = input[index]
        index++
        let countTickes = 0

        while (ticketType !== "End") {

            countTickes++
            totalTickets++
            switch (ticketType) {
                case "student":
                    studentCounter++ ; break
                case "standard":
                    standardCounter++ ; break
                case "kid":
                    kidCounter++ ; break
            }

            if (countTickes >= capacity) {
                console.log(`${movie} - ${(countTickes / capacity * 100).toFixed(2)}% full.`)
                break
            }

            ticketType = input[index];
            index++
        }
        if (ticketType === "End") {
            console.log(`${movie} - ${(countTickes / capacity * 100).toFixed(2)}% full.`)
        }

        command = input[index];
        index++
    }
    console.log(`Total tickets: ${totalTickets}`)
    console.log(`${(studentCounter / totalTickets * 100).toFixed(2)}% student tickets.`)
    console.log(`${(standardCounter / totalTickets * 100).toFixed(2)}% standard tickets.`)
    console.log(`${(kidCounter / totalTickets * 100).toFixed(2)}% kids tickets.`)
}

cinemaTickets(["Taxi",
    "10",
    "standard",
    "kid",
    "student",
    "student",
    "standard",
    "standard",
    "End",
    "Scary Movie",
    "6",
    "student",
    "student",
    "student",
    "student",
    "student",
    "student",
    "Finish"
])

