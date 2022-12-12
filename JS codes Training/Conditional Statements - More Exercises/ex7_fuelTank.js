function fuelTank(input) {
    let text = input[0];
    let number = Number(input[1]);

    switch (text) {
        case "Diesel":
            if(number >= 25){
                console.log(`You have enough diesel.`);
            } else {
                console.log(`Fill your tank with diesel!`);
            }
            break;
        case "Gasoline":
            if(number >= 25){
                console.log(`You have enough gasoline.`);
            } else {
                console.log(`Fill your tank with gasoline!`);
            }
            break;
        case "Gas":
            if(number >= 25){
                console.log(`You have enough gas.`);
            } else {
                console.log(`Fill your tank with gas!`);
            }
            break;
        default: 
            console.log("Invalid fuel!");
            break;
    }
}

fuelTank(["Diesel", "10"]);
fuelTank(["Gasoline", "40"]);
fuelTank(["Gas", "25"]);
fuelTank(["Kerosene", "200"]);