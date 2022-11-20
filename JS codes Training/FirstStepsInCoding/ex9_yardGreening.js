function yardGreening(input) {
    let cubicMetersForrGreenering = Number(input[0]);
    let finalPriceGreening = cubicMetersForrGreenering * 7.61;
    let discount = finalPriceGreening * 0.18;
    let finalPrice = finalPriceGreening - discount;
    console.log(`The final price is: ${finalPrice} lv.`);
    console.log(`The discount is: ${discount} lv.`);
}

yardGreening(["550"]);