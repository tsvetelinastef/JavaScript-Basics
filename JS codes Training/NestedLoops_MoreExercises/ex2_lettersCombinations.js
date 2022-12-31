function lettersCombinations(input){
    let startLetter = input[0];
    let endLetter = input[1];
    let specialLetter = input[2];

    let letterA = "";
    let letterB = "";
    let letterC = "";

    let counter = 0;
    let res = "";

    for(let i = startLetter.charCodeAt(0); i <= endLetter.charCodeAt(0); i++){
        for(let j = startLetter.charCodeAt(0); j <= endLetter.charCodeAt(0); j++){
            for (let k = startLetter.charCodeAt(0); k <= endLetter.charCodeAt(0);k++ ) {
                letterA = String.fromCharCode(i);
                letterB = String.fromCharCode(j);
                letterC = String.fromCharCode(k);

                if(letterA !== specialLetter && letterB !== specialLetter && letterC !== specialLetter){
                    res += ` ${letterA}${letterB}${letterC}`;
                    counter++;
                }
            } 
        }
    }
    console.log(`${res} ${counter}`);
}

lettersCombinations(["a", "c", "b"]);
//lettersCombinations(["f", "k", "h"]);
//lettersCombinations(["a", "c", "z"]); 