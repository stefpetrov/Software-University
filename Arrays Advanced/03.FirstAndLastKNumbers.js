function firstAndLastKNums(arr) {
  let newArr = arr.slice(1);
  let firstArr = [];
  let lastArr = [];

  let k = arr[0];
  let counter = 0;

  for (let element of newArr) {
    counter++;
    if (counter <= k) {
      firstArr.push(element);
    }
  }

  for (let i = newArr.length - k; i < newArr.length; i++) {
    lastArr.push(newArr[i]);
  }
  console.log(firstArr.join(" "));
  console.log(lastArr.join(" "));
}

firstAndLastKNums([3, 6, 7, 8, 9]);
