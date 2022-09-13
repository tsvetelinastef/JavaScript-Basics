function triangleArea(input){
    let oneSide = Number(input[0]);
    let height = Number(input[1]);

    let area = oneSide * height / 2;
    console.log(area.toFixed(2));
}

triangleArea(["20", "30"]);
