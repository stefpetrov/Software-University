function graduation(input) {
  let index = 0;
  let name = input[index];
  index++;
  let grade = Number(input[index]);
  index++
  let klas = 0
  let totalGrade = 0;
  let poorCounter = 0;

  while (klas < 12) {
  

    if (grade >= 4) {
      klas++;
      totalGrade += grade;
    } else if (grade < 4) {
      totalGrade += grade;
      poorCounter++;
      
    }
    if (poorCounter > 1) {
      klas++
      console.log(`${name} has been excluded at ${klas} grade`);
      break;
    }

    if (klas > 11) {
      console.log(`${name} graduated. Average grade: ${(totalGrade / klas).toFixed(2)}`); 
      break
    }

    grade = Number(input[index]);
    index++;
    
  }
}

graduation(["Mimi", 
"5",
"6",
"5",
"6",
"5",
"6",
"6",
"2",
"3"])