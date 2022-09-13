function vegetableMarket(input){
    let priceVegetables = Number(input[0]);
    let priceFruits = Number(input[1]);
    let kilogramsVegetables = Number(input[2]);
    let kilogramsFruits = Number(input[3]);

    let finalPriceVegetables = priceVegetables * kilogramsVegetables;
    let finalPriceFruits = priceFruits * kilogramsFruits;
    let result = (finalPriceFruits  + finalPriceVegetables) / 1.94;
    console.log(result.toFixed(2));
} 

vegetableMarket(["0.194", "19.4", "10", "10"]);
vegetableMarket(["1.5", "2.5", "10", "10"]);