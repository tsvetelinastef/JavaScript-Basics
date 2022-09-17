function vacation(input) {
    let budget = Number(input[0]);
    let season = input[1];

    let price = 0;
    switch (season) {
        case "Summer":
            if (budget <= 1000) {
                price = budget * 0.65;
                console.log(`Alaska - Camp - ${price.toFixed(2)}`);
            } else if (budget > 1000 && budget <= 3000) {
                price = budget * 0.80;
                console.log(`Alaska - Hut - ${price.toFixed(2)}`);
            } else {
                price = budget * 0.90;
                console.log(`Alaska - Hotel - ${price.toFixed(2)}`);
            }
            break;

        case "Winter":
            if (budget <= 1000) {
                price = budget * 0.45;
                console.log(`Morocco - Camp - ${price.toFixed(2)}`);
            } else if (budget > 1000 && budget <= 3000) {
                price = budget * 0.60;
                console.log(`Morocco - Hut - ${price.toFixed(2)}`);
            } else {
                price = budget * 0.90;
                console.log(`Morocco - Hotel - ${price.toFixed(2)}`);
            }
            break;
    }
}

vacation(["800", "Summer"]);
vacation(["799.50", "Winter"]);
vacation(["1100", "Summer"]);
vacation(["2543.99", "Winter"]);
vacation(["3460", "Summer"]);
vacation(["5000", "Winter"]); 