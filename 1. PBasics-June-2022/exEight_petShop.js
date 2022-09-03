function petShop(input){
    let dogsFood = Number(input[0]);
    let catsFood = Number(input[1]);
    let priceDogsFood = dogsFood * 2.50;
    let priceCatsFood = catsFood * 4;
    let totalSum = priceDogsFood + priceCatsFood;
    console.log(`${totalSum} lv.`);
}
petShop(["13", "9"]);