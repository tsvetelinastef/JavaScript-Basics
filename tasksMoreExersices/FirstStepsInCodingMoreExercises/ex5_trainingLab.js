function trainingLab(input){
    let w = Number(input[0]);
    let h = Number(input[1]);

    let height = h * 100;
    let corridor = height - 100;
    let desks = Math.floor(corridor / 70);

    let width = w * 100;
    let rows = Math.floor(width / 120);

    let final = (desks * rows) - 3;
    console.log(final.toFixed(0));
}

trainingLab(["15", "8.9"]);
//trainingLab(["8.4", "5.2"]);