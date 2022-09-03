function yardGreening(input){
    let metersForGreening = Number(input[0]);
    let priceGreeningAllYard = metersForGreening * 7.61;
    let discount = priceGreeningAllYard * 0.18;
    let finalSum = priceGreeningAllYard - discount;
    console.log(`The final price is: ${finalSum} lv.`);
    console.log(`The discount is: ${discount} lv.`);
}
yardGreening(["150"]);