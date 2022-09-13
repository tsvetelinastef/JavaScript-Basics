function circleAreaAndPerimeter(input){
    let r = Number(input[0]);

    let areaCircle =  Math.PI * r * r;
    let perimeterCircle = 2 * Math.PI * r;
    console.log(areaCircle.toFixed(2));
    console.log(perimeterCircle.toFixed(2));
}

circleAreaAndPerimeter(["3"]);
circleAreaAndPerimeter(["4.5"]);