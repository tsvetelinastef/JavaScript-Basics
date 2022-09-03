function smallShop(input) {
    let product = input[0];
    let town = input[1];
    let quantity = Number(input[2]);
    switch (town) {
        case "Sofia":
            if (product === "coffee") {
                let price = quantity * 0.50;
                console.log(price);
            } else if (product === "water") {
                let price = quantity * 0.80;
                console.log(price);
            } else if (product === "beer") {
                let price = quantity * 1.20;
                console.log(price);
            } else if (product === "sweets") {
                let price = quantity * 1.45;
                console.log(price);
            } else if (product === "peanuts") {
                let price = quantity * 1.60;
                console.log(price);
            }
            break;
        case "Plovdiv":
            if (product === "coffee") {
                let price = quantity * 0.40;
                console.log(price);
            } else if (product === "water") {
                let price = quantity * 0.70;
                console.log(price);
            } else if (product === "beer") {
                let price = quantity * 1.15;
                console.log(price);
            } else if (product === "sweets") {
                let price = quantity * 1.30;
                console.log(price);
            } else if (product === "peanuts") {
                let price = quantity * 1.50;
                console.log(price);
            }
            break;
        case "Varna":
            if (product === "coffee") {
                let price = quantity * 0.45;
                console.log(price);
            } else if (product === "water") {
                let price = quantity * 0.70;
                console.log(price);
            } else if (product === "beer") {
                let price = quantity * 1.10;
                console.log(price);
            } else if (product === "sweets") {
                let price = quantity * 1.35;
                console.log(price);
            } else if (product === "peanuts") {
                let price = quantity * 1.55;
                console.log(price);
            }
            break;
    }
}
smallShop(["coffee", "Varna", "2"]);
smallShop(["peanuts","Plovdiv", "1"]);
smallShop(["beer", "Sofia", "2"]);
smallShop(["water", "Plovdiv", "2"]);
smallShop(["sweets","Sofia", "2.23"]);