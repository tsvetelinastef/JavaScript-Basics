function avgSum(input) {
    let index = 0;
    let n = Number(input[index++]);

    let currentNumber = Number(input[index++]);
    let sum = 0;
    let result = 0;

    for (let i = 0; i < n; i++) {
        sum += currentNumber;
        currentNumber = Number(input[index++]);
    }
    result = sum / n;
    console.log(result.toFixed(2));
}


avgSum(["4", "3", "2", "4", "2"]);
avgSum(["2", "6", "4"]);
avgSum(["3", "82", "43", "22"]);
avgSum(["4", "95", "23", "76", "23"]);