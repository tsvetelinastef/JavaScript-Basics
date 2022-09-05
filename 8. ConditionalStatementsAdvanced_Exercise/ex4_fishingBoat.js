function fishingBoat(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let numberFishers = input[2];

    let price = 0;
    switch (season) {
        case "Spring":
            price = 3000;
            if (numberFishers <= 6) {
                price -= price * 0.10;
            } else if (numberFishers >= 7 && numberFishers <= 11) {
                price -= price * 0.15;
            } else if (numberFishers >= 12) {
                price -= price * 0.25;
            }

            if (numberFishers % 2 === 0) {
                price -= price * 0.05;
            }
            break;

        case "Summer":
            price = 4200;
            if (numberFishers <= 6) {
                price -= price * 0.10;
            } else if (numberFishers >= 7 && numberFishers <= 11) {
                price -= price * 0.15;
            } else if (numberFishers >= 12) {
                price -= price * 0.25;
            }

            if (numberFishers % 2 === 0) {
                price -= price * 0.05;
            }
            break;

        case "Autumn":
            price = 4200;
            if (numberFishers <= 6) {
                price -= price * 0.10;
            } else if (numberFishers >= 7 && numberFishers <= 11) {
                price -= price * 0.15;
            } else if (numberFishers >= 12) {
                price -= price * 0.25;
            }
            break;

        case "Winter":
            price = 2600;
            if (numberFishers <= 6) {
                price -= price * 0.10;
            } else if (numberFishers >= 7 && numberFishers <= 11) {
                price -= price * 0.15;
            } else if (numberFishers >= 12) {
                price -= price * 0.25;
            }

            if (numberFishers % 2 === 0) {
                price -= price * 0.05;
            }
            break;
    }

    let diff = Math.abs(budget - price);
    if (budget >= price) {
        console.log(`Yes! You have ${diff.toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${diff.toFixed(2)} leva.`);
    }

}

fishingBoat(["3000", "Summer", "11"]);
fishingBoat(["3600", "Autumn", "6"]);
fishingBoat(["2000", "Winter", "13"]);