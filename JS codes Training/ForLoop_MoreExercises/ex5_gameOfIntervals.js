function gameOfIntervals(input) {
    let index = 0;
    let moves = Number(input[index++]);
    let numbers = Number(input[index++]);
    
    let result = 0;
    let counter0To9 = 0;
    let counter10To19 = 0;
    let counter20To29 = 0;
    let counter30To39 = 0;
    let counter40To50 = 0;
    let counterNegativeOrOver50 = 0;


    for (let i = 1; i <= moves; i++) {
        if (numbers >= 0 && numbers <= 9) {
            counter0To9++;
            result += (numbers * 20) / 100;
        } else if (numbers >= 10 && numbers <= 19) {
            counter10To19++;
            result += (numbers * 30) / 100;
        } else if (numbers >= 20 && numbers <= 29) {
            counter20To29++;
            result += (numbers * 40) / 100;
        } else if (numbers >= 30 && numbers <= 39) {
            counter30To39++;
            result += 50;
        } else if (numbers >= 40 && numbers <= 50) {
            counter40To50++;
            result += 100;
        } else {
            counterNegativeOrOver50++;
            result /= 2;
        }
        numbers = Number(input[index++]);
    }

    let zeroToNine = (counter0To9 / moves) * 100;
    let tenToNineteen =  (counter10To19 / moves) * 100;
    let twentyToTwentyNine = (counter20To29 / moves) * 100;
    let thirtyTo39 = (counter30To39 / moves) * 100;
    let fortyTo50 = (counter40To50 / moves) * 100;
    let invalid = (counterNegativeOrOver50 / moves) * 100;

    console.log(`${result.toFixed(2)}`);
    console.log(`From 0 to 9: ${zeroToNine.toFixed(2)}%`);
    console.log(`From 10 to 19: ${tenToNineteen.toFixed(2)}%`);
    console.log(`From 20 to 29: ${twentyToTwentyNine.toFixed(2)}%`);
    console.log(`From 30 to 39: ${thirtyTo39.toFixed(2)}%`);
    console.log(`From 40 to 50: ${fortyTo50.toFixed(2)}%`);
    console.log(`Invalid numbers: ${invalid.toFixed(2)}%`);
}

gameOfIntervals(["10", "43", "57", "-12", "23", "12", "0", "50", "40", "30", "20"]);