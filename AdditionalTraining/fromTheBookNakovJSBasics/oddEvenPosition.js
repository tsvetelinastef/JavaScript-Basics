function oddEvenPosition(input) {
    let n = Number(input[0]);

    let oddSum = 0;
    let evenSum = 0;

    for (let i = 1; i <= n; i++) {
        let num = Number(input[i]);

        if (i % 2 == 0) {
            evenSum += num;
        } else {
            oddSum += num;
        }
    }

    let diff = Math.abs(oddSum - evenSum);
    if (evenSum == oddSum) {
        console.log('Yes');
        console.log('Sum = ' + evenSum);

    } else {
        console.log('No');
        console.log('Diff = ' + diff);
    }

}

oddEvenPosition(["4", "10", "50", "60", "20"]); // Yes   Sum = 70
oddEvenPosition(["4", "3", "5", "1", "-2"]); // No  Diff = 1
oddEvenPosition(["3", "5", "8", "1"]);  // No  Diff = 2

