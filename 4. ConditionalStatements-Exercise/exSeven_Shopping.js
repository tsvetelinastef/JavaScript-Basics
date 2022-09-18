function shopping(input){

    // !!!!!  100 out of 100   !!!!!
    let budget = Number(input[0]);
    let numberGPUs = Number(input[1]);
    let numberCPUs = Number(input[2]);
    let numberRAMs = Number(input[3]);
    
    let moneyLeft = 0;

    let gpusPrice = numberGPUs * 250;

    let cpusPrice = gpusPrice * 0.35;
    let ramsPrice = gpusPrice * 0.10;
    let ramQuantWanted = ramsPrice * numberRAMs;

    let total = gpusPrice + cpusPrice * numberCPUs + ramQuantWanted;
    
    if (numberGPUs >= numberCPUs) {
        total = total * 0.85;   
    }

    moneyLeft = Math.abs(budget - total);
    if (total <= budget) {
        console.log(`You have ${moneyLeft.toFixed(2)} leva left!`);
    } else {
         moneyLeft = Math.abs(budget - total);
        console.log(`Not enough money! You need ${(total - budget).toFixed(2)} leva more!`);
    }
    
}

shopping(["900", "2", "1", "3"]);
shopping(["920.45", "3", "1", "1"]);
