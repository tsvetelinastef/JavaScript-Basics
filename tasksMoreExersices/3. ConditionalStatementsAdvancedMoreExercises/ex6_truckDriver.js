function truckDriver(input) {
    let season = input[0];
    let kmPerMonth = Number(input[1]);

    let price = 0;
    switch (season) {
        case "Spring":
        case "Autumn":
            if (kmPerMonth <= 5000) {
                price = ((kmPerMonth * 0.75) * 4) - (((kmPerMonth * 0.75) * 4) * 0.10);
                console.log(`${price.toFixed(2)}`);
            } else if (kmPerMonth > 5000 && kmPerMonth <= 10000) {
                price = ((kmPerMonth * 0.95) * 4) - (((kmPerMonth * 0.95) * 4) * 0.10);
                console.log(`${price.toFixed(2)}`);
            } else if (kmPerMonth > 10000 && kmPerMonth <= 20000) {
                price = ((kmPerMonth * 1.45) * 4) - (((kmPerMonth * 1.45) * 4) * 0.10);
                console.log(`${price.toFixed(2)}`);
            }
            break;

        case "Summer":
            if (kmPerMonth <= 5000) {
                price = ((kmPerMonth * 0.90) * 4) - (((kmPerMonth * 0.90) * 4) * 0.10);
                console.log(`${price.toFixed(2)}`);
            } else if (kmPerMonth > 5000 && kmPerMonth <= 10000) {
                price = ((kmPerMonth * 1.10) * 4) - (((kmPerMonth * 1.10) * 4) * 0.10);
                console.log(`${price.toFixed(2)}`);
            } else if (kmPerMonth > 10000 && kmPerMonth <= 20000) {
                price = ((kmPerMonth * 1.45) * 4) - (((kmPerMonth * 1.45) * 4) * 0.10);
                console.log(`${price.toFixed(2)}`);
            }
            break;

        case "Winter":
            if (kmPerMonth <= 5000) {
                price = ((kmPerMonth * 1.05) * 4) - (((kmPerMonth * 1.05) * 4) * 0.10);
                console.log(`${price.toFixed(2)}`);
            } else if (kmPerMonth > 5000 && kmPerMonth <= 10000) {
                price = ((kmPerMonth * 1.25) * 4) - (((kmPerMonth * 1.25) * 4) * 0.10);
                console.log(`${price.toFixed(2)}`);
            } else if (kmPerMonth > 10000 && kmPerMonth <= 20000) {
                price = ((kmPerMonth * 1.45) * 4) - (((kmPerMonth * 1.45) * 4) * 0.10);
                console.log(`${price.toFixed(2)}`);
            }
            break;
    }
}

//truckDriver(["Summer", "3455"]); // 11194.20
truckDriver(["Winter", "4350"]); // 16443.00
truckDriver(["Winter", "5678"]); // 25551.00
truckDriver(["Winter", "16042"]);  // 83739.24
truckDriver(["Spring", "1600"]); // 4320.00
truckDriver(["Autumn", "8600"]);  // 29412.00
truckDriver(["Spring", "16942"]); // 88437.24