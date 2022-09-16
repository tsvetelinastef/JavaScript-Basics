function pets(input) {
    let numberDays = Number(input[0]);
    let foodRemain = Number(input[1]);
    let kgfoodDog = Number(input[2]);
    let kgfoodCats = Number(input[3]);
    let grfoodTurtoise = Number(input[4]);

    let dogsFood = numberDays * kgfoodDog;
    let catsFood = numberDays * kgfoodCats;
    let turtoiseFood = (numberDays * grfoodTurtoise) / 1000;
    let total = dogsFood + catsFood + turtoiseFood;

    if (total <= foodRemain) {
        let remainingFood = Math.floor(foodRemain - total);
        console.log(`${remainingFood} kilos of food left.`);
    } else {
        let neededFood = Math.ceil(total - foodRemain);
        console.log(`${neededFood} more kilos of food are needed.`);
    }
}

pets(["2", "10", "1", "1", "1200"]); // 3 kilos of food left.
pets(["5", "10", "2.1", "0.8", "321"]); // 7 more kilos of food are needed.