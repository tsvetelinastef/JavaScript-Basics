function profit(input) {
    let coins1 = Number(input[0]);
    let coins2 = Number(input[1]);
    let coins5 = Number(input[2]);
    let sum = Number(input[3]);

    let countOfBanknotes1Lv = 0;
    let countOfBanknotes2Lv = 0;
    let countOfBanknotes5Lv = 0;

    for (let i = 0; i <= coins1; i++) {
        countOfBanknotes1Lv = i;
        for (let j = 0; j <= coins2; j++) {
            countOfBanknotes2Lv = j;
            for (let k = 0; k <= coins5; k++) {
                countOfBanknotes5Lv = k;

                let amount1Lv = countOfBanknotes1Lv * 1;
                let amount2Lv = countOfBanknotes2Lv * 2;
                let amount5Lv = countOfBanknotes5Lv * 5;

                if (sum - (amount1Lv + amount2Lv + amount5Lv) === 0) {
                    console.log(`${countOfBanknotes1Lv} * 1 lv. + ${countOfBanknotes2Lv} * 2 lv. + ${countOfBanknotes5Lv} * 5 lv. = ${sum} lv.`);
                }
            }
        }
    }
}

profit(["3", "2", "3", "10"]);
profit(["5", "3", "1", "7"]);