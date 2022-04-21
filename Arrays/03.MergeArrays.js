function solve(arr1, arr2) {
  let newArr = [];
  let newElement;
  for (let i = 0; i < arr1.length; i++) {
    let currentElementArr1 = arr1[i];
    let currentElementArr2 = arr2[i];

    if (i % 2 === 0) {
      currentElementArr1 = Number(currentElementArr1);
      currentElementArr2 = Number(currentElementArr2);
      newElement = currentElementArr1 + currentElementArr2;
      newArr.push(newElement);
    }
    if (i % 2 !== 0) {
      currentElementArr1 = currentElementArr1.toString();
      currentElementArr2 = currentElementArr2.toString();
      newElement = currentElementArr1 + currentElementArr2;
      newArr.push(newElement);
    }
  }
  console.log(newArr.join(" - "));
}

solve(["5", "15", "23", "56", "35"], ["17", "22", "87", "36", "11"]);
