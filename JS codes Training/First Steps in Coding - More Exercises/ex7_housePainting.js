function housePainting(input) {
    let x = Number(input[0]);
    let y = Number(input[1]);
    let h = Number(input[2]);

    let totalArea = 0;

    let side = x * y;
    let window = 1.5 * 1.5;
    let twoSides = 2 * side - 2 * window;
    let backWall = x * x;
    let enter = 1.2 * 2;
    let totalFrontBack = 2 * backWall - enter;
    totalArea = twoSides + totalFrontBack;
    let greenPaint = totalArea / 3.4;
    console.log(greenPaint.toFixed(2));

    let twoRectangles = 2 * (x * y);
    let twoTriangles = 2 * (x * h / 2);
    totalArea = twoRectangles + twoTriangles;
    let redPaint = totalArea / 4.3;
    console.log(redPaint.toFixed(2));
}

housePainting(["6", "10", "5.2"]);
housePainting(["10.25", "15.45", "8.88"]);
