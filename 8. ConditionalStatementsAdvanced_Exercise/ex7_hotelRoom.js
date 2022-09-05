function hotelRoom(input) {
    let month = input[0];
    let numberOvernightStays = Number(input[1]);

    switch (month) {
        case "May":
        case "October":
            let priceStudio = numberOvernightStays * 50;
            let priceApartment = numberOvernightStays * 65;
            if (numberOvernightStays >= 7) {
                priceStudio -= priceStudio * 0.05;

            } else if (numberOvernightStays > 14) {
                priceStudio -= priceStudio * 0.30;
                priceApartment -= priceApartment * 0.10;
            }
            break;
        case "June":
        case "September":
            if (numberOvernightStays > 14) {
                priceStudio -= priceStudio * 0.20;
                priceApartment -= priceApartment * 0.10;
            }
            break;
        case "July":
            if (numberOvernightStays > 14) {
                priceApartment -= priceApartment * 0.10;
            }
            break;
        case "August":
            if (numberOvernightStays > 14) {
                priceApartment -= priceApartment * 0.10;
            }
            break;


    }
}

hotelRoom(["May", "15"]);
hotelRoom(["June", "14"]);
hotelRoom(["August", "20"]);


//  console.log(`Apartment: ${цена за целият престой}} lv.`);
//  console.log(`Studio: ${цена за целият престой} lv.`);