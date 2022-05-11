
  class Vehicle {
    constructor(type, model, parts, fuel) {
      this.type = type;  // "a"
      this.model = model;  // "b"
      this.parts = parts  // parts {engine:6, power:100}
      this.fuel = fuel;   // 200
      this.parts.quality = this.parts.engine * this.parts.power
      
    }
    drive(x) {  // 100
      return this.fuel = this.fuel - x;  // 200 - 100
    }
    
  }

  
  let parts = { engine: 6, power: 100 };
  let vehicle = new Vehicle('a', 'b', parts, 200);
  vehicle.drive(100);
  console.log(vehicle.fuel);
  console.log(vehicle.parts.quality);

