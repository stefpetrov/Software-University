function foodDelivery(input) {

    let chickenMenus = Number(input[0]) * 10.35
    let fishMenus = Number(input[1]) * 12.40;
    let vegiMenus = Number(input[2]) * 8.15;
    
    let desert = (chickenMenus + fishMenus + vegiMenus) * 0.20;

    let totalCost = chickenMenus + fishMenus + vegiMenus + desert + 2.50;

    console.log(totalCost);

}

foodDelivery(["2", "4", "3"])