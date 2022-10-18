/*  Магазин за компютърни игри ви наема за да направите статистика на 
процента продажби на игрите от последния месец, като изчислите по колко
процента от общите продажби са за някоя от игрите.
Процентите трябва да бъдат разделени на четири части, три заглавия на 
игри и всички останали:
 Hearthstone
 Fornite
 Overwatch
 Others
Вход
От конзолата се четат:
• Брой продадени игри- n - цяло положително число в интервала [1… 100]
За следващите n реда се чете по един ред:
o Име на игра - текст
Изход
На конзолата да се изпишат четири реда:
"Hearthstone - {процент продажби на Hearthstone}%"
"Fornite - {процент продажби на Fornite}%"
"Overwatch - {процент продажби на Overwatch}%"
"Others - {процент продажби на всички останали игри}%"
Резултатът да бъде закръглен до втората цифра след десетичния знак.*/

function pCGameShop(input) {
    //let index = 0; 
    //let n = Number(input[0]);
    let n = Number(input.shift());

    let hearthstoneCounter = 0;
    let forniteCounter = 0;
    let overwatchCounter = 0;
    let othersCounter = 0;

    for (let i = 0; i < n; i++) {
       // let gameName = input[index++];
       let gameName = input.shift();
        switch (gameName) {
            case "Hearthstone":
                hearthstoneCounter++;
                break;
            case "Fornite":
                forniteCounter++;
                break;
            case "Overwatch":
                overwatchCounter++;
                break;
            default:
                othersCounter++;
                break;
        }
    }

    console.log(`Hearthstone - ${((hearthstoneCounter   / n) * 100).toFixed(2)}%`);
    console.log(`Fornite - ${((forniteCounter  / n ) * 100).toFixed(2)}%`);
    console.log(`Overwatch - ${(( overwatchCounter  / n)  * 100).toFixed(2)}%`);
    console.log(`Others - ${((othersCounter  / n) * 100).toFixed(2)}%`);

}

pCGameShop(["4", "Hearthstone", "Fornite", "Overwatch", "Counter-Strike"]);
/* Hearthstone - 25.00%
Fornite - 25.00%
Overwatch - 25.00%
Others - 25.00% */
pCGameShop(["3", "Hearthstone", "Diablo 2", "Star Craft 2"]);
/* Hearthstone - 33.33%
Fornite - 0.00%
Overwatch - 0.00%
Others - 66.67% */

