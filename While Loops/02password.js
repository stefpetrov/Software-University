function password(input) {
  let index = 0;
  let username = input[index];
  index++;
  let password = input[index];
  index++;

  let currentEntry = input[index];
  index++;

  while (currentEntry !== password) {
    currentEntry = input[index];
    index++;
  }

  console.log(`Welcome ${username}!`);
}

password(["Gosho", "secret", "secret"]);
