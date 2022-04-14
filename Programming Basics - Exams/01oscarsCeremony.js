function oscarsCeremony(input) {

let rent = Number(input[0]);

let statue = rent * 0.7
let cataring = statue * 0.85
let sound = cataring / 2

let totalSum = (rent + statue + cataring + sound).toFixed(2);

console.log(totalSum)
}

oscarsCeremony([3500])