function solve(input) {
  let text = input.shift();

  let line = input.shift();

  while (line !== "Done") {
    let splitted = line.split(" ");
    let command = splitted.shift();

    if (command === "TakeOdd") {
      text = takeOdd(text);
      console.log(text);
    } else if (command === "Cut") {
      let startIndex = +splitted[0];
      let lengthToCut = +splitted[1];
      let endIndex = startIndex + lengthToCut;

      let firstPart = text.substring(0, startIndex);
      let lastPart = text.substring(endIndex);

      text = firstPart + lastPart;

      console.log(text);
    } else if (command === "Substitute") {
      let oldEl = splitted[0];
      let newEl = splitted[1];

      if (text.includes(oldEl)) {
        while (text.includes(oldEl)) {
          text = text.replace(oldEl, newEl);
        }
        console.log(text);
      } else {
        console.log("Nothing to replace!");
      }
    }

    line = input.shift();
  }
  console.log(`Your password is: ${text}`);

  function takeOdd(text) {
    text = text.split("");
    text = text.filter((el, index) => {
      if (index % 2 !== 0) {
        return el;
      }
    });
    return text.join("");
  }
}

solve([
  "up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
  "TakeOdd",
  "Cut 18 2",
  "Substitute ! ***",
  "Substitute ? .!.",
  "Done",
]);
