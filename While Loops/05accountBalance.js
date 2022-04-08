function accountBalance(input) {
  let index = 0;

  let command = input[index];
  index++
  let currentBalance = 0;

  while (command !== "NoMoreMoney") {
    command = Number(input[index]);

    if (command > 0) {
      currentBalance += command;

      console.log(`Increase: ${command.toFixed(2)}`);
    } else if (command < 0) {
      console.log(`Invalid operation!`);
      break;
    }

    command = input[index];
    index++;
  }
  console.log(`Total: ${currentBalance.toFixed(2)}`);
}
accountBalance(["5.51", "69.42", "100", "NoMoreMoney"]);
