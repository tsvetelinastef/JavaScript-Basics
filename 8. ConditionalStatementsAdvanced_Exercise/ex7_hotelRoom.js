function hotelRoom(input) {
    let month = input[0];
    let numberOvernightStays = Number(input[1]);

    let priceStudio = 0;
    let finalPriceStudio = 0;
    let finalPriceApartment = 0;
    let priceApartment = 0;
    switch (month) {
        case "May":
        case "October":
            //let priceStudio = numberOvernightStays * 50;
            // let priceApartment = numberOvernightStays * 65;
            if (numberOvernightStays > 14) {
                priceStudio = 50 - (50 * 0.30);
                finalPriceStudio = priceStudio * numberOvernightStays;
                priceApartment = 65 * 0.90;
                finalPriceApartment = priceApartment * numberOvernightStays;
                // let finalPrice = priceApartment * numberOvernightStays;
                console.log(`Apartment: ${finalPriceApartment.toFixed(2)} lv.`);
                console.log(`Studio: ${finalPriceStudio.toFixed(2)} lv.`);
            } else if (numberOvernightStays > 7) {
                priceStudio = 50 - (50 * 0.05);
                finalPriceStudio = priceStudio * numberOvernightStays;
                finalPriceApartment = 65 * numberOvernightStays;
                //let finalPrice = priceStudio * numberOvernightStays;
                console.log(`Apartment: ${finalPriceApartment.toFixed(2)} lv.`);
                console.log(`Studio: ${finalPriceStudio.toFixed(2)} lv.`);
            } else {
                priceStudio = numberOvernightStays * 50.00;
                priceApartment = numberOvernightStays * 65.00;
                console.log(`Apartment: ${priceApartment.toFixed(2)} lv.`);
                console.log(`Studio: ${priceStudio.toFixed(2)} lv.`);
            }
            break;

        case "June":
        case "September":
            if (numberOvernightStays > 14) {
                priceStudio = 75.20 - (75.20 * 0.20);
                finalPriceStudio = priceStudio * numberOvernightStays;
                priceApartment = 68.70 * 0.90;
                finalPriceApartment = priceApartment * numberOvernightStays;
                // let finalPrice = priceApartment * numberOvernightStays;
                console.log(`Apartment: ${finalPriceApartment.toFixed(2)} lv.`);
                console.log(`Studio: ${finalPriceStudio.toFixed(2)} lv.`);
            } else {
                finalPriceStudio = 75.20 * numberOvernightStays;
                finalPriceApartment = 68.70 * numberOvernightStays;
                console.log(`Apartment: ${finalPriceApartment.toFixed(2)} lv.`);
                console.log(`Studio: ${finalPriceStudio.toFixed(2)} lv.`);
            }
            break;

        case "July":
            if (numberOvernightStays > 14) {
                finalPriceStudio = 76 * numberOvernightStays;
                finalPriceApartment = 77 * 0.90 * numberOvernightStays;
                //let finalPrice = priceApartment * numberOvernightStays;
                console.log(`Apartment: ${finalPriceApartment.toFixed(2)} lv.`);
                console.log(`Studio: ${finalPriceStudio.toFixed(2)} lv.`);
            } else {
                finalPriceStudio = 76 * numberOvernightStays;
                finalPriceApartment = 77 * numberOvernightStays;
                console.log(`Apartment: ${finalPriceApartment.toFixed(2)} lv.`);
                console.log(`Studio: ${finalPriceStudio.toFixed(2)} lv.`);
            }
            break;

        case "August":
            if (numberOvernightStays > 14) {
                finalPriceStudio = 76 * numberOvernightStays;
                finalPriceApartment = 77 * 0.90 * numberOvernightStays;
                // let finalPrice = priceApartment * numberOvernightStays;
                console.log(`Apartment: ${finalPriceApartment.toFixed(2)} lv.`);
                console.log(`Studio: ${finalPriceStudio.toFixed(2)} lv.`);
            } else {
                finalPriceStudio = 76 * numberOvernightStays;
                finalPriceApartment = 77 * numberOvernightStays;
                console.log(`Apartment: ${finalPriceApartment.toFixed(2)} lv.`);
                console.log(`Studio: ${finalPriceStudio.toFixed(2)} lv.`);
            }
            break;

    }
}

hotelRoom(["May", "15"]);
hotelRoom(["June", "14"]);
hotelRoom(["August", "20"]);
