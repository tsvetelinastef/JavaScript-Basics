function foodDelivery(input) {
    let chickenMenus = Number(input[0]);
    let fishMenus = Number(input[1]);
    let vegetarianMenus = Number(input[2]);

    let priceChickenMenu = chickenMenus * 10.35;
    let priceFishMenu = fishMenus * 12.40;
    let priceVegetarianMenus = vegetarianMenus * 8.15;

    let finalPriceMenu = priceChickenMenu + priceFishMenu + priceVegetarianMenus;
    let priceDessert = finalPriceMenu * 0.2;
    let total = finalPriceMenu + priceDessert + 2.50;
    console.log(total);
}

foodDelivery(["2 ", "4 ", "3 "]);
foodDelivery(["9 ", "2 ", "6 "]);
