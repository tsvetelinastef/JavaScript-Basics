function maxNumber(input){
    let inputElement = input[0];
    let index = 1;
    let maxNumber = Number.MIN_SAFE_INTEGER;

    while(inputElement !== 'Stop'){
        let currentNum = Number(inputElement);
        if(currentNum > maxNumber){
            maxNumber = currentNum;
        }
        inputElement = input[index];
        index++;
    }

    console.log(maxNumber);
} 

maxNumber(["100","99","80","70","Stop"]);
//maxNumber(["-10","20","-30","Stop"]);
//maxNumber(["45","-20","7","99","Stop"]);
//maxNumber(["999", "Stop"]);
//maxNumber(["-1","-2","Stop"]);
