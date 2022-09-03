function repainting(input){
    let nylonNeeded = Number(input[0]);
    let paintNeeded = Number(input[1]);
    let thinner = Number(input[2]);
    let hours = Number(input[3]);

    let sumNylon = (nylonNeeded + 2) * 1.50;
    let sumPaint = (paintNeeded + (paintNeeded * (10/ 100))) * 14.50;
    let sumThinner = thinner * 5.00;
    let allSumMaterials = sumNylon + sumPaint + sumThinner + 0.40;
    let sumWorkers = (allSumMaterials * (30/ 100)) * hours;
    let total = allSumMaterials + sumWorkers;
    console.log(total);
} 
repainting(["10 ", "11 ", "4 ", "8 "]);