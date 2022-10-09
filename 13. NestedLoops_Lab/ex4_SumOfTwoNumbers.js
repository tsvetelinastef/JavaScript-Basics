/* Write function that checks all combinations
 of couple numbers on the interval from two
numbers. On the exit prints, which is the first
combination which sum of numbers is = of the
magical number. If there isn't one combination
like the condition prints message that there  
isn't find one. */

function sumOfTwoNumbers(input) {
    let startInterval = Number(input[0]);
    let endfInterval = Number(input[1]);
    let magicalNumber = Number(input[2]);

    let combinationCounter = 0;
    let isFinish = false;

    for (let i = startInterval; i <= endfInterval; i++) {
        for (let k = startInterval; k <= endfInterval; k++) {
            let result = i + k;
            combinationCounter++;
            if (result === magicalNumber) {
                console.log(`Combination N:${combinationCounter} (${i} + ${k} = ${magicalNumber})`);
                isFinish = true;
                break;
            }
        }
        if (isFinish) {
            break;
        }
    }
    if (!isFinish) {
        console.log(`${combinationCounter} combinations - neither equals ${magicalNumber}`);
    }
}

sumOfTwoNumbers(["1", "10", "5"]);