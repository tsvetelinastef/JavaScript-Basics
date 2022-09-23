/* Напишете функция, която получава две числа и принтира на конзолата, всички числа в диапазона, които се 
делят на 9 без остатък, както и тяхната сума. На първия ред отпечатайте сумата на числата, а на следващите
редове отговарящите на условието числа. */

function numbersDivisibleBy9(input) {
    let firstNumber = Number(input[0]);
    let secondNumber = Number(input[1]);

    let sum = 0;
    let output = "";
    for (let i = firstNumber; i <= secondNumber; i++) {
       // let text = firstNumber[i];

        if (i % 9 === 0) {
            sum += i;
            output += i + "\n";
        }
    }

    console.log(`The sum: ${sum}`);
    console.log(output);
}

numbersDivisibleBy9(["100", "200"]);
// The sum: 1683
// 108
// 117
// 126
// 135
// 144
// 153
// 162
// 171
// 180
// 189
// 198



