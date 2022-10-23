function solve(input) {
    let days = Number(input[0]);
    let type = input[1];
    let degree = input[2];
    
    let nights = days - 1;
    
    price = 0;
    discount = 0;

    if (days < 10) {
        if(type === "room for one person") {
            price = 18;
            discount = 0;

        } else if ( type === "apartment") {
            price = 25.00;
            discount = 30;

        } else if (type === "president apartment") {
            price = 35.00;
            discount = 10;
        }
    } else if (days >= 10 && days <= 15) {
        if(type === "room for one person") {
            price = 18;
            discount = 0;

        } else if ( type === "apartment") {
            price = 25.00;
            discount = 35;

        } else if (type === "president apartment") {
            price = 35.00;
            discount = 15;
        }
    } else {
        if(type === "room for one person") {
            price = 18;
            discount = 0;

        } else if ( type === "apartment") {
            price = 25.00;
            discount = 50;

        } else if (type === "president apartment") {
            price = 35.00;
            discount = 20;
        }
    }
    
    let totalPrice = nights * price;
    let finalPrice = totalPrice - (totalPrice * discount / 100);
    
    let newPrice = 0
    if(degree === "positive") {
         newPrice = finalPrice + (finalPrice * 25 / 100);
        console.log(`${newPrice.toFixed(2)}`);

    } else if (degree === "negative") {
         newPrice = finalPrice - (finalPrice * 10 / 100);
        console.log(`${newPrice.toFixed(2)}`);
    }
    
    }

// solve(["2", "apartment", "positive"]);

