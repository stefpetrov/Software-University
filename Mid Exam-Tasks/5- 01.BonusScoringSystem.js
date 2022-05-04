function bonusScoringSystem(input) {
  let numberOfStudents = +input.shift();
  let courseLectures = +input.shift();
  let additionalBonus = +input.shift();

  let maxAttendance = 0;
  let finalBonus = 0;

  for (let elements of input) {
    let attendance = +elements;

    if (attendance > maxAttendance) {
      maxAttendance = attendance;
    }
    currentlBonus = (maxAttendance / courseLectures) * (5 + additionalBonus);
    if (currentlBonus > finalBonus) {
      finalBonus = currentlBonus;
    }
  }

  console.log(`Max Bonus: ${Math.ceil(finalBonus)}.`);
  console.log(`The student has attended ${maxAttendance} lectures.`);
}

bonusScoringSystem([
  "10",
  "30",
  "14",
  "8",
  "23",
  "27",
  "28",
  "15",
  "17",
  "25",
  "26",
  "5",
  "18",
]);
