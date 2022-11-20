function suppliesForSchool(input) {
    let numberPens = Number(input[0]);
    let numberMarkers = Number(input[1]);
    let cleanerForBoard = Number(input[2]);
    let percentDiscount = Number(input[3]);

    let pricePens = numberPens * 5.80;
    let priceMarkers = numberMarkers * 7.20;
    let priceCleaner = cleanerForBoard * 1.20;
    let priceAllMaterials = pricePens + priceMarkers + priceCleaner;
    let priceDiscount = priceAllMaterials - (priceAllMaterials * (percentDiscount / 100));
    console.log(priceDiscount);
}

suppliesForSchool(["2 ", "3 ", "4 ", "25 "]);
suppliesForSchool(["4 ", "2 ", "5 ", "13 "]);
