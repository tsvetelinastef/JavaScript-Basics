function harvest(input) {
    let x = Number(input[0]);
    let y = Number(input[1]);
    let z = Number(input[2]);
    let workers = Number(input[3]);

    let allgrape = x * y;
    let wine = Math.floor(0.40 * allgrape / 2.5);

    if (wine >= z) {
        let wineLeft = Math.ceil(wine - z);
        let winePerOnePerson = Math.ceil(wineLeft / workers);
        console.log(`Good harvest this year! Total wine: ${wine} liters.`);
        console.log(`${wineLeft} liters left -> ${winePerOnePerson} liters per person.`)
   
        } else {
            let neededWine = 0.40 * allgrape/ 2.5;
        let neeeded = Math.floor(z - neededWine);
        console.log(`It will be a tough winter! More ${neeeded} liters wine needed.`);
         }
}

harvest(["650", "2", "175", "3 "]);
harvest(["1020", "1.5", "425", "4"]);

        
