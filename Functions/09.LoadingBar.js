function loadingBar(num) {
  let percent = num;
  let countLoadedSymbols = percent / 10;
  let countRestSymbols = 10 - countLoadedSymbols;

  let stringOfSymbols = "";

  for (let i = 0; i < countLoadedSymbols; i++) {
    stringOfSymbols += "%";
  }
  for (let j = 0; j < countRestSymbols; j++) {
    stringOfSymbols += ".";
  }

  if (percent < 100) {
    console.log(`${percent}% [${stringOfSymbols}]`);
    console.log("Still loading...");
  } else {
    console.log("100% Complete!");
    console.log(`[${stringOfSymbols}]`);
  }
}
loadingBar(100);
