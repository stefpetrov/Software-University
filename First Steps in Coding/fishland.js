function fishland(input) {

    let priceSkumria = Number(input[0]);
    let priceCaca = Number(input[1]);
    let palamudKG = Number(input[2]);
    let safridKG = Number(input[3]);
    let midiKG = Number(input[4]);

    let pricePalamud = priceSkumria + (priceSkumria * 0.60);
    let priceSafrid = priceCaca + (priceCaca * 0.80);
    let priceMidi = 7.5;

    let totalSum = (palamudKG * pricePalamud) + (safridKG * priceSafrid) + (midiKG * priceMidi);

    console.log(totalSum.toFixed(2));

}

fishland(["5.55", "3.57", "4.30", "3.60", "7"])

