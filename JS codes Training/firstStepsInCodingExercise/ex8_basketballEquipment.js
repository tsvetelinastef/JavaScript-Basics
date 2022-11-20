function basketballEquipment(input) {
    let annualTax = Number(input[0]);

    let priceBasketballSneakers = annualTax - (annualTax * (40 / 100));
    let priceBasketballEquipment = priceBasketballSneakers - (priceBasketballSneakers * 0.20);
    let priceBasketballBall = priceBasketballEquipment / 4;
    let priceBasketballAccessoaries = priceBasketballBall / 5;

    let total = annualTax + priceBasketballSneakers + priceBasketballEquipment + priceBasketballBall + priceBasketballAccessoaries;
    console.log(total);
}

basketballEquipment(["365"]);
basketballEquipment(["550"]);
