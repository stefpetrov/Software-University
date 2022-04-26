function distinctArray(arr) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (!newArr.includes(arr[i])) {
      newArr.push(arr[i]);
    }
  }
  console.log(newArr.join(" "));
}

distinctArray([20, 8, 12, 13, 4, 4, 8, 5]);
