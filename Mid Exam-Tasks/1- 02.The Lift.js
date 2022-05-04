function theLift(input) {
  let countOfWaitingPeople = Number(input.shift());
  let countToSeat = countOfWaitingPeople;

  let wagons = input.shift().split(" ").map(Number);

  let wagonsCount = wagons.length;

  let sumOfPeopleInLift = 0;
  let sumOfPeopleBeforeStart = 0;
  for (const iterator of wagons) {
    sumOfPeopleBeforeStart += iterator;
  }

  for (let i = 0; i < wagonsCount; i++) {
    sumOfPeopleInLift += wagons[i];
    if (wagons[i] < 4 && countOfWaitingPeople > 0) {
      let freeSpaceInWagon = 4 - wagons[i];
      wagons[i] += countOfWaitingPeople;
      if (wagons[i] > 4) {
        wagons[i] = 4;
      }
      sumOfPeopleInLift += freeSpaceInWagon;
      countOfWaitingPeople -= freeSpaceInWagon;
    }
  }
  let capacity = 0;
  for (let i = 0; i < wagons.length; i++) {
    capacity += 4;
  }
  let totalSumInTrain = 0;
  for (let element of wagons) {
    totalSumInTrain += element;
  }

  if (countOfWaitingPeople > 0) {
    console.log(
      `There isn't enough space! ${countOfWaitingPeople} people in a queue!`
    );
    console.log(`${wagons.join(" ")}`);
  } else if (totalSumInTrain < capacity) {
    console.log(`The lift has empty spots!`);
    console.log(`${wagons.join(" ")}`);
  }
  if (capacity === sumOfPeopleBeforeStart + countToSeat) {
    console.log(`${wagons.join(" ")}`);
  }
}

theLift(["0", "4 4 3"]);
