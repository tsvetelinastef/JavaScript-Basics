function basketballEquipment(input){
    let annualTax = Number(input[0]);

    let basketballSneakers = annualTax * 0.60;
    let basketballEquipment = basketballSneakers * 0.80;
    let basketballBall = basketballEquipment / 4;
    let basketballAccessories = basketballBall / 5;

    let finalSum = annualTax + basketballSneakers + basketballEquipment + basketballBall + basketballAccessories;
    console.log(finalSum.toFixed(2));
}

basketballEquipment(["320"]);
basketballEquipment(["550"]);
basketballEquipment(["230"]);
