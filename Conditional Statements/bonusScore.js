function bonusScore(input) {

    let num = Number (input[0]);

    let bonus = 0

    if (num > 1000) {
        bonus = num * 0.1
    } else if (num > 100) {
        bonus = num * 0.2
    } else {
        bonus = 5
    }

    if (num % 2 === 0) {
        bonus = bonus + 1
    } if (num % 10 === 5) {
        bonus = bonus + 2
    }

    let totalNum = num + bonus

    console.log(bonus);
    console.log(totalNum)

}

bonusScore(["15875"])