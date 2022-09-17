function bikeRace(input) {
    let juniorCyclists = Number(input[0]);
    let seniorCyclists = Number(input[1]);
    let trackType = input[2];

    let taxJuniors = 0;
    let taxSeniors = 0;
    let tax = 0;
    let participants = 0;
    let expense = 0;
    let remain = 0;

    switch (trackType) {
        case "trail":
            taxJuniors = 5.50;
            taxSeniors = 7;
            tax = juniorCyclists * taxJuniors + seniorCyclists * taxSeniors;
             expense = tax * 0.05;
             remain = tax - expense;
            console.log(`${remain.toFixed(2)}`);
            break;

        case "cross-country":
            participants = juniorCyclists + seniorCyclists;
            taxJuniors = 8;
            taxSeniors = 9.50;

            if (participants >= 50) {
                taxJuniors = 8 - (8 * 0.25);
                taxSeniors = 9.50 - (9.50 * 0.25);
                tax = juniorCyclists * taxJuniors + seniorCyclists * taxSeniors;
                expense = tax - (tax * 0.05);
                console.log(`${expense.toFixed(2)}`);
            } else {
                tax = juniorCyclists * taxJuniors + seniorCyclists * taxSeniors;
                expense = tax - (tax * 0.05);
                console.log(`${expense.toFixed(2)}`);
            }
            break;

        case "downhill":
            taxJuniors = 12.25;
            taxSeniors = 13.75;
            tax = juniorCyclists * taxJuniors + seniorCyclists * taxSeniors;
             expense = tax * 0.05;
             remain = tax - expense;
            console.log(`${remain.toFixed(2)}`);
            break;

        case "road":
            taxJuniors = 20;
            taxSeniors = 21.50;
            tax = juniorCyclists * taxJuniors + seniorCyclists * taxSeniors;
             expense = tax * 0.05;
             remain = tax - expense;
            console.log(`${remain.toFixed(2)}`);
            break;
    }

}

//bikeRace(["10", "20", "trail"]); // 185.25
bikeRace(["21", "26", "cross-country"]); // 394.25
//bikeRace(["30", "25", "cross-country"]); // 340.22
//bikeRace(["10", "10", "downhill"]); // 247.00
//bikeRace(["3", "40", "road"]); // 874.00
