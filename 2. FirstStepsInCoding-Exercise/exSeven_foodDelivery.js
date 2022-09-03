function foodDelivery(input){
    let chickenMenu = Number(input[0]);
    let fishMenu = Number(input[1]);
    let veganMenu = Number(input[2]);

    let priceChickenMenu = chickenMenu * 10.35;
    let priceFishMenu = fishMenu * 12.40;
    let priceVeganMenu = veganMenu * 8.15;
    let totalSum = priceChickenMenu + priceFishMenu + priceVeganMenu;
    let priceDessert = 0.2 * totalSum;
    let total = totalSum + priceDessert + 2.50;
    console.log(total); 
} 
foodDelivery(["9 ", "2 ", "6 "]);