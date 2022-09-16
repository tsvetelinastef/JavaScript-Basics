function pipesInPool(input) {
    let volume = Number(input[0]);
    let flowRateFirstPipe = Number(input[1]);
    let flowSecondPipe = Number(input[2]);
    let hoursAbsent = Number(input[3]);

    let firstPipe = hoursAbsent * flowRateFirstPipe;
    let secondPipe = hoursAbsent * flowSecondPipe;
    let total = firstPipe + secondPipe;

    let overflow = Math.abs(total - volume);
    
    let firstPercent = ( (flowRateFirstPipe * hoursAbsent) / total) * 100;
    let secondPercent = (( flowSecondPipe * hoursAbsent) / total) * 100;
    let percent = (total /volume ) * 100;

    if (total <= volume) {
       // let percent = final * 0.1;
        //let firstPipePercentage = (firstPipe/final) * 100;
        //let secondPipePercentage = (secondPipe/final) * 100;
        console.log(`The pool is ${percent.toFixed(2)}% full. Pipe 1: ${firstPercent.toFixed(2)}%. Pipe 2: ${secondPercent.toFixed(2)}%.`);
    } else {
        console.log(`For ${hoursAbsent} hours the pool overflows with ${overflow.toFixed(2)} liters.`);
    }
}

pipesInPool(["1000", "100" , "120", "3"]);
pipesInPool([ "100" , "100" , "100", "2.5"]);