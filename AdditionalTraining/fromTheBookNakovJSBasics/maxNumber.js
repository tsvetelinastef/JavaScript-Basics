function maxNumber(input){
    //let index = 0;
    let n = Number(input[0]);
    //index++;
    let nextNumber = Number.NEGATIVE_INFINITY;

    for(let i = 1; i <= n; i++){
        let currentNumber = Number(input[i]);
        
       
        //let nextNumber = Number(input[index]);
       // index++;
        if(currentNumber > nextNumber){
            //console.log(nextNumber);
            nextNumber = currentNumber;
        }
    }

    console.log(nextNumber);
} 

maxNumber(["2","100","99"]);