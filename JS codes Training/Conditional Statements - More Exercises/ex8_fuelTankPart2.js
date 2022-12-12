function fuelTank(input) {
    let typeFuel = input[0];
    let liters = input[1];
    let card = input[2];

    let sum = 0;
    let price = 0;
    switch (typeFuel) {
        case "Gas":
           // price = 0.93;
            if (card === "Yes") {
                let discount = 0.93 - 0.08;
                if (liters < 20) {
                    sum = liters * discount;
                    console.log(`${sum.toFixed(2)} lv.`);
                    
                } else if (liters >= 20 && liters <= 25) {
                    sum = liters * discount;
                    let percentDiscount = sum - (0.08 * sum);
                    console.log(`${percentDiscount.toFixed(2)} lv.`);
                } else if (liters > 25){
                    sum = liters * discount;
                    let percentDiscount = sum - (0.10 * sum);
                    console.log(`${percentDiscount.toFixed(2)} lv.`);
                }
            } else if (card === "No") {
               // discount = price;
                if (liters < 20) {
                    sum = liters * 0.93;
                    console.log(`${sum.toFixed(2)} lv.`);
                    
                } else if (liters >= 20 && liters <= 25) {
                    sum = liters * 0.93;
                    let percentDiscount = sum - (0.08 * sum);
                    console.log(`${percentDiscount.toFixed(2)} lv.`);
                } else if (liters > 25){
                    sum = liters * 0.93;
                    let percentDiscount = sum - (0.10 * sum);
                    console.log(`${percentDiscount.toFixed(2)} lv.`);
                }
            }

            break;
        case "Gasoline":
           // price = 2.22;
            if (card === "Yes") {
                let discount = 2.22 - 0.18;
                if (liters < 20) {
                    sum = liters * discount;
                    console.log(`${sum.toFixed(2)} lv.`);
                    
                } else if (liters >= 20 && liters <= 25) {
                    sum = liters * discount;
                    let percentDiscount = sum - (0.08 * sum);
                    console.log(`${percentDiscount.toFixed(2)} lv.`);
                } else if (liters > 25) {
                    sum = liters * discount;
                    let percentDiscount = sum - (0.10 * sum);
                    console.log(`${percentDiscount.toFixed(2)} lv.`);
                }
            } else if (card === "No") {
               // discount = price;
                if (liters < 20) {
                    sum = liters * 2.22;
                    console.log(`${sum.toFixed(2)} lv.`);
                    
                } else if (liters >= 20 && liters <= 25) {
                    sum = liters * 2.22;
                    let percentDiscount = sum - (0.08 * sum);
                    console.log(`${percentDiscount.toFixed(2)} lv.`);
                } else if (liters > 25) {
                    sum = liters * 2.22;
                    let percentDiscount = sum - (0.10 * sum);
                    console.log(`${percentDiscount.toFixed(2)} lv.`);
                }
            }

            break;
        case "Diesel":
            price = 2.33;
            if (card === "Yes") {
                let discount = price - 0.12;
                if (liters < 20) {
                    sum = liters * discount;
                    console.log(`${sum.toFixed(2)} lv.`);
                    
                } else  if (liters >= 20 && liters <= 25) {
                    sum = liters * discount;
                    let percentDiscount = sum - (0.08 * sum);
                    console.log(`${percentDiscount.toFixed(2)} lv.`);
                } else if (liters > 25) {
                    sum = liters * discount;
                    let percentDiscount = sum - (0.10 * sum);
                    console.log(`${percentDiscount.toFixed(2)} lv.`);
                }
            } else if (card === "No") {
                
                if (liters < 20) {
                    sum = liters * 2.33;
                    console.log(`${sum.toFixed(2)} lv.`);

                } else if (liters >= 20 && liters <= 25) {
                    sum = liters * 2.33;
                    let percentDiscount = sum - (0.08 * sum);
                    console.log(`${percentDiscount.toFixed(2)} lv.`);
                } else if (liters > 25){
                    sum = liters * 2.33;
                    let percentDiscount = sum - (0.10 * sum);
                    console.log(`${percentDiscount.toFixed(2)} lv.`);
                }
            }

            break;

    }

}

fuelTank(["Gas", "30", "Yes"]);
fuelTank(["Gasoline", "25", "No"]); // 51.06
fuelTank(["Diesel", "19", "No"]); // 44.27 

/* 
•	Бензин – 2.22 лева за един литър, 
•	Дизел – 2.33 лева за един литър
•	Газ – 0.93 лева за литър
*/