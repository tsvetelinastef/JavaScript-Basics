function footballResults(input) {
    let firstMatch = input[0];
    let secondMatch = input[1];
    let thirdMatch = input[2];

    let wins = 0;
    let losses = 0;
    let draws = 0;

    // "2:0" ---> 0 = 2, 1 = : , 2 = 0 that's why 0 and 2 
    let scoreFirstHome = Number(firstMatch.charAt(0));
    let scoreFirstAway = Number(firstMatch.charAt(2));

    if (scoreFirstHome > scoreFirstAway) {
        wins++;
    } else if (scoreFirstHome < scoreFirstAway) {
        losses++;
    } else {
        draws++;
    }

    let scoreSecondHome = Number(secondMatch.charAt(0));
    let scoreSecondAway = Number(secondMatch.charAt(2));

    if (scoreSecondHome > scoreSecondAway) {
        wins++;
    } else if (scoreSecondHome < scoreSecondAway) {
        losses++;
    } else {
        draws++;
    }

    let scoreThirdHome = Number(thirdMatch.charAt(0));
    let scoreThirdAway = Number(thirdMatch.charAt(2));

    if (scoreThirdHome > scoreThirdAway) {
        wins++;
    } else if (scoreThirdHome < scoreThirdAway) {
        losses++;
    } else {
        draws++;
    }

    console.log(`Team won ${wins} games.`);
    console.log(`Team lost ${losses} games.`);
    console.log(`Drawn games: ${draws}`);
}

footballResults(["3:1", "0:2", "0:0"]);
//footballResults(["4:2", "0:3", "1:0"]);
//footballResults(["0:2", "0:1", "3:3"]);