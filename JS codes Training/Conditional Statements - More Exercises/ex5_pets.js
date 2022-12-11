function pets(input) {
    let numberDays = Number(input[0]);
    let leftFoodKg = Number(input[1]);
    let foodPerDayDogKg = Number(input[2]);
    let foodPerDayCatKg = Number(input[3]);
    let foodDagTortoise = Number(input[4]);

    let neededDogFood = numberDays * foodPerDayDogKg;
    let neededCatFood = numberDays * foodPerDayCatKg;
    let neededTortoiseFood = (numberDays * foodDagTortoise) / 1000;
    let food = neededDogFood + neededCatFood + neededTortoiseFood;

    if (food <= leftFoodKg) {
        let leftFood = leftFoodKg - food;
        console.log(`${Math.floor(leftFood)} kilos of food left.`)
    } else {
        let neededFood = food - leftFoodKg;
        console.log(`${Math.ceil(neededFood)} more kilos of food are needed.`);
    }

}

pets(["2", "10", "1", "1", "1200"]);
pets(["5", "10", "2.1", "0.8", "321"]); 