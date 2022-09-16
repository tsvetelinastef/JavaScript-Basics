function fuelTank(input) {
    let type = input[0];
    let litters = Number(input[1]);

    switch (type) {
        case "Diesel":
            if (litters >= 25) {

                console.log(`You have enough diesel.`);
            } else {

                console.log(`Fill your tank with diesel!`);
            }
            break;
        case "Gasoline":
            if (litters >= 25) {

                console.log(`You have enough gasoline.`);
            } else {
        
                console.log(`Fill your tank with gasoline!`);
            }
            break;
        case "Gas":
            if (litters >= 25) {

                console.log(`You have enough gas.`);
            } else {
        
                console.log(`Fill your tank with gas!`);
            }
            break;
        default:
            console.log(`Invalid fuel!`);
            break;
    }
}

fuelTank(["Diesel", "10"]);
fuelTank(["Gasoline", "40"]);
fuelTank(["Gas", "25"]);
fuelTank(["Kerosene", "200"]);