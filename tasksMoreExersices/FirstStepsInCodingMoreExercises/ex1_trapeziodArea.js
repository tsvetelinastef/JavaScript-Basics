function trapeziodArea(input){
    let numberOne = Number(input[0]);
    let numberTwo = Number(input[1]);
    let numberThree = Number(input[2]);

    let area = (numberOne + numberTwo) * numberThree / 2;
    console.log(area.toFixed(2));
}

trapeziodArea(["8", "13", "7"]);