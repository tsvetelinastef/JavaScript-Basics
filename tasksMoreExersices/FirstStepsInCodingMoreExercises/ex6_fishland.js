function fishland(input){
    let priceMackerel = Number(input[0]);
    let priceSprat = Number(input[1]);
    let kgBonito = Number(input[2]);
    let kgSaffron = Number(input[3]);
    let kgMussels = Number(input[4]);

    let priceBonito = priceMackerel + priceMackerel * 0.60;
    let sumBonito = kgBonito * priceBonito;
    let priceSaffron = priceSprat + priceSprat * 0.80;
    let sumSaffron = kgSaffron * priceSaffron;
    let sumMussels = kgMussels * 7.50;
    let finalPrice = sumBonito + sumSaffron + sumMussels;
    console.log(finalPrice.toFixed(2));
} 

fishland(["6.90", "4.20", "1.5", "2.5", "1"]);
fishland(["5.55", "3.57", "4.3", "3.6", "7"]);