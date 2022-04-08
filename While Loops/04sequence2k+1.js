function sequence2k1(input) {
  let index = 0;
  let endNum = Number(input[index]);

  let startNum = 1;

  while (startNum <= endNum) {
    console.log(startNum);

    startNum = startNum * 2 + 1;
  }
}
sequence2k1(["17"]);
