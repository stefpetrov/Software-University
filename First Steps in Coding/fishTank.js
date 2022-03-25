function fishTank(input) {

    let length = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);
    let percent = Number(input[3]);

    let tankVolumeInDm = length * width * height
    let tankVolumeInLiters = tankVolumeInDm / 1000
    let UsedSpace = tankVolumeInLiters * percent / 100

    let neededLiters = tankVolumeInLiters - UsedSpace

    console.log(neededLiters);

}

fishTank(["85", "75", "47", "17"])

