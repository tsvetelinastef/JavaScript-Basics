function celsiusToFahrenheit(input) {
    let degrees = Number(input[0]);
    let farenhait = (degrees * 1.8) + 32;
    console.log(`${farenhait.toFixed(2)}`);
}

celsiusToFahrenheit(["25"]);
celsiusToFahrenheit(["0"]);
celsiusToFahrenheit(["-5.5"]);
celsiusToFahrenheit(["32.3"]);


