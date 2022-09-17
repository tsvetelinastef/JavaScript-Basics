function flowers(input) {

    // 25 out of 100
    let purchasedChrysanthemums = Number(input[0]);
    let purchasedRoses = Number(input[1]);
    let purchasedTulips = Number(input[2]);
    let seasons = input[3];
    let whetherDayHoliday = input[4];
    
    // Пролет/Лято ==>  2.00 ... 4.10 ...2.50 лв./бр
    // Есен/Зима ==> 3.75 ... 4.50 ... 4.15 лв./бр.


    let price = 0;
    let breakDay = 0;
    let sum = 0;
    let allFlowers = 0;
    let discount = 0;
    let total = 0;
    switch (seasons) {
        case "Spring":
            price = purchasedChrysanthemums * 2.00 + purchasedRoses * 4.10 + purchasedTulips * 2.50;
            if(whetherDayHoliday === "Y"){
                breakDay = price + (price * 0.15);

                allFlowers = purchasedChrysanthemums + purchasedRoses + purchasedTulips;
                if (purchasedTulips > 7) {
                    sum = (breakDay - (breakDay * 0.05)) + 2;
                    console.log(`${sum.toFixed(2)}`);
                } else if(allFlowers >= 20){
                    discount = (price - (price * 0.20)) + 2;
                    console.log(`${discount.toFixed(2)}`);
                } 
            } else if(whetherDayHoliday === "N"){
                allFlowers = purchasedChrysanthemums + purchasedRoses + purchasedTulips;
                if (purchasedTulips > 7) {
                    sum = (price - (price * 0.05)) + 2;
                    console.log(`${sum.toFixed(2)}`);
                } else if(allFlowers >= 20){
                    discount = (price - (price * 0.20)) + 2;
                    console.log(`${discount.toFixed(2)}`);
                } 
            }
        
            break;
        case "Summer":
            price = purchasedChrysanthemums * 2.00 + purchasedRoses * 4.10 + purchasedTulips * 2.50;
            if(whetherDayHoliday === "Y"){
                breakDay = price + (price * 0.15);

                allFlowers = purchasedChrysanthemums + purchasedRoses + purchasedTulips;
                if(allFlowers >= 20){
                    discount = (price - (price * 0.20)) + 2;
                    console.log(`${discount.toFixed(2)}`);
                } 
            } else if(whetherDayHoliday === "N"){
                allFlowers = purchasedChrysanthemums + purchasedRoses + purchasedTulips;
                 if(allFlowers >= 20){
                    discount = (price - (price * 0.20)) + 2;
                    console.log(`${discount.toFixed(2)}`);
                } 
            }

            break;
        case "Autumn":
            price = purchasedChrysanthemums * 3.75 + purchasedRoses * 4.50 + purchasedTulips * 4.15;
            if(whetherDayHoliday === "Y"){
                breakDay = price + (price * 0.15);

                allFlowers = purchasedChrysanthemums + purchasedRoses + purchasedTulips;
                if(allFlowers >= 20){
                    discount = (price - (price * 0.20)) + 2;
                    console.log(`${discount.toFixed(2)}`);
                } 

            } else if(whetherDayHoliday === "N"){
                allFlowers = purchasedChrysanthemums + purchasedRoses + purchasedTulips;
                 if(allFlowers >= 20){
                    discount = (price - (price * 0.20)) + 2;
                    console.log(`${discount.toFixed(2)}`);
                } 
            }
            break;

        case "Winter":
            price = purchasedChrysanthemums * 3.75 + purchasedRoses * 4.50 + purchasedTulips * 4.15;
            if(whetherDayHoliday === "Y"){
                breakDay = price + (price * 0.15);

                allFlowers = purchasedChrysanthemums + purchasedRoses + purchasedTulips;
                if (purchasedRoses >= 10) {
                    sum = (breakDay - (breakDay * 0.05)) + 2;
                    console.log(`${sum.toFixed(2)}`);
                } else if(allFlowers >= 20){
                    discount = (price - (price * 0.20)) + 2;
                    console.log(`${discount.toFixed(2)}`);
                } 
            } else if(whetherDayHoliday === "N"){
                allFlowers = purchasedChrysanthemums + purchasedRoses + purchasedTulips;
                if (purchasedRoses >= 10) {
                    sum = (price - (price * 0.10));
                    if(allFlowers >= 20){
                        discount = (sum - (sum * 0.20)) + 2;
                        console.log(`${discount.toFixed(2)}`);
                    }
                
                } 
            }
            break;
    }
}

// 25 out of 100
//flowers(["2", "4", "8", "Spring", "Y"]); // 46.14
//flowers(["3", "10", "9", "Winter", "N"]); // 69.39
flowers(["10", "10", "10", "Autumn", "N"]); // 101.20
