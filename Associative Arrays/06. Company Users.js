function solve(input) {
  let companyUsers = {};

  for (let line of input) {
    let userList = [];

    let tokens = line.split(" -> ");
    let [company, userID] = tokens;

    if (!companyUsers.hasOwnProperty(company)) {
      companyUsers[company] = [];
      companyUsers[company].push(userID);
    } else {
      if (!companyUsers[company].includes(userID))
        companyUsers[company].push(userID);
    }
  }
  let sorted = Object.keys(companyUsers).sort((a, b) => a.localeCompare(b));

  for (let company of sorted) {
    console.log(`${company}`);
    let separated = companyUsers[company].join("\n-- ");
    console.log("-- " + separated);
  }
}

solve([
  "SoftUni -> AA12345",
  "SoftUni -> CC12344",
  "Lenovo -> XX23456",
  "SoftUni -> AA12345",
  "Movement -> DD11111",
]);
