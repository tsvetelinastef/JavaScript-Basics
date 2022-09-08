function tennisRanklist(input) {
    let index = 0;

    let countTournaments = Number(input[index]);
    index++;

    let startPoints = Number(input[index]);
    index++;

    let currentPoints = 0;
    let winCounter = 0;
    for (let i = 0; i < countTournaments; i++) {
        let result = input[index];
        index++;

        switch (result) {
            case "W":
                winCounter++;
                currentPoints += 2000;
                break;
            case "F":
                currentPoints += 1200;
                break;
            case "SF":
                currentPoints += 720;
                break;
        }
    }

    let finalPoints = startPoints + currentPoints;
    let avgPoints = Math.floor(currentPoints/ countTournaments); // current tournaments 
    let procreate = winCounter / countTournaments * 100;  // percent wins

    console.log(`Final points: ${finalPoints}`);
    console.log(`Average points: ${avgPoints}`);
    console.log(`${procreate.toFixed(2)}%`);
}

tennisRanklist(["5", "1400", "F", "SF", "W", "W", "SF"]);
//tennisRanklist(["4", "750", "SF", "W", "SF", "W"]);
//tennisRanklist(["7", "1200", "SF", "F", "W", "F", "W", "SF", "W"]);