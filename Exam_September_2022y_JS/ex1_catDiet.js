function solve(input) {
    let fats = Number(input[0]);
    let proteins = Number(input[1]);
    let carbs = Number(input[2]);
    let calories = Number(input[3]);
    let water = Number(input[4]);
    
    
    let totalFats = (calories * fats / 100) / 9;
    let totalProteins = (calories * proteins / 100) / 4;
    let totalCarbs = (calories * carbs / 100) / 4;
    
    let foodWeight = totalCarbs + totalFats + totalProteins;
    
    let caloriesPerGram = calories / foodWeight;
    
    let waterPerc = (100 - water) / 100;
    let perOne = caloriesPerGram * waterPerc;
    
    console.log(`${perOne.toFixed(4)}`);
    
    
    }


    //solve(["40", "40", "20", "3000", "40"]);

