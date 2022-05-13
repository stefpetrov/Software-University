function solve(input) {
  let Invitationlist = [];
  let guestToCome = [];

  let command = input.shift();

  while (command !== "PARTY") {
    Invitationlist.push(command);
    command = input.shift();
  }

  for (let i = 0; i < input.length; i++) {
    guestToCome.push(input[i]);
  }

  let arr = [];

  for (let guest of Invitationlist) {
    let listAsObj = {};
    listAsObj.name = guest;
    if (guest[0] == Number(guest[0])) {
      listAsObj.category = "vip";
    } else {
      listAsObj.category = "regular";
    }

    arr.push(listAsObj);
  }
  for (let commingGuest of guestToCome) {
    for (let guestInList of arr) {
      if (guestInList.name === commingGuest) {
        let index = arr.indexOf(guestInList);
        if (index >= 0) {
          arr.splice(index, 1);
          break;
        }
      }
    }
  }
  let finalArrVip = [];
  let finalArrRegular = [];
  let countNoComming = arr.length;
  for (let nonCommingGuest of arr) {
    if (nonCommingGuest.category === "vip") {
      finalArrVip.push(nonCommingGuest.name);
    } else {
      finalArrRegular.push(nonCommingGuest.name);
    }
  }
  console.log(countNoComming);

  finalArrVip.forEach((el) => console.log(el));
  finalArrRegular.forEach((el) => console.log(el));
}

solve([
  "7IK9Yo0h",
  "7IK9Yo0h",
  "7IK9Yo0h",
  "9NoBUajQ",
  "Ce8vwPmE",
  "SVQXQCbc",
  "tSzE5t0p",
  "PARTY",
  "7IK9Yo0h",
  "9NoBUajQ",
  "Ce8vwPmE",
  "SVQXQCbc",
]);
