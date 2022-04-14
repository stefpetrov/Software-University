function oscarsWeekInCinema(input){

    let movie = input[0];
    let typeRoom = input[1];
    let countTickets = Number(input[2]);

    let price
    switch(movie) {
        
        case "A Star Is Born":
            if(typeRoom === "normal") {
                price = 7.50 * countTickets
            } else if(typeRoom === "luxury") {
                price = 10.50 * countTickets
            } else if(typeRoom === "ultra luxury") {
                price = 13.50 * countTickets
            } break
        case "Bohemian Rhapsody":
            if(typeRoom === "normal") {
                price = 7.35 * countTickets
            } else if(typeRoom === "luxury") {
                price = 9.45 * countTickets
            } else if(typeRoom === "ultra luxury") {
                price = 12.75 * countTickets
            } break
        case "Green Book":
            if(typeRoom === "normal") {
                price = 8.15 * countTickets
            } else if(typeRoom === "luxury") {
                price = 10.25 * countTickets
            } else if(typeRoom === "ultra luxury") {
                price = 13.25 * countTickets
            } break
        case "The Favourite":
                if(typeRoom === "normal") {
                    price = 8.75 * countTickets
                } else if(typeRoom === "luxury") {
                    price = 11.55 * countTickets
                } else if(typeRoom === "ultra luxury") {
                    price = 13.95 * countTickets
                } break


    }

    console.log(`${movie} -> ${price.toFixed(2)} lv.`)



}

oscarsWeekInCinema(["A Star Is Born",
    "luxury",
    "42"])