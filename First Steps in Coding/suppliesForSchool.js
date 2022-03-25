function suppliesForSchool(input) {

    let packagePens = Number(input[0]);
    let packageMarkers = Number(input[1]);
    let litersOfChem = Number(input[2]);
    let percentDiscount = Number(input[3]) / 100;

    let price = packagePens * 5.80 + packageMarkers * 7.20 +litersOfChem * 1.20;
    let discount = price * percentDiscount;
    let totalPrice = price - discount;
    
    console.log(totalPrice);
    

}

suppliesForSchool(["2", "3", "4", "25"]);
