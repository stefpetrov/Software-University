function areaOfFigures(input){

    let figure = (input[0]);
    let a = Number(input[1]);
    let h = Number(input[2]);

    if (figure === "square") {
        let s = a * a;
        console.log(s.toFixed(3));
    } else if( figure === "rectangle") {
        console.log((a * h).toFixed(3))
    } else if (figure === "circle") {
        console.log((Math.PI * a * a).toFixed(3))
    } else if (figure === "triangle") {
        console.log((a * h / 2).toFixed(3));
    }

}

areaOfFigures(["triangle", "4.5", "20"]);