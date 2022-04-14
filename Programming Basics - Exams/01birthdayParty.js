function birthdayParty(input) {

    let rent = Number(input[0]);

    let cake = rent * 0.20
    let drinks = cake * 0.55
    let animation = rent / 3

    let sum = rent + cake + animation + drinks

    console.log(sum);
}

birthdayParty(["3720"]);