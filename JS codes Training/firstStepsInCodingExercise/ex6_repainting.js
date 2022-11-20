function repainting(input) {
    let quantityNylon = Number(input[0]);
    let quantityPaint = Number(input[1]);
    let quantityDiluent = Number(input[2]);
    let hours = Number(input[3]);

    let priceNylon = (quantityNylon + 2) * 1.50;
    let pricePaint = (quantityPaint + (quantityPaint * 0.1)) * 14.50;
    let priceDiluent = quantityDiluent * 5.00;
    let finalSumMaterials = priceNylon + pricePaint + priceDiluent + 0.40;
    let priceCraftsman = (finalSumMaterials * (30 / 100)) * hours;
    let finalPrice = finalSumMaterials + priceCraftsman;
    console.log(finalPrice);
}

repainting(["10 ", "11 ", "4 ", "8 "]);
repainting(["5 ", "10 ", "10 ", "1 "]);
