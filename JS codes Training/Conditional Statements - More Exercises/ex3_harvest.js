function harvest(input) {
    let x = Number(input[0]);
    let y = Number(input[1]);
    let z = Number(input[2]);
    let workers = Number(input[3]);

    let allgrape = x * y;
    let wine = Math.floor(0.40 * allgrape / 2.5);

    if (wine <= z) {
        let neededWine = Math.round(Math.abs(z - wine));
        //let winePerOnePerson = Math.floor(neededWine / workers);
        console.log(`It will be a tough winter! More ${neededWine} liters wine needed.`);
    } else {
        let wineLeft = Math.abs(z - wine);
        let winePerOnePerson = wineLeft / workers;
        console.log(`Good harvest this year! Total wine: ${wine} liters.`);
        console.log(`${wineLeft} liters left -> ${winePerOnePerson} liters per person.`)
    }
}

harvest(["650", "2", "175", "3 "]);
harvest(["1020", "1.5", "425", "4"]);


/*
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
*/
