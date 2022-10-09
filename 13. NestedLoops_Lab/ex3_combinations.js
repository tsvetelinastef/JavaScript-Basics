/* Write a function that calculates how many solutions in the 
natural numbers (including zero) there are the equation: 


// natural numbers --> the positive integers (whole numbers) 
// 1, 2, 3, etc., and sometimes zero as well. */

function combinations(input) {
    let n = Number(input[0]);
    let validCombinationsCount = 0;

    for (let i = 0; i <= n; i++) {
        for (let k = 0; k <= n; k++) {
            for (let a = 0; a <= n; a++) {
                let sumNumbers = i + k + a;
                if(sumNumbers === n){
                    validCombinationsCount++;
                }
              
            }
        }
    }
    console.log(validCombinationsCount);
}

combinations(["25"]);
combinations(["20"]);
combinations(["5"]);

