function hospital(input) {
  let index = 0;
  let days = Number(input[index]);
  index++;
  let examined = 0;
  let noExamined = 0;
  let examinedCounter = 0;
  let noExaminedCounter = 0;
  let doctors = 7;

  for (i = 1; i <= days; i++) {
    examined = Number(input[i]);

    if (i % 3 === 0 && noExaminedCounter > examinedCounter) {
      doctors++;
    }

    if (examined <= doctors) {
      examinedCounter += examined;
    } else {
      noExamined = examined - doctors;
      noExaminedCounter += noExamined;
      examinedCounter += doctors;
    }
  }

  console.log(`Treated patients: ${examinedCounter}.`);
  console.log(`Untreated patients: ${noExaminedCounter}.`);
}
hospital(["6", "25", "25", "25", "25", "25", "2"]);
