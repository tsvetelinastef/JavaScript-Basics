function flowerShop(input){
    let magnolias = Number(input[0]);
    let hyacinths = Number(input[1]);
    let rosses = Number(input[2]);
    let cactuses = Number(input[3]);
    let presents = Number(input[4]);

    let sum = magnolias * 3.25 + hyacinths * 4.0 + rosses * 3.50 + cactuses * 8.0;
    let taxes =  sum - (0.05 * sum);

    if(presents > taxes){
        let moneyNeeded = presents - taxes;
        console.log(`She will have to borrow ${Math.ceil(moneyNeeded)} leva.`);
    } else {
        let moneyLeft = taxes - presents;
        console.log(`She is left with ${Math.floor(moneyLeft)} leva.`);
    }
} 

flowerShop(["2", "3", "5", "1", "50" ]);
flowerShop([ "15", "7", "5", "10", "100"]);

/* •	Магнолии – 3.25 лева
•	Зюмбюли – 4 лева
•	Рози – 3.50 лева
•	Кактуси – 8 лева
От общата сума, Мария трябва да плати 5% данъци.
*/