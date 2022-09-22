function vowelsSum(input) {
    let letter = input[0];

    let bonus = 0;
    for (let i = 0; i < letter.length; i++) {
        let text = letter[i];
        if (text === "a") {
            bonus += 1;
        } else if (text === "e") {
            bonus += 2;
        } else if (text === "i") {
            bonus += 3;
        } else if (text === "o") {
            bonus += 4;
        } else if (text === "u") {
            bonus += 5;
        }
       
    }

    console.log(bonus);
}

//vowelsSum(["hello"]); 
//vowelsSum(["hi"]); 
//vowelsSum(["bamboo"]); 
vowelsSum(["beer"]); 
