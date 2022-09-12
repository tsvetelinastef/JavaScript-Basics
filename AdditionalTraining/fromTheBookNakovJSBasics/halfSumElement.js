function halfSumElement(input) {
    let n = Number(input[0]);
    let max = Number.NEGATIVE_INFINITY;

    let sum = 0;

    for (let i = 1; i <= n; i++) {
        let num = Number(input[i]);
        if (num > max) {
            max = num;
        }
        sum += num;
    }

    if (sum === max) {
        // max = num;
        console.log("No");
        console.log("Diff = " + sum);
    } else {
        console.log("Yes");
        console.log("Sum = " + Math.abs(max - sum));
    }

}

//halfSumElement(["7", "3", "4", "1", "1", "2", "12", "1"]); // Yes   Sum = 12
//halfSumElement(["4","6", "1","2", "3"]);   // Yes  Sum = 6
halfSumElement([ "3", "1", "1", "10"]);  // No  Diff = 8
halfSumElement(["3", "5", "5", "1"]);  // No  Diff = 1
halfSumElement(["3", "1", "1", "1"]);  // No  Diff = 1