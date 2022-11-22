function pipesInPool(input) {
    let v = Number(input[0]);
    let p1 = Number(input[1]);
    let p2 = Number(input[2]);
    let h = Number(input[3]);

    let firstPipe = p1 * h;
    let secondPipe = p2 * h;
    let totalPipes = firstPipe + secondPipe;

    if (totalPipes < v) {

        console.log(`The pool is ${ }% full. Pipe 1: ${ }%. Pipe 2: ${ }%.`);
    } else {
        console.log(`For ${} hours the pool overflows with ${ } liters.`);

    }

}

pipesInPool(["1000", "100", "120", "3"]);
