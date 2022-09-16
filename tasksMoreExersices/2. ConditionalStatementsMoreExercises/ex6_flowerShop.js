function flowerShop(input) {
    let magnolias = Number(input[0]);
    let hyacinths = Number(input[1]);
    let roses = Number(input[2]);
    let cactuses = Number(input[3]);
    let pricePresent = Number(input[4]);


    let sum = magnolias * 3.25 + hyacinths * 4 + roses * 3.5 + cactuses * 8;
    let taxes = 0.05 * sum;
    let profit = sum - taxes;

    if (pricePresent > profit) {
        let finalSum = Math.ceil(pricePresent - profit);
        console.log(`She will have to borrow ${finalSum} leva.`);
    } else {
        let total = Math.floor(profit - pricePresent);
        console.log(`She is left with ${total} leva.`);
    }
}

flowerShop(["2", "3", "5", "1", "50"]); // 9 
flowerShop(["15", "7", "5", "10", "100"]); // 65 