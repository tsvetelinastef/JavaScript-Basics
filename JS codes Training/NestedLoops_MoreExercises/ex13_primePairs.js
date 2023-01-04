function primePairs(input){
    let firstPairNumbers = Number(input[0]); // initial Value
    let secondPairNumbers = Number(input[1]);
    let differenceFirstPairNumbers = Number(input[2]);  // Between Starting Ending Values First Pair Numbers
    let differenceSecondPairNumbers = Number(input[3]);

    let isFirstPairPrime = false;
    let isSecondPairPrime = false;

    for (let i = firstPairNumbers; i <= firstPairNumbers + differenceFirstPairNumbers; i++) {
        for (let j = secondPairNumbers; j <= secondPairNumbers + differenceSecondPairNumbers; j++) {
          let firstPair = i;
          for (let k = 2; k < firstPair; k++) {
            if (firstPair % k === 0) {
              isFirstPairPrime = false;
              break;
            }
            isFirstPairPrime = true;
          }
          let secondPair = j;
          for (let l = 2; l < secondPair; l++) {
            if (secondPair % l === 0) {
              isSecondPairPrime = false;
              break;
            }
            isSecondPairPrime = true;
          }
          if (isFirstPairPrime === true && isSecondPairPrime === true) {
            console.log(`${firstPair}${secondPair}`);
          }
        }
      }

}

primePairs(["10", "20", "5", "5"]);
primePairs(["10", "30", "9", "6"]);