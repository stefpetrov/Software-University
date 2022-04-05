function trekkingMania(input) {
  let index = 0;
  let countOfGroups = Number(input[index]);
  index++;

  let climbersInGroup;
  let climbersForEverest = 0;
  let climbersForK2 = 0;
  let climbersForKilimazharo = 0;
  let climbersForMonblan = 0;
  let climbersForMusala = 0;

  for (i = 0; i < countOfGroups; i++) {
    climbersInGroup = Number(input[index]);
    index++;

    if (climbersInGroup >= 41) {
      climbersForEverest += climbersInGroup;
    } else if (climbersInGroup >= 26) {
      climbersForK2 += climbersInGroup;
    } else if (climbersInGroup >= 13) {
      climbersForKilimazharo += climbersInGroup;
    } else if (climbersInGroup >= 6) {
      climbersForMonblan += climbersInGroup;
    } else {
      climbersForMusala += climbersInGroup;
    }
  }
  let totalClimbers = climbersForEverest + climbersForK2 + climbersForKilimazharo + climbersForMonblan + climbersForMusala;

  console.log(((climbersForMusala / totalClimbers) * 100).toFixed(2) + "%");
  console.log(((climbersForMonblan / totalClimbers) * 100).toFixed(2) + "%");
  console.log(((climbersForKilimazharo / totalClimbers) * 100).toFixed(2) + "%");
  console.log(((climbersForK2 / totalClimbers) * 100).toFixed(2) + "%");
  console.log(((climbersForEverest / totalClimbers) * 100).toFixed(2) + "%");
}

trekkingMania(["5", "25", "41", "31", "250", "6"]);
