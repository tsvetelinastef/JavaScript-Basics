function hotelRoom(input) {
    let month = input[0];
    let numberOvernightStays = Number(input[1]);

    switch (month) {
        case "May":
        case "October":
            //let priceStudio = numberOvernightStays * 50;
           // let priceApartment = numberOvernightStays * 65;
           if (numberOvernightStays > 14) {
                let priceStudio = 50 - (50 * 0.30);
                let finalPriceStudio = priceStudio * numberOvernightStays;
                let priceApartment = 65 * 0.90;
                let finalPriceApartment = priceApartment * numberOvernightStays;
               // let finalPrice = priceApartment * numberOvernightStays;
               console.log(`Apartment: ${finalPriceApartment.toFixed(2)} lv.`);
                console.log(`Studio: ${finalPriceStudio.toFixed(2)} lv.`);
            } else  if (numberOvernightStays >= 7) {
                let priceStudio = 50 - (50 * 0.05);
                let finalPriceStudio = priceStudio * numberOvernightStays;
                let finalPriceApartment = 65 * numberOvernightStays;
                //let finalPrice = priceStudio * numberOvernightStays;
                console.log(`Apartment: ${finalPriceApartment.toFixed(2)} lv.`);
                console.log(`Studio: ${finalPriceStudio.toFixed(2)} lv.`);

            } 
            break;
        case "June":
        case "September":
            if (numberOvernightStays > 14) {
                let priceStudio = 75.20 - (75.20 * 0.20);
                let finalPriceStudio = priceStudio * numberOvernightStays;
                let priceApartment = 68.70  * 0.90;
                let finalPriceApartment = priceApartment * numberOvernightStays;
               // let finalPrice = priceApartment * numberOvernightStays;
                console.log(`Apartment: ${finalPriceApartment.toFixed(2)} lv.`);
                console.log(`Studio: ${finalPriceStudio.toFixed(2)} lv.`);
            } else {
                let finalPriceStudio = 75.20 * numberOvernightStays;
                let finalPriceApartment = 68.70 * numberOvernightStays;
                console.log(`Apartment: ${finalPriceApartment.toFixed(2)} lv.`);
                console.log(`Studio: ${finalPriceStudio.toFixed(2)} lv.`);
            }
            break;
        case "July":
            if (numberOvernightStays > 14) {
                let finalPriceStudio = 76 * numberOvernightStays;
                let finalpriceApartment = 77 * 0.90 * numberOvernightStays;
                //let finalPrice = priceApartment * numberOvernightStays;
                console.log(`Apartment: ${finalpriceApartment.toFixed(2)} lv.`);
                console.log(`Studio: ${finalPriceStudio.toFixed(2)} lv.`);
            } else {
                let finalPriceStudio = 76 * numberOvernightStays;
                let finalPriceApartment = 77 * numberOvernightStays;
                console.log(`Apartment: ${finalPriceApartment.toFixed(2)} lv.`);
                console.log(`Studio: ${finalPriceStudio.toFixed(2)} lv.`);
            }
            break;
        case "August":
            if (numberOvernightStays > 14) {
                let finalPriceStudio = 76 * numberOvernightStays;
                let finalpriceApartment = 77  * 0.90 * numberOvernightStays;
               // let finalPrice = priceApartment * numberOvernightStays;
                console.log(`Apartment: ${finalpriceApartment.toFixed(2)} lv.`);
                console.log(`Studio: ${finalPriceStudio.toFixed(2)} lv.`);
            } else {
                let finalPriceStudio = 76 * numberOvernightStays;
                let finalPriceApartment = 77 * numberOvernightStays;
                console.log(`Apartment: ${finalPriceApartment.toFixed(2)} lv.`);
                console.log(`Studio: ${finalPriceStudio.toFixed(2)} lv.`);
            }
            break;


    }
}

hotelRoom(["May", "15"]);
hotelRoom(["June", "14"]);
hotelRoom(["August", "20"]);
