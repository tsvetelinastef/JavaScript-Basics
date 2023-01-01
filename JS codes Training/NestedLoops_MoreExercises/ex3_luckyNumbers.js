function luckyNumbers(input) {
    let number = Number(input[0]);

    let numberA = 0;
    let numberB = 0;
    let numberC = 0;
    let numberD = 0;

    let res = "";

    for (let i = 1; i <= 9; i++) {
        for (let j = 1; j <= 9; j++) {
            for (let k = 1; k <= 9; k++) {
                for (let l = 1; l <= 9; l++) {
                    numberA = Number(i);
                    numberB = Number(j);
                    numberC = Number(k);
                    numberD = Number(l);
                    let sumA = numberA + numberB;
                    let sumB = numberC + numberD;
    // Щастливо число е 4-цифрено число, на което сбора от първите 
    //две цифри е равен на сбора от последните две.
                    if (sumA === sumB){
                        if (number % sumA === 0) {
         // Числото N трябва да се дели без остатък от сбора на първите
         // две цифри на "щастливото" число
                            res += `${numberA}${numberB}${numberC}${numberD} `;
                        }
                    }
                }
            }
        }
    }
    console.log(res); 
}

luckyNumbers(["3"]);
luckyNumbers(["7"]);
luckyNumbers(["24"]);