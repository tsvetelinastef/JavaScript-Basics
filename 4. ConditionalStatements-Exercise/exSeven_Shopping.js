function shopping(input){
    let budget = Number(input[0]);
    let videoCards = Number(input[1]);
    let processors = Number(input[2]);
    let ramMemory = Number(input[3]);


    let sumVideoCards = videoCards * 250;

    let priceProcessors = 0.35 * sumVideoCards;
    let sumProcessors = processors * priceProcessors;

    let priceRamMemory = 0.10 * sumVideoCards;
    let sumRamMemory = ramMemory * priceRamMemory;

    let allSum = sumVideoCards + sumProcessors + sumRamMemory;

    if(videoCards >= processors){
        let finalSum = allSum - (allSum * 0.15);

        let moneyLeft = Math.abs(budget - finalSum);
        if(finalSum <= budget){
            console.log(`You have ${moneyLeft.toFixed(2)} leva left!`);
        } else if (finalSum > budget) {
            console.log(`Not enough money! You need ${moneyLeft.toFixed(2)} leva more!`);
        }
    }

}
shopping(["900", "2", "1", "3"]);
shopping(["920.45", "3", "1", "1"]);