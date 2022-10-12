/* Ани обича да пътува и иска тази година да посети няколко различни
дестинации. Като си избере дестинация, ще прецени колко пари ще
й трябват, за да отиде до там и ще започне да спестява. Когато е
спестила достатъчно, ще може да пътува.
Функцията получава масив, като всеки път ще се четат първо 
дестинацията и минималния бюджет, който ще е нужен за пътуването. 
След това ще се четат няколко суми, които Ани спестява като работи 
и когато успее да събере достатъчно за 
пътуването, ще заминава, като на конзолата трябва да се изпише:
"Going to {дестинацията}!"
Когато е посетила всички дестинации, които иска, вместо дестинация 
ще въведе "End" и програмата ще 
приключи.  
================================================================
Ani loves to travel and she wants to visit different destinations.
When she choose some destination, she will see how much money she
needs to go to there and she will start to saves. When she saves
enough, she can travel. 
Function gets an array, like every time first read will be 
destination and min budget that she needs for the travel.
After that will be read some sums, that Ani saves when she works 
and when she can raise enough for the journey, she will go, like 
on console must read: "Going to {дестинацията}!" 
When she visit all destinations that she wants... instead of
destination she will enter "End" and the program will finish.
*/

function traveling(input){
    let destinationOrEnd = input[0]
    let budget = Number(input[1])
    let savings = 0
    let index = 1

    while (destinationOrEnd !== 'End') {
        index++;

        while (savings < budget) {
            savings += Number(input[index])
            index++
        }

        console.log(`Going to ${destinationOrEnd}!`)
        destinationOrEnd = input[index++]
        budget = Number(input[index])
        savings = 0
    }
}

traveling(["Greece", "1000", "200", "200", "300", "100", "150", "240", "Spain", "1200", "300", "500", "193", "423", "End"]);
// Going to Greece!
// Going to Spain!

traveling(["France", "2000", "300", "300", "200", "400", "190", "258", "360", "Portugal", "1450", "400", "400", "200", "300", "300", "Egypt", "1900", "1000", "280", "300", "500", "End"]);
// Going to France!
// Going to Portugal!
// Going to Egypt!







/*  function traveling(input) {
    let index = 0;
    let destination = input[0]; // държава или "End"
    //стоп -> destination == "End"
    //продължаваме -> destination != "End"

    //let minimalBudget = Number(input[0]);
    while (destination !== "End") {
        // държава - цена
        let excursionPrice = Number(input[0]);
        // събирам пари
        // минималния бюджет, който ще е нужен за пътуването
        let availableMoney = 0;
        //стоп -> availableMoney >= excursionPrice
        //продължава -> availableMoney < excursionPrice
        while (availableMoney < excursionPrice) {
            // След това ще се четат няколко суми, които Ани спестява като работи
            let savedMoney = Number(input[index]);
            index++;
            availableMoney += savedMoney; //  всичките = които
        }
        // налични пари > пари за екскурзията
        console.log(`Going to ${destination}!%n`);
    }
} */