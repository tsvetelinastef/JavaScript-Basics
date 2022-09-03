function fruitShop(input) {
    let product = input[0];
    let dayOfWeek = input[1];
    let quantity = input[2];

    switch (dayOfWeek) {
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":
            if (product === "banana") {
                let price = quantity * 2.50;
                console.log(price.toFixed(2));
            } else if (product === "apple") {
                let price = quantity * 1.20;
                console.log(price.toFixed(2));
            } else if (product === "orange") {
                let price = quantity * 0.85;
                console.log(price.toFixed(2));
            } else if (product === "grapefruit") {
                let price = quantity * 1.45;
                console.log(price.toFixed(2));
            } else if (product === "kiwi") {
                let price = quantity * 2.70;
                console.log(price.toFixed(2));
            } else if (product === "pineapple") {
                let price = quantity * 5.50;
                console.log(price.toFixed(2));
            } else if (product === "grapes") {
                let price = quantity * 3.85;
                console.log(price.toFixed(2));
            } else {
                console.log("error");
            }
            break;

        case "Saturday":
        case "Sunday":

            if (product === "banana") {
                let price = quantity * 2.70;
                console.log(price.toFixed(2));
            } else if (product === "apple") {
                let price = quantity * 1.25;
                console.log(price.toFixed(2));
            } else if (product === "orange") {
                let price = quantity * 0.90;
                console.log(price.toFixed(2));
            } else if (product === "grapefruit") {
                let price = quantity * 1.60;
                console.log(price.toFixed(2));
            } else if (product === "kiwi") {
                let price = quantity * 3.00;
                console.log(price.toFixed(2));
            } else if (product === "pineapple") {
                let price = quantity * 5.60;
                console.log(price.toFixed(2));
            } else if (product === "grapes") {
                let price = quantity * 4.20;
                console.log(price.toFixed(2));
            } else {
                console.log("error");
            }
            break;

        default:
            console.log("error"); break;
    }
}
fruitShop(["apple", "Tuesday", "2"]);
fruitShop(["orange", "Sunday", "3"]);
fruitShop(["kiwi", "Monday", "2.5"]);
fruitShop(["grapes", "Saturday", "0.5"]);
fruitShop(["tomato", "Monday", "0.5"]);