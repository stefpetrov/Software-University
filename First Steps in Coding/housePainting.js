function housePainting(input){
    let x = Number(input[0]);
    let y = Number(input[1]);
    let h = Number(input[2]);

    let backArea = x * x
    let frontArea = (x * x) - (2 * 1.2)
    let sideAreaLeft = (x * y) - (1.5 * 1.5);
    let sideArearight = (x * y) - (1.5 * 1.5);
    
    let greenArea = backArea + frontArea + sideAreaLeft +sideArearight;
    let greenPaint = greenArea / 3.4;

    let frontRoof = x * h / 2;
    let backRoof = x * h / 2;
    let rightRoof = x * y
    let leftRoof = x * y

    let redArea = frontRoof + backRoof + rightRoof + leftRoof
    let redPaint = redArea / 4.3

    console.log(greenPaint.toFixed(2));
    console.log(redPaint.toFixed(2));

}

housePainting(["10.25", "15.45", "8.88"]);