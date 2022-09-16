function harvest(input) {
    let xSqmVineyard = Number(input[0]);
    let ySqmGrape = Number(input[1]);
    let zLittersWine = Number(input[2]);
    let workers = Number(input[3]);

    // От лозе с площ X квадратни метри се заделя 40% 
    //от реколтата за производство на вино. От 1 кв.м 
    //лозе се изкарват Y килограма грозде. За 1 литър
    // вино са нужни 2,5 кг. грозде. Желаното количество
    // вино за продан е Z литра.

    // Напишете програма, която пресмята колко вино
    // може да се произведе и дали това количество е 
    //достатъчно. Ако е достатъчно, остатъкът се 
    //разделя по равно между работниците на лозето

    let grape = xSqmVineyard * ySqmGrape;
    let wine = Math.floor(0.40 * grape / 2.5);


    if (wine >= zLittersWine) {
        let remain = Math.ceil(wine - zLittersWine);
        let perPerson = Math.ceil(remain / workers);
        console.log(`Good harvest this year! Total wine: ${wine} liters.`);
        console.log(`${remain} liters left -> ${perPerson} liters per person.`);
    } else {
        let neeededWine = 0.40 * grape / 2.5;
        let neeeded = Math.floor(zLittersWine - neeededWine);
        console.log(`It will be a tough winter! More ${neeeded} liters wine needed.`);
    }
}

harvest(["650", "2", "175", "3"]);
harvest(["1020", "1.5", "425", "4"]);