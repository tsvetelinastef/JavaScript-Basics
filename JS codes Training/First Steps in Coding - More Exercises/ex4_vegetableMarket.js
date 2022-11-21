function vegetableMarket(input) {
    let vegetables = Number(input[0]);
    let fruits = Number(input[1]);
    let kgVegetables = Number(input[2]);
    let kgFruits = Number(input[3]);

    let priceVegetables = vegetables * kgVegetables;
    let priceFruits = fruits * kgFruits;
    let total = (priceVegetables + priceFruits) / 1.94;

    console.log(`${total.toFixed(2)}`);
}

vegetableMarket(["0.194", "19.4", "10", "10"]);
vegetableMarket(["1.5", "2.5", "10", "10"]);
