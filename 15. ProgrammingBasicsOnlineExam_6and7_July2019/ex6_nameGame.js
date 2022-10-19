/* 
................ СГРЕШЕНА ЗАДАЧА .................

Иван е измислил нова игра в която да се състезава със своите приятели.
Вашата задача е да напишете програма за играта. Всеки играч написва името
си, след това за всяка една буква от името си написва по едно цяло число,
ако числото съвпада с ASCII стойността на съответната буква, играчът 
получава 10 точки, в противен случай, получава само 2 точки.
Победител е играчът с най-много точки в края на играта. В случай, че 
двама играчи имат равен брой точки, печели този, който втори е достигнал
резултата.

Вход
До получаване на командата "Stop" се чете по един ред:
 Име на играча с дължина n - текст
За всеки играч се четат n на брой реда:
 число – цяло число в интервала[0…127]

Изход
Да се отпечата един ред в следния формат:
 "The winner is {името на победителя} with {точките на победителя} points!" */

function nameGame(input) {
    let index = 0;
    
    let name = input[0];
    // let name = input.shift();

    let bestPoints = 0;
    let winner = "";


    while (name !== "Stop") {
        let currentPoints = 0;
        for (let i = 0; i < name.length(); i++) {
            let number = Number(input[index++]);
            //let number = Number(input.shift());

            if (number === name.charAt(i)) {   // number === name.charCodeAt(i)
                currentPoints += 10;
            } else {
                currentPoints += 2;
            }
            index++;
        }

        if (currentPoints >= bestPoints) {
            bestPoints = currentPoints;
            winner = name;
        }

        // name = input.shift();
        // console.log(name);
        // console.log(`---`);

       name = input[index++];
       index++;
        // console.log(name);
        // console.log(name.length);
    }

    console.log(`The winner is ${name} with ${bestPoints} points!`);
} 



nameGame(["Ivan", "73", "20", "98", "110", "Ivo", "80", "65", "87", "Stop"]);
// The winner is Ivan with 24 points!

//nameGame(["Pesho", "124", "34", "111", "97", "99", "Gosho", "98", "124", "88", "76", "18", "Stop"]);
// The winner is Gosho with 10 points!


