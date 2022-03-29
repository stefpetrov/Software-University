function timePlus15Minutes(input) {

    let hours = Number(input[0]);
    let minutes = Number(input[1]);

    let time = hours * 60 + minutes + 15
    let h = Math.floor(time / 60)
    let m = time % 60

    if (h>= 24) {
        h = 0
    } if(m <10) {
        console.log(`${h}:0${m}`)
    } else {
        console.log(`${h}:${m}`)
    }

    }




timePlus15Minutes(["12", "49"])