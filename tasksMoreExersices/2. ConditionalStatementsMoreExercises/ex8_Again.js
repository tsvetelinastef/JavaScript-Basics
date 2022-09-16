function again(input) {
    let typeFuel = input[0];
    let fuelQuantity = Number(input[1]);
    let clubCard = input[2];

    let chekCard = true;

    if (clubCard === "No") {
        chekCard = false;
    }
    else if (clubCard === "Yes") {
        chekCard = true;
    }

    let diesel = 2.33;
    let dieselDiscount = 0.12;
    let gasoline = 2.22;
    let gasolineDiscount = 0.18;
    let gas = 0.93;
    let gasDiscount = 0.08;

    if (chekCard) {
        diesel -= dieselDiscount;
        gasoline -= gasolineDiscount;
        gas -= gasDiscount;
    }

    let fuelPrice = 0.0;
    let discount20 = 0.08;
    let discount25 = 0.10;

    switch (typeFuel) {
        case "Diesel":
            fuelPrice = diesel * fuelQuantity;
            break;
        case "Gasoline":
            fuelPrice = gasoline * fuelQuantity;
            break;
        case "Gas":
            fuelPrice = gas * fuelQuantity;
            break;
        default:
            console.log(``);
            break;
    }

    if (fuelQuantity >= 20 && fuelQuantity <= 25) {
        fuelPrice = fuelPrice - (fuelPrice * discount20);
    }
    else if (fuelQuantity > 25) {
        fuelPrice = fuelPrice - (fuelPrice * discount25);
    }

    console.log(`${fuelPrice.toFixed(2)} lv.`);
}

again(["Gas", "30", "Yes"]);  // 22.95
again(["Gasoline", "25", "No"]); // 51.06
again(["Diesel", "19", "No"]); // 44.27