function vowelsSum([input]) {
    let text = input;
    let sum = 0;

    for (let i = 0; i < text.length; i++) {
        if (input[i] === "a") {
            sum += 1;
        } else if (input[i] === "e") {
            sum += 2;
        } else if (input[i] === "i") {
            sum += 3;
        } else if (input[i] === "o") {
            sum += 4;
        } else if (input[i] === "u") {
            sum += 5;
        }
    }
    console.log(sum);
}

vowelsSum(["hello"]); // 6   (e+o = 2+4 = 6)
vowelsSum(["bamboo"]); // 9  (a+o+o = 1+4+4 = 9)
vowelsSum(["hi"]); //  3 
vowelsSum(["beer"]);  // 4
