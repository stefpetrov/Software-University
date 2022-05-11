function dictionary(input) {
  let arrOfObjects = [];
  let finalArr = [];

  for (let elementAsJSON of input) {
    let obj = JSON.parse(elementAsJSON);
    arrOfObjects.push(obj);
  }

  for (let currentObj of arrOfObjects) {
    let newObject = {};
    newObject.name = Object.keys(currentObj).join(" ");
    newObject.defi = Object.values(currentObj).join(" ");
    let isAdded = false;
    for (let el of finalArr) {
      if (el.name === newObject.name) {
        el.defi = newObject.defi;
        isAdded = true;
        break;
      }
    }
    if (isAdded === false) {
      finalArr.push(newObject);
    }
  }

  let sortedArr = finalArr.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });

  for (let obj of sortedArr) {
    console.log(`Term: ${obj.name} => Definition: ${obj.defi}`);
  }
}

dictionary([
  '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
  '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
  '{"Bus":"A fuel-burning apparatus or container for heating water."}',
  '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
  '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}',
]);
