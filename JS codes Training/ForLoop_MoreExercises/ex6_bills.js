function bills(input) {
    let index = 0;
    let months = Number(input[index++]);

    let electricity = 0;
    let water = 20;
    let internet = 15;
    let others = 0;
    let sum = 0;

    for(let i = 1; i <= months; i++){
        let electricityMonthly = Number(input[index++]);
        electricity += electricityMonthly;

        others +=  electricityMonthly + water + internet + ((water + internet + electricityMonthly) * 20) / 100;
       // sum += others + electricity;
    }

    let waterTotal = months * water;
    let internetTotal = months * internet;
    let avg = (electricity + waterTotal + internetTotal + others) / months;

    console.log(`Electricity: ${electricity.toFixed(2)} lv`);
    console.log(`Water: ${waterTotal.toFixed(2)} lv`);
    console.log(`Internet: ${internetTotal.toFixed(2)} lv`);
    console.log(`Other: ${others.toFixed(2)} lv`);
    console.log(`Average: ${avg.toFixed(2)} lv`);
}

bills(["5", "68.63", "89.25", "132.53", "93.53", "63.22"]);
bills(["8", "123.54", "231.54", "140.23", "100", "122.4", "430", "178.52", "64.2"]);
