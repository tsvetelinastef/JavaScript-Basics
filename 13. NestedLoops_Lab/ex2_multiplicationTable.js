/* Print on console multiplication tableчислата for numbers
from 1 to 10 in the format: 
"{first number} * {second number} = {result}".  */


function multiplicationTable(){

    for (let i = 1; i <= 10; i++) {
        for (let a = 1; a <= 10; a++) {
            console.log(`${i} * ${a} = ${i * a}`);
        }   
    }
}

multiplicationTable();