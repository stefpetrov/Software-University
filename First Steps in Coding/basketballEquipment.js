function basketballEquipment(input) {

    let yearPrice = Number(input[0]);

    let sneakers = yearPrice - (yearPrice * 0.40);
    let equip = sneakers - (sneakers * 0.20);
    let ball = equip / 4;
    let acc =  ball / 5;
 
    let totalCost = yearPrice + sneakers + equip + ball + acc;

    console.log(totalCost);


}

basketballEquipment(["365"]);