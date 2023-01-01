function challengeWedding(input) {
    let clientsMan = Number(input[0]);
    let clientsWoman = Number(input[1]);
    let tables = Number(input[2]);

    let counter = 0;
    let isFinished = false;
    let res = "";

    for (let i = 1; i <= clientsMan; i++) {
        for (let j = 1; j <= clientsWoman; j++) {
            res += `(${i} <-> ${j}) `;
            counter++;
            if (counter === tables) {
                isFinished = true;
                break;
            }
        }
        if (isFinished) {
            break;
        }
    }
    console.log(res);

}

challengeWedding(["2", "2", "6"]);
challengeWedding(["2", "2", "3"]);
challengeWedding(["5", "8", "40"]);