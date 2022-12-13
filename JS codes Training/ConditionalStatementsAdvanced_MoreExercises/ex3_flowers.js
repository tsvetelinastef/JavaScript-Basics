function flowers(input) {
    let chrysanthemums = Number(input[0]);
    let roses = Number(input[1]);
    let tulips = Number(input[2]);
    let season = input[3];
    let holiday = input[4];

    let priceChrysanthemums = 0;
    let priceRoses = 0;
    let priceTulips = 0;
    if (season == "Spring" || season == "Summer") {
        priceChrysanthemums = 2.00 * chrysanthemums;
        priceRoses = 4.10 * roses;
        priceTulips = 2.5 * tulips;
    }

    if (season === "Autumn" || season === "Winter") {
        priceChrysanthemums = 3.75 * chrysanthemums;
        priceRoses = 4.50 * roses;
        priceTulips = 4.15 * tulips;
    }

    let totalprice = priceChrysanthemums + priceRoses + priceTulips;
    
    if (tulips > 7 && season === "Spring") {
        totalprice *= 0.95;  
    }

    if ((roses >= 10) && (season === "Winter")) {
        totalprice *= 0.90;   // 1 - 10%
    }

    if (holiday === "Y") {
        totalprice *= 1.15; // 1 + 15%
    }

    if (roses + tulips + chrysanthemums >= 20) {
        totalprice *= 0.80;
    }
    console.log(`${(totalprice + 2).toFixed(2)}`);
}

flowers(["2", "4", "8", "Spring", "Y"]); // 46.14
flowers(["3", "10", "9", "Winter", "N"]);  // 69.39
flowers(["10", "10", "10", "Autumn", "N"]); // 101.20

/* 
Сезон	        Хризантеми	        Рози	        Лалета
Пролет / Лято	2.00 лв./бр.	4.10 лв./бр.	2.50 лв./бр.
Есен / Зима	    3.75 лв./бр.	4.50 лв./бр.	4.15 лв./бр.



 switch (season) {
        case "Spring":
            numberFlowers = chrysanthemums + roses + tulips;
            price = chrysanthemums * 2.00 + roses * 4.10 + tulips * 2.50;
            if(holiday === "Y"){
                holiDay = price + (price * 0.15);
                if (tulips >= 7 ) {
                    priceFlowers = holiDay - (holiDay * 0.05);
                     if(numberFlowers >= 20){
                    priceFlowers = priceFlowers - (priceFlowers * 0.20);
                    console.log(`${(priceFlowers + 2).toFixed(2)}`);
                     } 
                    console.log(`${(priceFlowers + 2).toFixed(2)}`);

                } else {
                    console.log(`${(holiDay + 2).toFixed(2)}`);
                }

            } else if(holiday === "N"){
                holiDay = price;
                if (tulips >= 7) {
                    priceFlowers = holiDay - (holiDay * 0.05);
                    if(numberFlowers >= 20){
                    priceFlowers = priceFlowers - (priceFlowers * 0.20);
                    console.log(`${(priceFlowers + 2).toFixed(2)}`);
                    } 
                    console.log(`${(priceFlowers + 2).toFixed(2)}`);

                } else {
                    console.log(`${(holiDay + 2).toFixed(2)}`);
                }
            }
            break;



            case "Summer":
            numberFlowers = chrysanthemums + roses + tulips;
            price = chrysanthemums * 2.00 + roses * 4.10 + tulips * 2.50;
            if(holiday === "Y"){
                holiDay = price + (price * 0.15);
                if(numberFlowers >= 20){
                    priceFlowers = holiDay - (holiDay * 0.20);
                    console.log(`${(priceFlowers + 2).toFixed(2)}`);
    
                } else {
                    console.log(`${(holiDay + 2).toFixed(2)}`);
                }

            } else if(holiday === "N"){
                holiDay = price;
                if(numberFlowers >= 20){
                    priceFlowers = holiDay - (holiDay * 0.20);
                    console.log(`${(priceFlowers + 2).toFixed(2)}`);
    
                } else {
                    console.log(`${(holiDay + 2).toFixed(2)}`);
                }
            }
            break;


            case "Autumn":
                numberFlowers = chrysanthemums + roses + tulips;
                price = chrysanthemums * 3.75 + roses * 4.50 + tulips * 4.15;
                if(holiday === "Y"){
                    holiDay = price + (price * 0.15);
                    if(numberFlowers >= 20){
                        priceFlowers = holiDay- (holiDay * 0.20 );
                        console.log(`${(priceFlowers + 2).toFixed(2)}`);
        
                    } else {
                        console.log(`${(holiDay + 2).toFixed(2)}`);
                    }

                } else if(holiday === "N"){
                    holiDay = price;
                    if(numberFlowers >= 20){
                        priceFlowers = holiDay- (holiDay * 0.20 );
                        console.log(`${(priceFlowers + 2).toFixed(2)}`);
        
                    } else {
                        console.log(`${(holiDay + 2).toFixed(2)}`);
                    }
                }
                break;


                case "Winter":
                    numberFlowers = chrysanthemums + roses + tulips;
                    price = chrysanthemums * 3.75 + roses * 4.50 + tulips * 4.15;
                    if(holiday === "Y"){
                        holiDay = price + (price * 0.15);

                        if (roses >= 10) {
                            priceFlowers = holiDay - (holiDay * 0.10);
                             if(numberFlowers >= 20){
                            priceFlowers = priceFlowers - (priceFlowers * 0.20);
                            console.log(`${(priceFlowers + 2).toFixed(2)}`);
                             }
                        }  else  {
                            console.log(`${(holiDay + 2).toFixed(2)}`);
                        }

                    } else if(holiday === "N"){
                        holiDay = price;

                        if (roses >= 10) {
                            priceFlowers = holiDay - (holiDay * 0.10);
                            if(numberFlowers >= 20){
                                priceFlowers = priceFlowers - (priceFlowers * 0.20);
                                console.log(`${(priceFlowers + 2).toFixed(2)}`);
                            } 
                            
                        } 
                       else  {
                            console.log(`${(holiDay + 2).toFixed(2)}`);
                        }
                    } 
                    break;
    }
*/