function solve(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    let currentElementArr1 = arr1[i];
    let currentElementArr2;

    for (let j = 0; j < arr2.length; j++) {
      currentElementArr2 = arr2[j];

      if (currentElementArr1 === currentElementArr2) {
        console.log(currentElementArr1);
      }
    }
  }
}

solve(["S", "o", "f", "t", "U", "n", "i", " "],
      ["s", "o", "c", "i", "a", "l"]
 );
