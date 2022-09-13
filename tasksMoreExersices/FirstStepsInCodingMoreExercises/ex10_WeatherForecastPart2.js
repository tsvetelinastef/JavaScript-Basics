function weatherForecast(input) {
    let degrees = Number(input[0]);

    if (26.00 <= degrees && degrees <= 35.00) {
        console.log("Hot");
    } else if (20.1 <= degrees && degrees <= 25.9) {
        console.log("Warm");
    } else if (15.00 <= degrees && degrees <= 20.00) {
        console.log("Mild");
    } else if (12.00 <= degrees && degrees <= 14.9) {
        console.log("Cool");
    } else if (5.00 <= degrees && degrees <= 11.9) {
        console.log("Cold");
    } else {
        console.log("unknown");
    }

}

weatherForecast(["16.5"]);
//weatherForecast(["8"]);
//weatherForecast(["22.4"]);
//weatherForecast(["26"]);
//weatherForecast(["0"]);