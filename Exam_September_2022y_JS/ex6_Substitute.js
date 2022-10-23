function generic(input) {
    let k = Number(input[0]);
    let l = Number(input[1]);
    let m = Number(input[2]);
    let n = Number(input[3]);
    let counter = 0;

    for (let firstFirst = k; firstFirst <= 8; firstFirst++) {
        for (let firstSecond = 9; firstSecond >= l; firstSecond--) {
            for (let secondFirst = m; secondFirst <= 8; secondFirst++) {
                for (let secondSecond = 9; secondSecond >= n; secondSecond--) {
                    let isValid = firstFirst % 2 == 0 && firstSecond % 2 != 0 && secondFirst % 2 == 0 && secondSecond % 2 != 0;
                    let firstNumber = firstFirst * 10 + firstSecond;
                    let secondNumber = secondFirst * 10 + secondSecond;

                    if (isValid && firstNumber == secondNumber) {
                        console.log(`Cannot change the same player.`)
                    } else if (isValid && firstNumber != secondNumber) {
                        console.log(`${firstFirst}${firstSecond} - ${secondFirst}${secondSecond}`)
                        counter++
                    }

                    if (counter >= 6) {
                        return;
                    }
                }
            }
        }
    }
}

// generic(["7", "6", "8", "5"]);

