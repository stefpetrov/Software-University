function softUniReception(arr) {
  let firstEmployPerHour = Number(arr[0]);
  let secondEmployPerHour = Number(arr[1]);
  let thirdEmployPerHour = Number(arr[2]);
  let studentsCount = Number(arr[3]);

  let totalCapacityPerHour =
    firstEmployPerHour + secondEmployPerHour + thirdEmployPerHour;

  let helpedStudents = 0;
  let hourCounter = 0;

  while (helpedStudents < studentsCount) {
    hourCounter++;
    if (hourCounter % 4 !== 0) {
      helpedStudents += totalCapacityPerHour;
    } else {
      continue;
    }
  }
  if (helpedStudents >= studentsCount) {
    console.log(`Time needed: ${hourCounter}h.`);
  }
}

softUniReception(["3", "2", "5", "40"]);
