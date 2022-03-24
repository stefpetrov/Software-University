function garden(input) {
    let metersToBeLandscape = input[0];
    let priceForM2 = 7.61;
    let price = metersToBeLandscape * priceForM2;
    let discount = price * 0.18;
    let finalPrice = price - discount;


console.log(`The final price is: ${finalPrice} lv.`);
console.log(`The discount is: ${discount} lv.`);
}


garden([550]);
