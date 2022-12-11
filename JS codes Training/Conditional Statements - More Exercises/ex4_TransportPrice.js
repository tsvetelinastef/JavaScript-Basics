function transportPrice(input) {
    let n = Number(input[0]);
    let day = input[1];

    switch (day) {
        case "day":
            if (n < 20) {
                let priceDay = 0.70 + n * 0.79;
                console.log(`${priceDay.toFixed(2)}`);
            } else if (n >= 100) {
                let priceDay = n * 0.06;
                console.log(`${priceDay.toFixed(2)}`);
            } else if (n >= 20) {
                let priceDay = n * 0.09;
                console.log(`${priceDay.toFixed(2)}`);
            }
            break;
        case "night":
            if (n < 20) {
                let priceNight = 0.70 + n * 0.90;
                console.log(`${priceNight.toFixed(2)}`);
            } else if (n >= 100) {
                let priceNight = n * 0.06;
                console.log(`${priceNight.toFixed(2)}`);
            } else if (n >= 20) {
                let priceNight = n * 0.09;
                console.log(`${priceNight.toFixed(2)}`);
            }
            break;

    }


}

transportPrice(["5", "day"]); // 4.65
transportPrice(["7", "night"]);  // 7.00 
transportPrice(["25", "day"]);   // 2.25
transportPrice(["180", "night"]);  // 10.80