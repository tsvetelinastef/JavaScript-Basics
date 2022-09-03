function godzillaKong(input){
    let filmBudget = Number(input[0]);
    let numberExtras = Number(input[1]);
    let priceOutfit = Number(input[2]);

    let sumDecor = 0.10 * filmBudget;
    let sumOutfit = numberExtras * priceOutfit;
   
   
    if(numberExtras >= 150){
        let discountOutfit = sumOutfit * 0.10;
         sumOutfit = sumOutfit - discountOutfit;
        let finalPrice = sumDecor + sumOutfit;
    }
  
    finalPrice = sumDecor + sumOutfit;
    let moneyLeft = Math.abs(filmBudget - finalPrice);

    if(filmBudget >= finalPrice){
        console.log(`Action!`);
        console.log(`Wingard starts filming with ${moneyLeft.toFixed(2)} leva left.`);
    } else{
        console.log(`Not enough money!`);
        console.log(`Wingard needs ${moneyLeft.toFixed(2)} leva more.`);
    }


} 
godzillaKong((["20000", "120", "55.5"]));
godzillaKong((["15437.62", "186", "57.99"]));
godzillaKong((["9587.88", "222", "55.68"]));

