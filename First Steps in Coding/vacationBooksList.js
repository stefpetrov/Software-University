function vacationBooksList(input) {

    let pages = Number(input[0]);
    let pagesPerHour = Number(input[1]);
    let daysForReading = Number(input[2]);

    let hoursPerDay = pages / pagesPerHour / daysForReading

    console.log(hoursPerDay)


}

vacationBooksList(["212", "20", "2"])
