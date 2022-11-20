function petShop(input) {
    let foodDogs = Number(input[0]);
    let foodCats = Number(input[1]);
    let priceFoodDogs = foodDogs * 2.50;
    let priceFoodCats = foodCats * 4;
    let finalPrice = priceFoodCats + priceFoodDogs;
    console.log(`${finalPrice} lv.`);
}

petShop(["5 ", "4 "]);