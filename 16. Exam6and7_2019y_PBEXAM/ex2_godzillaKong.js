function godzillaKong(input) {
    let budgetFilm = Number(input[0]);
    let numberExtras = Number(input[1]);
    let priceOutfit = Number(input[2]);

    let finalSum = 0;
    let moneyLeft = 0;
    let sumOutfit = 0;
    let discoutOutfit = 0;
    let decor = 0;
    let moneyNeeded = 0;
    

    //let priceLeft = decor - finalSum;

    if (numberExtras >= 150) {
        discoutOutfit = sumOutfit * 0.10;
        sumOutfit = numberExtras * priceOutfit;
        finalSum = discoutOutfit + sumOutfit;
        
    } else {
        decor = 0.10 * budgetFilm;
        sumOutfit = numberExtras * priceOutfit;
        finalSum = decor + sumOutfit;
    }


    moneyLeft = budgetFilm - finalSum;
    moneyNeeded = finalSum - budgetFilm;
    if (moneyLeft >= budgetFilm) {
        console.log("Not enough money!");
        console.log(`Wingard needs ${Math.abs(moneyNeeded).toFixed(2)} leva more.`);
    } else {
        console.log("Action!");
        console.log(`Wingard starts filming with ${Math.abs(moneyLeft).toFixed(2)} leva left.`);
    }

}

//godzillaKong(["20000", "120", "55.5"]);
/* Action!
Wingard starts filming with 11340.00 leva left. */

//godzillaKong(["15437.62", "186", "57.99"]);
/* Action!
Wingard starts filming with 4186.33 leva left. */

godzillaKong(["9587.88", "222", "55.68"]);
/* Not enough money!
Wingard needs 2495.77 leva more.  */




