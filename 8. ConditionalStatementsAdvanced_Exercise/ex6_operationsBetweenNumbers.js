function operationsBetweenNumbers(input) {
    let numberOne = Number(input[0]);
    let numberTwo = Number(input[1]);
    let operator = input[2];

    let result = 0;
    switch (operator) {
        case "+":
            let result = numberOne + numberTwo;
             if (result % 2 === 0) {
                 console.log(`${numberOne} ${operator} ${numberTwo} = ${result} - even`);
             } else {
                 console.log(`${numberOne} ${operator} ${numberTwo} = ${result} - odd`);
             } 
            break;

        case "-":
            let divide = numberOne - numberTwo;
             if (divide % 2 === 0) {
                 console.log(`${numberOne} ${operator} ${numberTwo} = ${divide} - even`);
             } else {
                 console.log(`${numberOne} ${operator} ${numberTwo} = ${divide} - odd`);
             }
            break;

        case "*":
            let multiplication = numberOne * numberTwo;
            if (multiplication % 2 === 0) {
                 console.log(`${numberOne} ${operator} ${numberTwo} = ${multiplication} - even`);
             } else {
                 console.log(`${numberOne} ${operator} ${numberTwo} = ${multiplication} - odd`);
             } 
            break;

        case "/":
            if (numberTwo === 0) {
                console.log(`Cannot divide ${numberOne} by zero`);
            } else {
                let result = numberOne / numberTwo;
                console.log(`${numberOne} ${operator} ${numberTwo} = ${result.toFixed(2)}`);
            }
            break;

        case "%":
            if (numberTwo === 0) {
                console.log(`Cannot divide ${numberOne} by zero`);
            } else {
                let result = numberOne % numberTwo;
                console.log(`${numberOne} ${operator} ${numberTwo} = ${result}`);
            }

            break;
    }

}

//operationsBetweenNumbers(["10", "12", "+"]);
//operationsBetweenNumbers(["123", "12", "/"]);
//operationsBetweenNumbers(["112", "0", "/"]);
//operationsBetweenNumbers(["10", "1", "-"]);
//operationsBetweenNumbers(["10", "3", "%"]);
//operationsBetweenNumbers(["10", "0", "%"]);
operationsBetweenNumbers(["7", "3", "*"]);


  //if (operator === "+" || operator === "-" || operator === "*") {
      //  if (result % 2 === 0) {
        //    console.log(`${numberOne} ${operator} ${numberTwo} = ${result} - even`);
       // } else {
        //    console.log(`${numberOne} ${operator} ${numberTwo} = ${result} - odd`);
       // }
    //}