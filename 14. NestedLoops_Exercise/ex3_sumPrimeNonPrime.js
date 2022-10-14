/* Напишете функция, която получава масив с цели числа в диапазона
от -2,147,483,648 до 2,147,483,647, докато не се получи команда
"stop". Да се намери сумата на всички въведени прости и сумата на
всички въведени непрости числа. Тъй като по дефиниция от 
математиката отрицателните числа не могат да бъдат прости, ако на
входа се подаде отрицателно число да се изведе следното съобщение
"Number is negative.". В този случай въведено число се игнорира и 
не се прибавя към нито една от двете суми, а програмата продължава
своето изпълнение, очаквайки въвеждане на следващо число. 
На изхода да се отпечатат на два реда двете намерени суми в 
следния формат:
"Sum of all prime numbers is: {prime numbers sum}"
"Sum of all non prime numbers is: {nonprime numbers sum}" 

================================================================
Write a function that receives an array of integers in the range
from -2,147,483,648 to 2,147,483,647 until a command is received
"stop". To find the sum of all entered primes and the sum of
all non-prime numbers entered. Since by definition of
mathematics negative numbers cannot be prime if the
input a negative number to display the following message
"Number is negative.". In this case, an entered number is ignored and
it is not added to either sum, and the program continues
its execution, waiting for the next number to be entered.
On the output, print the two sums found in two lines
following format:
"Sum of all prime numbers is: {prime numbers sum}"
"Sum of all non prime numbers is: {nonprime numbers sum}"  */

function sumPrimeNonPrime(input){
    let index = 0;
    let command = input[index];
    index++;

    let sumPrimeNumber = 0;
    let sumNonPrimeNumber = 0;

    while (command !== "stop") {
        let num = Number(command);
        if(num < 0){
            console.log("Number is negative.");
            command = input[index];
            index++;
            continue;
        }

        if(num === 1){
            sumPrimeNumber += 1;
            command = input[index];
            index++;
            continue;
        }

        let isPrime = true;

        for (let i = 2; i < num; i++) {
           if (num % i === 0) {
            sumNonPrimeNumber += num;
             isPrime = false;
             break;
           }   
        }

        if (isPrime) {
            sumPrimeNumber += num;
        }
        command = input[index];
        index++;
    }

    console.log(`Sum of all prime numbers is: ${sumPrimeNumber}`);
    console.log(`Sum of all non prime numbers is: ${ sumNonPrimeNumber}`);
} 

sumPrimeNonPrime(["3", "9", "0", "7", "19", "4", "stop"]);
//sumPrimeNonPrime(["30", "83", "33", "-1", "20", "stop"]);
//sumPrimeNonPrime(["0", "-9", "0", "stop"]);
