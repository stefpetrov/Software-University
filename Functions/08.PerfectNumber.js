function perfectNumber(num) {
  let sumOfDevisors = 0;

  function isPerfect(n) {
    for (let i = 1; i < n; i++) {
      let devisor = i;

      if (n % devisor === 0) {
        sumOfDevisors += devisor;
      }
    }
    if (sumOfDevisors === n) {
      return true;
    } else {
      return false;
    }
  }
  if (isPerfect(num)) {
    console.log("We have a perfect number!");
  } else {
    console.log("It's not so perfect.");
  }
}

perfectNumber(1236498);
