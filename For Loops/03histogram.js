function histogram(input) {
  let index = 0;
  let n = Number(input[index]);
  index++;
  
  let p1Counter = 0;
  let p2Counter = 0;
  let p3Counter = 0;
  let p4Counter = 0;
  let p5Counter = 0;

  for (let i = 0; i < n; i++) {
    let numbers = input[index];
    index++;

    if (numbers < 200) {
      p1Counter++;
    } else if (numbers >= 200 && numbers < 400) {
      p2Counter++;
    } else if (numbers >= 400 && numbers < 600) {
      p3Counter++;
    } else if (numbers >= 600 && numbers < 800) {
      p4Counter++;
    } else if (numbers >= 800) {
      p5Counter++;
    }
  }
  console.log(((p1Counter / n) * 100).toFixed(2) + "%");
  console.log(((p2Counter / n) * 100).toFixed(2) + "%");
  console.log(((p3Counter / n) * 100).toFixed(2) + "%");
  console.log(((p4Counter / n) * 100).toFixed(2) + "%");
  console.log(((p5Counter / n) * 100).toFixed(2) + "%");
}

histogram(["7", "800", "801", "250", "199", "399", "599", "799"]);
