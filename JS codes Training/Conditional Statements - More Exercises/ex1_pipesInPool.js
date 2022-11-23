function pipesInPool(input) {
    let v = Number(input[0]);
    let p1 = Number(input[1]);
    let p2 = Number(input[2]);
    let h = Number(input[3]);

    let firstPipe = p1 * h;
    let secondPipe = p2 * h;
    let totalPipes = firstPipe + secondPipe;

    let overflow = Math.abs(totalPipes - v);

    let firstPipePercent = (firstPipe / totalPipes) * 100;
    let secondPipePercent = (secondPipe / totalPipes) * 100;
    let percentage = (totalPipes / v) * 100;

    if (totalPipes <= v) {

        console.log(`The pool is ${percentage.toFixed(2)}% full. Pipe 1: ${firstPipePercent.toFixed(2)}%. Pipe 2: ${secondPipePercent.toFixed(2)}%.`);
    } else {

        console.log(`For ${h.toFixed(2)} hours the pool overflows with ${overflow.toFixed(2)} liters.`);
    }
}

pipesInPool(["1000", "100", "120", "3"]);
pipesInPool(["100", "100", "100", "2.5"]);



/* 
   
    function pipesInPool(input) {
    let v = Number(input[0]);
    let p1 = Number(input[1]);
    let p2 = Number(input[2]);
    let h = Number(input[3]);

    let firstPipe = p1 * h;
    let secondPipe = p2 * h;
    let totalPipes = firstPipe + secondPipe;

    //let overflow = Math.abs(total - volume);
    let percentage = (totalPipes / v) * 100;

    if (totalPipes < v) {

        console.log(`The pool is ${percentage.toFixed(2)}% full. Pipe 1: ${((firstPipe / totalPipes) * 100).toFixed(2)}%. Pipe 2: ${((secondPipe / totalPipes) * 100).toFixed(2)}%.`);
    } else {

        console.log(`For ${h.toFixed(2)} hours the pool overflows with ${(Math.abs(totalPipes - v)).toFixed(2)} liters.`);
    }
}

*/

