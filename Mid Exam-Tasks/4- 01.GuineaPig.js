function guineaPig(input) {
  let food = +input.shift() * 1000;
  let hay = +input.shift() * 1000;
  let cover = +input.shift() * 1000;
  let weight = +input.shift() * 1000;

  for (let i = 1; i <= 30; i++) {
    let day = i;
    food -= 300;

    if (day % 2 === 0) {
      hay -= food * 0.05;
    }
    if (day % 3 === 0) {
      cover -= weight / 3;
    }

    if (food <= 0 || hay <= 0 || cover <= 0) {
      console.log("Merry must go to the pet store!");
      return;
    }
  }
  console.log(
    `Everything is fine! Puppy is happy! Food: ${(food / 1000).toFixed(
      2
    )}, Hay: ${(hay / 1000).toFixed(2)}, Cover: ${(cover / 1000).toFixed(2)}.`
  );
}
guineaPig(["9",
"5",
"5.2",
"1"]);
