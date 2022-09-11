function sumNumbers(input){
    let index = 0;
    let n = Number(input[index]);
    index++;

    let sum = 0;
    for(let i = 0; i < n; i++){
        let currentNumber = Number(input[index]);
        index++;
        sum += currentNumber;
    }
    console.log(sum);
}

sumNumbers(["2", "10", "20"]);