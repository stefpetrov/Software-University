function agencyProfit(input) {

    let agencyName = input[0];
    let countAdultTickets = Number(input[1]);
    let countKidsTickets = Number(input[2]);
    let priceAdultTicket = Number(input[3]);
    let serviceTax = Number(input[4]);

    let priceKidsTicket = priceAdultTicket * 0.30

    let priceAdultWithTax = priceAdultTicket + serviceTax
    let priceKidWithTax = priceKidsTicket + serviceTax
    let priceTotal = (priceAdultWithTax * countAdultTickets) + (priceKidWithTax * countKidsTickets)
    let profit = (priceTotal * 0.2).toFixed(2);

    console.log(`The profit of your agency from ${agencyName} tickets is ${profit} lv.`)


}

agencyProfit(["Wizzair", "15", "5", "120", "40"])