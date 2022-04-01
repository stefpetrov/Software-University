function onTimeFortheExam(input) {
  let examHour = Number(input[0]);
  let examMin = Number(input[1]);
  let arriveHour = Number(input[2]);
  let arriveMin = Number(input[3]);

  let examTotalMinutes = examHour * 60 + examMin;
  let arriveTotalMinutes = arriveHour * 60 + arriveMin;
  let diff = examTotalMinutes - arriveTotalMinutes;
  let diffInHours = Math.trunc(diff / 60);
  let diffInMin = Math.abs(diff % 60);

  if (diff >= 60) {
    if (diffInMin < 10) {
      console.log("Early");
      console.log(`${diffInHours}:0${diffInMin} hours before the start`);
    } else {
      console.log("Early");
      console.log(`${diffInHours}:${diffInMin} hours before the start`);
    }
  } else if (diff > 30) {
    console.log("Early");
    console.log(`${diffInMin} minutes before the start`);
  } else if (diff > 0) {
    console.log("On time");
    console.log(`${diffInMin} minutes before the start`);
  } else if (diff === 0) {
    console.log("On time");
  } else if (diff < 0 && diff <= -60) {
    if (diffInMin < 10) {
      console.log("Late");
      console.log(
        `${Math.abs(diffInHours)}:0${diffInMin} hours after the start`
      );
    } else {
      console.log("Late");
      console.log(
        `${Math.abs(diffInHours)}:${diffInMin} hours after the start`
      );
    }
  } else if (diff < 0 && diff > -60) {
    console.log("Late");
    console.log(`${diffInMin} minutes after the start`);
  }
}

onTimeFortheExam(["00", "00", "23", "55"]);
