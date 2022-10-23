function calc(input) {
    let oneGramFat = 9;
    let oneGramProtein = 4;
    let oneGramCarbs = 4;

    let percentageFat = Number(input[0]);
    let percentageProtein = Number(input[1]);
    let percentageCarbs = Number(input[2]);
    let totalCalories = Number(input[3]);
    let waterRatio = Number(input[4]);

    let totalGrams;
    let gramsProtein;
    let gramsCarbs;
    let caloriesPerGram;
    let calcWaterRatio;
    let finalResult;
    
    gramsFat = (percentageFat * totalCalories / 100) / oneGramFat;
    gramsProtein = (percentageProtein * totalCalories / 100) / oneGramProtein;
    gramsCarbs = (percentageCarbs * totalCalories / 100) / oneGramCarbs;
    totalGrams = gramsCarbs + gramsFat + gramsProtein;
    caloriesPerGram = Number(totalCalories / totalGrams).toFixed(0);
    calcWaterRatio = 100 - waterRatio;
    finalResult = Number(caloriesPerGram * calcWaterRatio / 100).toFixed(3);
 
    console.log(finalResult);
}