function secretDoorsLock(input) {
    let upperBoundHundreds = Number(input[0]);
    let upperLimitTens = Number(input[1]);
    let upperLimitUnits = Number(input[2]);

    for (let i = 1; i <= upperBoundHundreds; i++) {
        for (let j = 1; j <= upperLimitTens; j++) {
            for (let k = 1; k <= upperLimitUnits; k++) {
                if (i % 2 === 0 && k % 2 === 0) {
                    if (j === 2 || j === 3 || j === 5 || j === 7) {
                        res = `${i} ${j} ${k}`;
                        console.log(res);
                    }
                }
            }
        }
    }
}

secretDoorsLock(["3", "5", "5"]);
secretDoorsLock(["8", "2", "8"]);