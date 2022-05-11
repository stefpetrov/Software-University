function towns(input) {
  
    for (let element of input) {
    let tokens = element.split(" | ");

    let town = tokens[0];
    let latitude = +tokens[1];
    let longitude = +tokens[2];

    let city = {
      town,
      latitude: latitude.toFixed(2),
      longitude: longitude.toFixed(2),
    };
    console.log(city);
  }
}

towns(["Sofia | 42.696552 | 23.32601", "Beijing | 39.913818 | 116.363625"]);
