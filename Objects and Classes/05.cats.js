function cats(arr) {
  class Cat {
    constructor(name, age) {
      this.name = name, 
      this.age = age,
      this.meow = () => console.log(`${this.name}, age ${this.age} says Meow`);
    }
  }
  let cats = []
  
  for (let i = 0; i < arr.length; i++) {
    let currentData = arr[i].split(" ");

    // let catName = currentData[0];
    // let age = currentData[1];
    let currentCat = new Cat(currentData[0], currentData[1]);
    cats.push(currentCat)
  }

  cats.map(c => c.meow())
}

cats(["Mellow 2", "Tom 5"]);
