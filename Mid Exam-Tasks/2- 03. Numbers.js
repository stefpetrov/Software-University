function numbers(input) {
  let arr = input.split(" ").map(Number);

  let sum = 0;
  let counter = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    counter++;
  }

  let average = sum / counter;
  let newArr = [];
  let top5Counter = 0;

  for (let element of arr) {
    if (element > average) {
      newArr.push(element);
      top5Counter++;
    }
  }
  let descendedOrderedArr = newArr.sort((a, b) => {
    return b - a;
  });
  let countOfNeededElements = 5; // it is defined in the task
  if (descendedOrderedArr.length === 0) {
    console.log("No");
  }
  console.log(descendedOrderedArr.splice(0, countOfNeededElements).join(" "));
}

numbers("1");
