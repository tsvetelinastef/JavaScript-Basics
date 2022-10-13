/* Write a function that receives a whole number n and prints 
pyramid of numbers*/

function numberPyramids(input) {
    let n = Number(input[0]);

    /* В отделен брояч пазете, колко числа сте отпечатали до момента
     (и кое е текущото число). Направете променлива, която да съдържа
      текущия ред, който трябва да отпечатате. Когато стигнете n, 
      излезте от двата вложени цикъла с break. За да излезем и от
      двата цикъла трябва да използваме оператора break и в двата.
      За целта ще направим булева променлива, която да проверява,
      дали сме излезнали от вътрешния. 
      Отидете в началото на програмата и инициализирайте следните
      три променливи */
    let current = 1;
    let isBigger = false;
    let printCurrentLine = "";

    for (let rows = 1; rows <= n; rows++) {   // колко реда 
        for (let cols = 1; cols <= rows; cols++) {
            // колко числа се принтират на съответния ред 


            // Във вътрешния for цикъл направете проверка, дали променливата
            // current е станала по-голяма от n. 
            //Ако е, променете стойността на булевата променлива и излезте от
            // вътрешния цикъл

            if (current > n) {
                isBigger = true;
                break;
            }
            // След проверката, добавете в променливата printCurrentLine 
            //стойността на current в желания формат и увеличете с 1 
            //променливата current. Ако сте излезнали от цикъла няма да се 
            //стигне до добавяне на число към printCurrentLine!
            printCurrentLine += current + " ";
            current++;
        }
        // В тялото на външния цикъл, отпечатайте стойността на
        // printCurrentLine и направете проверка, дали трябва да излезем
        // и от него. Програмата ви трябва да изглежда по следния начин:
        console.log(printCurrentLine);
        printCurrentLine = "";
        if (isBigger) {
            break;
        }
    }
}

numberPyramids(["7"]);
numberPyramids(["12"]);
numberPyramids(["15"]);

