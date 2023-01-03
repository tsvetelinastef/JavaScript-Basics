function sumTwoNumbers(input) {
    let startInterval = Number(input[0]);
    let endInterval = Number(input[1]);
    let magicalNumber = Number(input[2]);
    let isFound = false;
    let counter = 0;

    for (let i = startInterval; i <= endInterval; i++) {
        for (let k = startInterval; k <= endInterval; k++) {
            counter++;
            let result = i + k;
            if (result === magicalNumber) {
                console.log(`Combination N:${counter} (${i} + ${k} = ${result})`);
                isFound = true;
                break;
            }
        }

        if (isFound) {
            break;
        }
    }
    
    if (!isFound) {
        console.log(`${counter} combinations - neither equals ${magicalNumber}`);
    }
}

sumTwoNumbers(["1", "10", "5"]);
sumTwoNumbers(["88", "888", "1000"]);
sumTwoNumbers(["23", "24", "20"]);
sumTwoNumbers(["88", "888", "2000"]);