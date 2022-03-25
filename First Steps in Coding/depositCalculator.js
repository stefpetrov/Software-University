function depositCalculator(input) {

    let depositSum = Number(input[0]);
    let duration = Number(input[1]);
    let interestPerYear = Number(input[2]);

    let interestTotal = depositSum * interestPerYear / 100
    let monthlyInterest = interestTotal / 12
    let total = depositSum + duration * monthlyInterest

    console.log(total);


}

depositCalculator(["200", "3", "5.7"])

