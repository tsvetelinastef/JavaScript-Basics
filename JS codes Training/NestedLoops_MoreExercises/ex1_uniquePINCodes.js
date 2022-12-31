function uniquePINCodes(input) {
    //let index = 0;
    //let firstNumber = Number(input[index++]);
    //let secondNumber = Number(input[index++]);
    //let thirdNumber = Number(input[index++]);

    let firstNumber = Number(input[0]); // четно число - even 
    let secondNumber = Number(input[1]); // просто число - prime number
    let thirdNumber = Number(input[2]);  // четно число - even

    let firstNum = 0;  //  upper limit of the first number
    let secondNum = 0;  // upper limit of the second number
    let tirdNum = 0;  // upper limit of the third number

    //if(firstNum % 2 === 0  && tirdNum % 2 === 0)

  // във всички кодове - първата цифра - 2 единственото възможно четно число
    for (let i = 2; i <= firstNumber; i++) {
        for (let j = 2; j <= 7; j++) {
            for (let k = 2; k <= thirdNumber; k++) {

                if (i % 2 === 0 && k % 2 === 0    && j <= secondNumber && secondNum % j === 0) {
                    if (j === 2 || j === 3 || j === 5 || j === 7) {  // прости числа - Първите няколко прости числа са: 2, 3, 5, 7, 11, 13,.... 
                        firstNum = Number(i); // i = 2, ne vlezna, i = 2, na 5 ne vlezna also, 
                        secondNum = Number(j); // j = 2, ne vlezna, j = 2, na 5 ne vlezna also, 
                        tirdNum = Number(k);  // k = 2, ne vlezna, k = 4,  na 5 ne vlezna also, 
                        console.log(`${firstNum} ${secondNum} ${tirdNum}`);
                        firstNum = 0;
                        secondNum = 0;
                        tirdNum = 0;
            // firstNum = Number(i); ... k = 6, j = 3, i = 2 .... 
            // k = 2, j = 3, i = 2 ---> i = 2, j = 3, k = 2
            // j = 3, ... k = 4 , ... i = 2, j = 3, k = 4
            // k =5   and  i = 2, k = 5 , j = 3 (ne vliza, skip - va go tova i otiva na 6 i otnovo skip - va)
            //  
                    }
                }
            }
        }
    }
}

uniquePINCodes(["3", "5", "5"]);
// 2 2 2
// 2 2 4
// 2 3 2
// 2 3 4
// 2 5 2
// 2 5 4
// Първото въведено число е 3, отговарящо за максималната стойност на първата цифра.
// Второто въведено число е 5, отговарящо за максималната стойност на втората цифра.
// Третото въведено число е 5, отговарящо за максималната стойността на третата цифра.
// Във всички трицифрени PIN кодове, които сме получили първата цифра ни е 2, защото това 
// е единственото възможно четно число.
// При втората цифра важи друго правило. Там трябва да подберем всички възможни прости 
// числа в диапазона от 2 до 7. В нашия случай тези числа са както следва 2, 2, 3, 3, 5, 5.
// При третата цифра важи правилото за четните числа и ако го спазваме, получаваме, че 
// възможните числа са: 2, 4, 2, 4, 2, 4.


//uniquePINCodes(["8", "2", "8"]);
// 2 2 2
// 2 2 4
// 2 2 6
// 2 2 8
// 4 2 2
// 4 2 4
// 4 2 6
// 4 2 8
// 6 2 2
// 6 2 4
// 6 2 6
// 6 2 8
// 8 2 2
// 8 2 4
// 8 2 6
// 8 2 8

