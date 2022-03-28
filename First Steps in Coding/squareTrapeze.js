function squareTrapeze(input) {

    let b1 = Number(input[0]);
    let b2 = Number(input[1]);
    let h = Number(input[2]);

    let square = (b1 + b2) * h / 2;
    

    console.log(square.toFixed(2));   
}

squareTrapeze(["8", "13", "7"]);


