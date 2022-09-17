function flowersAgain(input){

    // 100 out of 100
    let purchasedChrysanthemums = Number(input[0]);
    let purchasedRoses = Number(input[1]);
    let purchasedTulips = Number(input[2]);
    let seasons = input[3];
    let whetherDayHoliday = input[4];

        let priceChrysanthemums = 0;
        let priceRoses = 0;
        let  priceTulips = 0;//, totalprice = 1;
        if (seasons == "Spring" || seasons == "Summer"){
            priceChrysanthemums = 2 * purchasedChrysanthemums;
            priceRoses = 4.1 * purchasedRoses;
            priceTulips = 2.5 * purchasedTulips;
        }

        if (seasons === "Autumn" || seasons === "Winter"){
            priceChrysanthemums = 3.75 * purchasedChrysanthemums;
            priceRoses = 4.5 * purchasedRoses;
            priceTulips = 4.15 * purchasedTulips;
        }

        let totalprice = priceChrysanthemums + priceRoses + priceTulips;
        //if (holiday == "N")
        //{
        //    totalprice = purchasedChrysanthemums * priceChrysanthemums + purchasedRoses * priceRoses + purchasedTulips * priceTulips;
        //}
        if (purchasedTulips > 7 && seasons === "Spring"){
            totalprice *= 0.95;//= totalprice - totalprice * 5 / 100;
        }

        if ((purchasedRoses >= 10) && (seasons === "Winter")){
            totalprice *= 0.90;//= totalprice - totalprice * 10 / 100;
        }

        if (whetherDayHoliday === "Y"){
            totalprice *= 1.15;//= (purchasedChrysanthemums * priceChrysanthemums + purchasedRoses * priceRoses + purchasedTulips * priceTulips) * 1.15;
                               // + ((purchasedChrysanthemums * priceChrysanthemums + purchasedRoses * priceRoses + purchasedTulips * priceTulips) * 15 / 100);
        }

        if (purchasedRoses + purchasedTulips + purchasedChrysanthemums >= 20){
            totalprice *= 0.80;//= totalprice - totalprice * 20 / 100;
        }
        console.log(`${(totalprice + 2).toFixed(2)}`);
    }


flowersAgain(["2", "4", "8", "Spring", "Y"]); // 46.14
flowersAgain(["3", "10", "9", "Winter", "N"]); // 69.39
flowersAgain(["10", "10", "10", "Autumn", "N"]); // 101.20
