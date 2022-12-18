function multiplyBy2(input) {
    let index = 0;
    let x = 0;

    for (let i = 1; i > 0; i++) {
        x = Number(input[index]);
        index++;

        if (x < 0) {
            console.log("Negative number!");
            break;
        } else {
            let result = x * 2;
            console.log(`Result: ${result.toFixed(2)}`);
        }
    }
}


//multiplyBy2(["12", "43.2144", "12.3", "543.23", "-20"]);
multiplyBy2(["23.43", "12.3245", "0", "65.23432", "23", "65", "-12"]);
//multiplyBy2(["-123"]);