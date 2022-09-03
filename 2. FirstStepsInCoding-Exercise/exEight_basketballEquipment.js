function basketballEquipment(input){
    let annualTaxBasketballTrainings = Number(input[0]);
    let priceBasketballSneakers = annualTaxBasketballTrainings - (annualTaxBasketballTrainings * 0.40);
    let priceBasketballEquipment = priceBasketballSneakers - (priceBasketballSneakers * 0.20);
    let priceBasketballBall = (1 * priceBasketballEquipment) / 4;
    let priceBasketballAccessories = (1 * priceBasketballBall) / 5;
    let total = annualTaxBasketballTrainings + priceBasketballSneakers + priceBasketballEquipment + priceBasketballBall + priceBasketballAccessories;
    console.log(total);
} 
basketballEquipment(["550 "]);