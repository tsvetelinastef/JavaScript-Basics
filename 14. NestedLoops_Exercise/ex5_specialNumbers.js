/* Да се напише програма, която чете едно цяло число N, въведено от
потребителя, и генерира всички възможни "специални" числа от 
1111 до 9999. За да бъде "специално" едно число, то трябва да
отговаря на следното условие: 
• N да се дели на всяка една от неговите цифри без остатък.
Пример: при N = 16, 2418 е специално число:
• 16 / 2 = 8 без остатък
• 16 / 4 = 4 без остатък
• 16 / 1 = 16 без остатък
• 16 / 8 = 2 без остатък
Вход
Входът се чете от конзолата и се състои от едно цяло число в 
интервала [1…600000]
Изход
На конзолата трябва да се отпечатат всички "специални" числа,
 разделени с интервал
///////////////////////////////////////////////////////////////////
To write a program that reads a single integer N entered by
the user, and increments all possible "special" numbers by
1111 to 9999. For a number to be "special" it must meets the 
following condition:
• N to be divided by each of its digits without a remainder.
Example: for N = 16, 2418 is a special number:
• 16 / 2 = 8 with no remainder
• 16 / 4 = 4 with no remainder
• 16 / 1 = 16 with no remainder
• 16 / 8 = 2 with no remainder
Login
The input is read from the console and consists of a single 
integer crange [1…600000]
Exit
All "special" numbers should be printed on the console, space
 separation  */
function specialNumbers(input){
    let n = Number(input[0]);
    let result = " ";

    for (let a = 1; a <= 9; a++) {
       for (let b = 1; b <= 9; b++){
            for (let c = 1; c <= 9; c++) {
                for (let d = 1; d <= 9; d++) {
                    if (n % a === 0 && n % b === 0 && n % c === 0 && n % d === 0) {
                        result += ` ${a}${b}${c}${d}`;
                    }
                }
            }      
       }
    }
    console.log(result);
} 

specialNumbers(["3"]);
//specialNumbers(["11"]);
//specialNumbers(["16"]);

