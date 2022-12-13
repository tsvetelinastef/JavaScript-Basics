function bikeRace(input) {
    let juniors = Number(input[0]);
    let seniors = Number(input[1]);
    let type = input[2];

    let taxJuniors = 0;
    let taxSeniors = 0;
    let finalSum = 0;
    let expensesLeft = 0;
    switch (type) {
        case "trail":
            taxJuniors = 5.50;
            taxSeniors = 7;
            finalSum = juniors * taxJuniors + seniors * taxSeniors;
            expensesLeft = finalSum - (finalSum * 0.05);
            console.log(`${expensesLeft.toFixed(2)}`);
            break;
        case "cross-country":
            taxJuniors = 8;
            taxSeniors = 9.50;
            finalSum = juniors * taxJuniors + seniors * taxSeniors;
            expensesLeft = finalSum - (finalSum * 0.05);
            
            let people = juniors + seniors;
            if (people >= 50) {
               let sumLeft = expensesLeft - (expensesLeft * 0.25);
               console.log(`${sumLeft.toFixed(2)}`);
            } else {
                console.log(`${expensesLeft.toFixed(2)}`);
            }
            break;
        case "downhill":
            taxJuniors = 12.25;
            taxSeniors = 13.75;
            finalSum = juniors * taxJuniors + seniors * taxSeniors;
            expensesLeft = finalSum - (finalSum * 0.05);
            console.log(`${expensesLeft.toFixed(2)}`);
            break;
        case "road":
            taxJuniors = 20;
            taxSeniors = 21.50;
            finalSum = juniors * taxJuniors + seniors * taxSeniors;
            expensesLeft = finalSum - (finalSum * 0.05);
            console.log(`${expensesLeft.toFixed(2)}`);
            break;
    }
}

bikeRace(["10", "20", "trail"]);  // 185.25
bikeRace(["21", "26", "cross-country"]);  // 394.25
bikeRace(["30", "25", "cross-country"]);  // 340.22
bikeRace(["10", "10", "downhill"]); // 247.00
bikeRace(["3", "40", "road"]); // 874.00