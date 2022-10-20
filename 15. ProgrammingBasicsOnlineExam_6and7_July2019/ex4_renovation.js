/* Пешо решава, че иска да направи ремонт вкъщи. Неговата задача е да
боядиса стените в хола, като знаете височината и ширината на една стена.
Холът на Пешо има 4 стени с еднакви размери, определен процент от които
се заемат от прозорци и врати, които няма да бъдат боядисвани. Той не е 
сигурен дали ще успее наведнъж, затова моли Вас да му помогнете да 
изчисли дали ще му остава още работа за следващия ден и, ако да, колко 
кв. м. има да довърши, а в случай, че успее да боядиса хола, колко боя 
му е останала (трябва да се има предвид, че с един литър боя се боядисва
 един квадратен метър от стената).

Вход
От конзолата се четат следните редове:
1. Височина на стената - цяло число [0… 100]
2. Ширина на стената - цяло число [0… 100]
3. Процент от общата площ на стените, който няма да бъде боядисан - цяло
 число [5… 95]
На следващите редове до получаване на командата "Tired!" или докато не
 бъдат боядисани всички стени, се чете по едно число:
 Литри боя – цяло число [0…100]:
Забележка: Площта за боядисване да бъде закръглена нагоре до най-близкото
 цяло число.

Изход
Да се отпечата на конзолата един от следните редове:
 При получаване на командата "Tired!":
"{квадратни метри} quadratic m left."
{квадратни метри} е повърхнината, която му остава да боядисана.
 Aко е останала боя в излишък:
"All walls are painted and you have {литри боя} l
paint left!"
 Aко след боядисването на всички стени, не е останала боя:
"All walls are painted! Great job, Pesho!" */
 

function renovation(input) {
    let height = Number(input.shift());
    let width = Number(input.shift());
 
    let wallSizeInSqM = height * width;
    let uncoveredPartsPercent = (Number(input.shift())) / 100;
 
    let areaToCover = wallSizeInSqM * 4;
    let totalAreaToCover = Math.ceil(areaToCover - (areaToCover * uncoveredPartsPercent));
 
    let totalAreaCovered = 0;
    let paintQuantityInLiters = input.shift();
    while (paintQuantityInLiters !== "Tired!") {
        paintQuantityInLiters = Number(paintQuantityInLiters);
 
        totalAreaCovered += paintQuantityInLiters;
 
        if (totalAreaCovered >= totalAreaToCover) {
            paintQuantityInLiters = Number(input.shift());
            if (paintQuantityInLiters > 0) {
                totalAreaCovered += paintQuantityInLiters;
            }
            break;
        }
 
        paintQuantityInLiters = input.shift();
    }
 
    let difference = Math.abs(totalAreaCovered - totalAreaToCover);
 
    if (paintQuantityInLiters == "Tired!") {
        console.log(`${difference} quadratic m left.`);

    } else if (totalAreaCovered > totalAreaToCover) {
        console.log(`All walls are painted and you have ${difference} l paint left!`);

    } else if (totalAreaCovered == totalAreaToCover) {
        console.log("All walls are painted! Great job, Pesho!");
    }
   
}

renovation(["3", "5", "10", "2", "3", "4", "Tired!"]);
// 45 quadratic m left. 
renovation(["2", "3", "25", "6", "7", "8"]);
// All walls are painted and you have 3 l paint left!









































/*   let height = Number(input[0]);
    let width = Number(input[1]);
    let percentAreaNotPainted = Number(input[2]);

    let final = height * width * 4;
    let toPaint = Math.ceil(final - final * percentAreaNotPainted / 100);


    let command = input.shift();
    //let command = input[index++];
    while (command !== "Tired!") {
        let litters = Number(input.shift());
       // let litters = Number(input[2]);

        toPaint -= litters;
        if (toPaint <= 0) {
            break;
        }
        command = input.shift();
    }

    if (toPaint === 0) {
        console.log("All walls are painted! Great job, Pesho!");
    } else if (toPaint > 0) {
        console.log(`${toPaint.toFixed(0)} quadratic m left.`);
    } else {
        console.log(`All walls are painted and you have ${(toPaint * (-1)).toFixed(0)} l paint left!`);
    }
*/