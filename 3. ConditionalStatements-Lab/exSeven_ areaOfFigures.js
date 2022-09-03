function  areaOfFigures(input){
    let type = input[0];

    if(type === "square"){
        let number = Number(input[1]);
        let area = number * number;
        console.log(area.toFixed(3));

    } else if(type === "rectangle"){
        let firstNumber = Number(input[1]);
        let secondNumber = Number(input[2]);
        let area = firstNumber * secondNumber;
        console.log(area.toFixed(3));

    } else if(type === "circle"){
        let radius = Number(input[1]);
        let area = radius * radius * Math.PI;
        console.log(area.toFixed(3));

    } else if(type === "triangle"){
        let length = Number(input[1]);
        let height = Number(input[2]);
        let area = (length * height) / 2;
        console.log(area.toFixed(3));
    }
} 
areaOfFigures(["square", "5"]);