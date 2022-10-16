/* Преподавателският екип на СофтУни организира работен ден на 
басейн по случай настъпването на лятото. Вашата задача е да 
напишете програма, която да изчислява каква сума трябва да се 
заплати. За всеки един човек от екипа трябва да се заплати 
такса вход. Трябва да имате предвид, че един чадър стига за двама 
души. Знае се, че само 75% от екипа искат шезлонги. 
При изчислението на броя на чадърите и шезлонгите, техният брой 
да се закръгли до по-голямото цяло число. */

function poolDay(input){
    let numberPeople = Number(input[0]);
    let entryTax = Number(input[1]);
    let priceSunLounger = Number(input[2]);
    let priceUmbrella = Number(input[3]);

    let priceEnter = numberPeople * entryTax;
    let sunlounger = Math.ceil(0.75 * numberPeople);
    let taxSunLounger = sunlounger * priceSunLounger;
    let umbrella = Math.ceil(0.50 * numberPeople);
    let Umbrellatax = umbrella * priceUmbrella;

    let total = priceEnter + taxSunLounger + Umbrellatax;
    console.log(`${total.toFixed(2)} lv.`);

}

poolDay(["21", "5.50", "4.40", "6.20"]);
poolDay(["50", "6", "8", "4"]);
poolDay(["100", "8", "6", "4"]);
