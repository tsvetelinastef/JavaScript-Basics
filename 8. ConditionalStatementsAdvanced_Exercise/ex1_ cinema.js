function cinema(input) {
    let typeScreening = input[0];
    let r = Number(input[1]);
    let c = Number(input[2]);

    let sum = 0;
    switch (typeScreening) {
        case "Premiere":
            sum = r * c * 12.00;
            console.log(`${sum.toFixed(2)} leva.`);
            break;
        case "Normal":
            sum = r* c  * 7.50;
            console.log(`${sum.toFixed(2)} leva.`);
            break;
        case "Discount":
            sum = r * c * 5.00;
            console.log(`${sum.toFixed(2)} leva.`);
            break;
    }


}
cinema(["Premiere", "10", "12"]);
cinema(["Normal", "21", "13"]);
cinema(["Discount", "12", "30"]);