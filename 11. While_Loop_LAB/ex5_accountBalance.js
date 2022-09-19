function accountBalance(input){
    let totalSum = 0;
    let index = 0;
    let crrentInput = input[index];

    while(crrentInput !== "NoMoreMoney"){
        let inputAsNumber = Number(crrentInput);
        if(inputAsNumber < 0){
            console.log('Invalid operation!');
            break;
        } 
        totalSum += inputAsNumber;
        console.log(`Increase: ${inputAsNumber.toFixed(2)}`);
        index++;
        crrentInput = input[index];
    }
    console.log(`Total: ${totalSum.toFixed(2)}`);
} 

accountBalance(["5.51", "69.42","100","NoMoreMoney"]);
accountBalance(["120","45.55","-150"]);