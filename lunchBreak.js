function lunchBreak(input) {

    let movieName = input[0];
    let lenghtEpisode = Number(input[1]);
    let lenghtBreak = Number(input[2]);

    let foodTime = lenghtBreak * 1 / 8 ;
    let restTime = lenghtBreak  * 1 / 4 ;
    let timeForMovie = lenghtBreak - foodTime - restTime
    let diffTime = Math.abs(timeForMovie - lenghtEpisode)

    if (timeForMovie >= lenghtEpisode) {
    console.log(`You have enough time to watch ${movieName} and left with ${Math.ceil(diffTime)} minutes free time.`)
    } else {
        console.log(`You don't have enough time to watch ${movieName}, you need ${Math.ceil(diffTime)} more minutes.`)
    }
}

lunchBreak(["Teen Wolf",
"48",
"60"])