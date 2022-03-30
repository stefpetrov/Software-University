function transportPrice(input) {

    let kilometers = Number(input[0]);
    let dayOrNight = input[1];

    let transportTaxiDay = 0.70 + (kilometers * 0.79);
    let transportTaxiNight = 0.70 + (kilometers * 0.90);
    let transportBus = kilometers * 0.09
    let transportTrain = kilometers * 0.06

    if (kilometers >= 100) {
        console.log(transportTrain.toFixed(2))
    } else if (kilometers >= 20) {
        console.log(transportBus.toFixed(2))
    } else if (dayOrNight === "day") {
        console.log(transportTaxiDay.toFixed(2))

    } else if (dayOrNight === "night") {
        console.log(transportTaxiNight.toFixed(2))
    }
}

transportPrice(["180", "night"])