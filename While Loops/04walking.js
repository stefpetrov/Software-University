function walking(input) {
  let index = 0;
  let command = input[index];
  index++;
  let totalSteps = 0;
  let diff;

  while (command !== "Going home") {
    command = Number(command);

    totalSteps += command;

    if (totalSteps >= 10000) {
      diff = Math.abs(totalSteps - 10000);
      console.log(`Goal reached! Good job!`);
      console.log(`${diff} steps over the goal!`);
      break;
    }

    command = input[index];
    index++;
  }
  
  if (command === "Going home") {
    command = Number(input[index]);
    index++;
    totalSteps += command;

    if (totalSteps >= 10000) {
      diff = Math.abs(10000 - totalSteps);
      console.log(`Goal reached! Good job!`);
      console.log(`${diff} steps over the goal!`);
    } else {
      diff = Math.abs(10000 - totalSteps);
      console.log(`${diff} more steps to reach goal.`);
    }
  }
}

walking(["1500", "3000", "250", "1548", "2000", "Going home", "2000"]);
