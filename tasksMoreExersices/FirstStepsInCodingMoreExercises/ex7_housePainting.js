function housePainting(input){
    let x = Number(input[0]);
    let y = Number(input[1]);
    let h = Number(input[2]);

    let side = x * y;
    let windows = 1.5 * 1.5;
    let twoSides = 2 * side - 2 * windows; 
    let backSide = x * x;
    let enter = 1.2 * 2;
    let finalFrontBack = 2 * backSide - enter;
    let area = twoSides + finalFrontBack;
    let greenPaint = area / 3.4;
    console.log(greenPaint.toFixed(2));

    let roof = 2 * (x * y);
    let twoTriangles = 2 * (x * h/ 2);
    let finalArea = roof + twoTriangles;
    let redPaint = finalArea / 4.3;
    console.log(redPaint.toFixed(2));
} 

housePainting(["6", "10", "5.2"]);
housePainting(["10.25", "15.45", "8.88"]);