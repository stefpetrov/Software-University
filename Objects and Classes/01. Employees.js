function employees(arr) {
  
    let employ = {
    name: "stefan",
    personalNumber: 20,
  };

  for (let i = 0; i < arr.length; i++) {
    let currentName = arr[i];
    let currentNumber = currentName.length;

    employ.name = currentName;
    employ.personalNumber = currentNumber;

    console.log(`Name: ${employ.name} -- Personal Number: ${employ.personalNumber}`);
  }
}

employees([
  "Silas Butler",
  "Adnaan Buckley",
  "Juan Peterson",
  "Brendan Villarreal",
]);
