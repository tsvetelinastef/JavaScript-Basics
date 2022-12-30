function uniquePINCodes(input) {
    //let index = 0;
    //let firstNumber = Number(input[index++]);
    //let secondNumber = Number(input[index++]);
    //let thirdNumber = Number(input[index++]);

    let firstNumber = Number(input[0]);
    let secondNumber = Number(input[1]);
    let thirdNumber = Number(input[2]);

    let firstNum = 0;
    let secondNum = 0;
    let tirdNum = 0;

    //if(firstNum % 2 === 0  && tirdNum % 2 === 0)
    for (let i = 2; i <= firstNumber; i++) {
        for (let j = 2; j <= 7; j++) {
            for (let k = 2; k <= thirdNumber; k++) {
                if (i % 2 == 0 && k % 2 == 0 && j <= secondNumber && secondNum % j == 0) {
                    if (j == 2 || j == 3 || j == 5 || j == 7) {
                        firstNum = Number(i);
                        secondNum = Number(j);
                        tirdNum = Number(k);
                        console.log(`${firstNum} ${secondNum} ${tirdNum}`);
                        firstNum = 0;
                        secondNum = 0;
                        tirdNum = 0;
                    }
                }
            }
        }
    }
}

//uniquePINCodes(["3", "5", "5"]);
uniquePINCodes(["8", "2", "8"]);
