function sumNumbers(input){
    let targetNumber = Number(input[0]); // 100 

    let sumOfNumbers = 0;
    let index = 1;
    let currentNumber = Number(input[index]); // 10

    while(sumOfNumbers < targetNumber){  // there isn't any "=" here 
        sumOfNumbers = sumOfNumbers + Number(currentNumber);
        index++;
        currentNumber = input[index]; 
    }
    console.log(sumOfNumbers);
}

sumNumbers(["100","10","20","30","40"]); 
sumNumbers(["20","1","2","3","4","5","6"]);
