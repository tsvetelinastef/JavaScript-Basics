function christmasPreparation(input){
    let priceHolidayPaper = 5.80;
    let priceHolidayClothing = 7.20;
    let priceGlue = 1.20;

    let numberHolidayPaper = Number(input[0]);
    let numberHolidayClothing = Number(input[1]);
    let numberGlue = Number(input[2]);
    let percentDiscount = (Number(input[3])) / 100;

    let priceTotalPaper = priceHolidayPaper * numberHolidayPaper;
    let priceTotalClothing = priceHolidayClothing * numberHolidayClothing;
    let priceTotalGlue = priceGlue * numberGlue;

    let totalPrice = (priceTotalPaper + priceTotalClothing + priceTotalGlue) * (1 - percentDiscount);

    console.log(`${totalPrice.toFixed(3)}`);
}

christmasPreparation((["2", "3", "2.5", "25"]));
christmasPreparation(["4", "2", "5", "13"]);
christmasPreparation(["7", "8", "0.5", "45"]);

/* let numberHolidayPaper = Number(input[0]);
    let numberHolidayClothing = Number(input[1]);
    let numberGlue = Number(input[2]);
    let percentDiscount = Number(input[3]);

    let pricePaper = numberHolidayPaper * 5.80;
    let priceClothing = numberHolidayClothing * 7.20;
    let priceGlue = numberGlue * 1.20;

    let sum = pricePaper + priceClothing + priceGlue;
    let priceWithDiscount = sum - (sum *  0.25);

    console.log(`${priceWithDiscount.toFixed(3)}`);*/

