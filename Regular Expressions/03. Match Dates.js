function solve(text) {
  let regex = /\b(?<day>\d{2})([\.\-\/])(?<month>[A-Z][a-z]{2})\2(?<year>\d{4})\b/g;

  let validDate = regex.exec(text);
  let validDates = [];

  while (validDate !== null) {
    validDates.push(validDate);

    validDate = regex.exec(text);
  }

  for (let date of validDates) {
    console.log(
      `Day: ${date.groups.day}, Month: ${date.groups.month}, Year: ${date.groups.year}`);
  }
}

solve(
  "13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016"
);
