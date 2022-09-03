function toyShop(input){
    let priceExcursion = Number(input[0]);
    let numberPuzzles = Number(input[1]);
    let numberTalkingDolls = Number(input[2]);
    let numberTeddyBears = Number(input[3]);
    let numberMinions = Number(input[4]);
    let numberTrucks = Number(input[5]);

    let sum = numberPuzzles * 2.60 + numberTalkingDolls * 3 + numberTeddyBears * 4.10 + numberMinions * 8.20 + numberTrucks * 2;
    let numberToys = numberPuzzles + numberTalkingDolls + numberTeddyBears + numberMinions + numberTrucks;
    if (numberToys >= 50){
        sum = sum * 0.75;
    }
    sum = sum * 0.90;
    let diff = Math.abs(priceExcursion - sum);
    if(sum >= priceExcursion){
        console.log(`Yes! ${diff.toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${diff.toFixed(2)} lv needed.`);
    }
} 
toyShop(["320", "8", "2", "5", "5", "1"]);