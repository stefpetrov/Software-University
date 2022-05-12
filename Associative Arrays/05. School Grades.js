// wrong task in judge!!!

function solve(input) {
  let schoolGrades = new Map();

  for (let line of input) {
    let tokens = line.split(" ");

    let name = tokens.shift();
    let grades = tokens.map(Number);

    if (!schoolGrades.has(name)) {
      schoolGrades.set(name, grades);
    } else {
      let currentGrades = schoolGrades.get(name);

      for (let grade of grades) {
        currentGrades.push(grade);
      }
    }
  }

  let sorted = Array.from(schoolGrades).sort((a, b) => a[0].localeCompare(b[0]));

  for (let kvp of sorted) {
    let name = kvp[0];
    let grade = kvp[1].reduce((sum, el) => sum + el);
    let average = grade / kvp[1].length;

    console.log(`${name}: ${average.toFixed(2)}`);
  }
}

solve(["Lilly 4 6 6 5", "Tim 5 6", "Tammy 2 4 3", "Tim 6 6"]);
