function sum(input) {
    let sum = 0;
    while (input != 0) {
        sum = sum + input % 10;
        input = parseInt(input / 10);
    }

    console.log(`The sum of the digits is:${sum}`);
}

//sum(["1234"]);
sum(["564891"]);


// 80 out of 100