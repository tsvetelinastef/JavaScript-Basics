function celsiusToFahrenheit(input) {
    let degrees = Number(input[0]);

    let result = (degrees * 9) / 5 + 32;
    console.log(result.toFixed(2));
}

celsiusToFahrenheit(["25"]);