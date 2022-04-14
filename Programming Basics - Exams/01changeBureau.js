function changeBereau(input) {

    let bitcoinCount = Number(input[0]);
    let uhanaCount = Number(input[1]);
    let comision = Number(input[2]);

    let levaFromBitcoin = (bitcoinCount * 1168);
    let UsdFromUhana = uhanaCount * 0.15
    let levaFromUhana = UsdFromUhana * 1.76
    let totalLeva = levaFromBitcoin + levaFromUhana
    let totalEuro = totalLeva / 1.95

    let totalMoney = totalEuro - (totalEuro * comision / 100);

    console.log(totalMoney.toFixed(2))

}

changeBereau([7,50200.12,3])