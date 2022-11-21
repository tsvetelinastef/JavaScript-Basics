function trainingLab(input) {
    let w = Number(input[0]);
    let h = Number(input[1]);

    let areaWidth = h * 100;
    let withoutCorridor = areaWidth - 100;
    let desks = Math.floor(withoutCorridor / 70);

    let areaLenght = w * 100;
    let rows = Math.floor(areaLenght / 120);

    let numberPlaces = (desks * rows) - 3;
    console.log(`${Math.round(numberPlaces)}`);
}

trainingLab(["15", "8.9"]);
trainingLab(["8.4", "5.2"]);
