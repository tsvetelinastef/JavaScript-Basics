function courierExpress(input) {
    let weight = Number(input[0]).toFixed(3);
    let type = String(input[1]);
    let distance = Number(input[2]);
    let price = 0;

    switch (type) {
        case "standard":
            if (weight < 1) {
                price = (0.03 * distance);
            } else if (weight >= 1 && weight < 10) {
                price = (0.05 * distance);
            } else if (weight >= 10 && weight < 40) {
                price = 0.10 * distance;
            } else if (weight >= 40 && weight < 90) {
                price = 0.15 * distance;
            } else if (weight >= 90 && weight < 150) {
                price = 0.20 * distance;
            }
            break;
    }

    switch (type) {
        case "express":
            if (weight < 1) {
                price = (price + (weight * (0.03 * (80 / 100))) * distance);
            } else if (weight >= 1 && weight < 10) {
                price = (price + (weight * (0.05 * (40 / 100))) * distance);
            } else if (weight >= 10 && weight < 40){
                price = (price + (weight * (0.10 * (5 / 100))) * distance);
            } else if (weight >= 40 && weight < 90){
                price = (price + (weight * (0.15 * (2 / 100))) * distance);
            } else if (weight >= 90 && weight < 150){
                price = (price + (weight * (0.20 * (1 / 100))) * distance);
            }
            break;
    }
    console.log(`The delivery of your shipment with weight of ${weight} kg. would cost ${price.toFixed(2)}`);

}

courierExpress(["1.5", "standard", "100"]);

/* 
let */