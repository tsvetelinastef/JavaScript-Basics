function fuelTankPart2(input) {
    let type = input[0];
    let litters = Number(input[1]);
    let clubCard = input[2];

    // Gasoline - 2.22 
    // diesel - 2.33
    // gas - 0.93 
let total = 0;
let finalSum = 0;
    switch (type) {
        case "Diesel":
            if(clubCard === "Yes"){
                if(litters >= 20 && litters <= 25){
                    total = litters * (2.33 - 0.12);
                     finalSum = total - (total * 0.08);
                    console.log(`${finalSum.toFixed(2)} lv.`);
                } else if (litters > 25){
                    total = litters * (2.33 - 0.12);
                    finalSum = total - (total * 0.10);
                    console.log(`${finalSum.toFixed(2)} lv.`);
                } else if (litters < 20) { // if (litters > 25)
                    total = litters * (2.33 - 0.12);
                    // finalSum = total - (total * 0.10);
                    console.log(`${total.toFixed(2)} lv.`);
                } 
            } else if (clubCard === "No") {
                if(litters >= 20 && litters <= 25){
                    total = litters * 2.33;
                    finalSum = total - (total * 0.08);
                    console.log(`${finalSum.toFixed(2)} lv.`);
                }  else if (litters > 25){
                    total = litters * 2.33;
                    finalSum = total - (total * 0.10);
                    console.log(`${finalSum.toFixed(2)} lv.`);
                } else if (litters < 20){
                    total = litters * 2.33;
                    //finalSum = total - (total * 0.10);
                    console.log(`${total.toFixed(2)} lv.`);
                }
            }
            break;


        case "Gasoline":
            if(clubCard === "Yes"){
                if(litters >= 20 && litters <= 25){
                    total = litters * (2.22 - 0.18);
                     finalSum = total - (total * 0.08);
                    console.log(`${finalSum.toFixed(2)} lv.`);
                } else if (litters > 25){
                    total = litters * (2.22 - 0.18);
                    finalSum = total - (total * 0.10);
                    console.log(`${finalSum.toFixed(2)} lv.`);
                } else if (litters < 20) { // if (litters > 25)
                    total = litters * (2.22 - 0.18);
                    // finalSum = total - (total * 0.10);
                    console.log(`${total.toFixed(2)} lv.`);
                } 
            } else if (clubCard === "No") {
                if(litters >= 20 && litters <= 25){
                    total = litters * 2.22;
                    finalSum = total - (total * 0.08);
                    console.log(`${finalSum.toFixed(2)} lv.`);
                } else if (litters > 25){
                    total = litters * 2.22;
                    finalSum = total - (total * 0.10);
                    console.log(`${finalSum.toFixed(2)} lv.`);
                } else if (litters < 20){
                    total = litters * 2.22;
                   // finalSum = total - (total * 0.10);
                    console.log(`${total.toFixed(2)} lv.`);
                } 
            }
            break;
            

        case "Gas":
            if(clubCard === "Yes"){
                if(litters >= 20 && litters <= 25){
                    total = litters * (0.93 - 0.08);
                     finalSum = total - (total * 0.08);
                    console.log(`${finalSum.toFixed(2)} lv.`);
                } else if (litters > 25){
                    total = litters * (0.93 - 0.08);
                    finalSum = total - (total * 0.10);
                    console.log(`${finalSum.toFixed(2)} lv.`);
                }  else if (litters < 20) { // if (litters > 25)
                    total = litters * (0.93 - 0.08);
                    // finalSum = total - (total * 0.10);
                    console.log(`${total.toFixed(2)} lv.`);
                } 
            } else if (clubCard === "No") {
                if(litters >= 20 && litters <= 25){
                    total = litters * 0.93;
                    finalSum = total - (total * 0.08);
                    console.log(`${finalSum.toFixed(2)} lv.`);
                } else if (litters > 25){
                    total = litters * 0.93;
                    finalSum = total - (total * 0.10);
                    console.log(`${finalSum.toFixed(2)} lv.`);
                }  else if (litters < 20) {
                    total = litters * 0.93;
                    //finalSum = total - (total * 0.10);
                    console.log(`${total.toFixed(2)} lv.`);
                } 
            }
            break;

    }
}

fuelTankPart2(["Gas", "30", "Yes"]);  // 22.95
fuelTankPart2(["Gasoline", "25", "No"]); // 51.06
fuelTankPart2(["Diesel", "19", "No"]); // 44.27