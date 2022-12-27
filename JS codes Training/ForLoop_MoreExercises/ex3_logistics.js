function logistics(input) {
    let index = 0;
    let numberLoads = Number(input[index++]);

    let priceBus = 200;
    let priceTruck = 175;
    let priceTrain = 120;

    let busCounter = 0;
    let truckCounter = 0;
    let trainCounter = 0;
    let totalPrice = 0;
    let totalWeight = 0;

    for (let i = 1; i <= numberLoads; i++) {
        let cargoTonnage = Number(input[index++]);
        totalWeight += cargoTonnage;

        if (cargoTonnage <= 3) {
            totalPrice += priceBus * cargoTonnage;
            busCounter += cargoTonnage;

        } else if (cargoTonnage >= 4 && cargoTonnage <= 11) {
            totalPrice += priceTruck * cargoTonnage;
            truckCounter += cargoTonnage;
            
        } else if (cargoTonnage >= 12) {
            totalPrice += priceTrain * cargoTonnage;
            trainCounter += cargoTonnage;
        }
    }

    let averagePrice = totalPrice/ totalWeight;
    let percentBus = (busCounter / totalWeight) * 100;
    let percentTruck = (truckCounter / totalWeight) * 100;
    let percentTrain = (trainCounter / totalWeight) * 100;

    console.log(`${averagePrice.toFixed(2)}`);
    console.log(`${percentBus.toFixed(2)}%`);
    console.log(`${percentTruck.toFixed(2)}%`);
    console.log(`${percentTrain.toFixed(2)}%`);
}

logistics(["4", "1", "5", "16", "3"]);
logistics(["5", "2", "10", "20", "1", "7"]);