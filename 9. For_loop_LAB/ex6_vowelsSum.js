function vowelsSum(input){
    
    let  text = input[0];
    // SoftUni
    // отпечатваме символи -> позиции
    // начална стойност: 0
    // крайн стойност: дължина - 1
    let sum = 0;
    for (let position = 0; position <= text.length - 1; position++) {
        let symbol = text.charAt(position);
        // проверки дали символа е: a e i o u
        switch (symbol) {
            case "a":
                sum += 1; // sum = sum + 1;
                break;
            case "e":
                sum += 2;
                break;
            case "i":
                sum += 3;
                break;
            case "o":
                sum += 4;
                break;
            case "u":
                sum += 5;
                break;
        }

    }
    
    console.log(sum);

}

vowelsSum(["hello"]);
//vowelsSum(["hi"]);
//vowelsSum(["bamboo"]);
//vowelsSum(["beer"]);