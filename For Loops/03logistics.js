function logistics(input) {
  let index = 0;
  let shipments = Number(input[index]);
  index++;

  let shimpmentWeight;
  let price;
  let totalShipmentWeight = 0;
  let totalPrice = 0;
  let busCounter = 0;
  let trainCounter = 0;
  let truckCounter = 0;

  for (i = 0; i < shipments; i++) {
    shimpmentWeight = Number(input[index]);
    index++;
    totalShipmentWeight += shimpmentWeight;

    if (shimpmentWeight >= 12) {
      trainCounter += shimpmentWeight;
      price = shimpmentWeight * 120;
    } else if (shimpmentWeight >= 4) {
      truckCounter += shimpmentWeight;
      price = shimpmentWeight * 175;
    } else {
      busCounter += shimpmentWeight;
      price = shimpmentWeight * 200;
    }
    totalPrice += price;
  }
  console.log((totalPrice / totalShipmentWeight).toFixed(2));
  console.log(((busCounter / totalShipmentWeight) * 100).toFixed(2) + "%");
  console.log(((truckCounter / totalShipmentWeight) * 100).toFixed(2) + "%");
  console.log(((trainCounter / totalShipmentWeight) * 100).toFixed(2) + "%");
}

logistics(["4", "1", "5", "16", "3"]);
