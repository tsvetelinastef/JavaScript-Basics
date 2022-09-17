function matchTickets(input) {
    let budget = Number(input[0]);
    let type = input[1];
    let numberPeople = Number(input[2]);

    // IP – 499.99 лева.
    // Normal – 249.99 лева.
    let finalSum = 0;
    let priceTicket = 0;
    let total = 0; 
    switch (type) {
        case "VIP":
            if (numberPeople >= 1 && numberPeople <= 4) {
                finalSum = budget - (budget * 0.75);
                priceTicket = 499.99 * numberPeople;
                if(priceTicket < finalSum){
                    total = finalSum - priceTicket;
                   console.log(`Yes! You have ${total.toFixed(2)} leva left.`); 
                } else {
                    total = priceTicket - finalSum;
                    console.log(`Not enough money! You need ${total.toFixed(2)} leva.`);
                }
            } else if (numberPeople >= 5 && numberPeople <= 9) {
                finalSum = budget - (budget * 0.60);
                priceTicket = 499.99 * numberPeople;
                if(priceTicket < finalSum){
                    total = finalSum - priceTicket;
                   console.log(`Yes! You have ${total.toFixed(2)} leva left.`); 
                } else {
                    total = priceTicket - finalSum;
                    console.log(`Not enough money! You need ${total.toFixed(2)} leva.`);
                }
            } else if (numberPeople >= 10 && numberPeople <= 24) {
                finalSum = budget - (budget * 0.50);
                priceTicket = 499.99 * numberPeople;
                if(priceTicket < finalSum){
                    total = finalSum - priceTicket;
                   console.log(`Yes! You have ${total.toFixed(2)} leva left.`); 
                } else {
                    total = priceTicket - finalSum;
                    console.log(`Not enough money! You need ${total.toFixed(2)} leva.`);
                }
            } else if (numberPeople >= 25 && numberPeople <= 49) {
                finalSum = budget - (budget * 0.40);
                priceTicket = 499.99 * numberPeople;
                if(priceTicket < finalSum){
                    total = finalSum - priceTicket;
                   console.log(`Yes! You have ${total.toFixed(2)} leva left.`); 
                } else {
                    total = priceTicket - finalSum;
                    console.log(`Not enough money! You need ${total.toFixed(2)} leva.`);
                }
            } else if (numberPeople >= 50) {
                finalSum = budget - (budget * 0.25);
                priceTicket = 499.99 * numberPeople;
                if(priceTicket < finalSum){
                    total = finalSum - priceTicket;
                   console.log(`Yes! You have ${total.toFixed(2)} leva left.`); 
                } else {
                    total = priceTicket - finalSum;
                    console.log(`Not enough money! You need ${total.toFixed(2)} leva.`);
                }
            }
            break;
        case "Normal":
            if (numberPeople >= 1 && numberPeople <= 4) {
                finalSum = budget - (budget * 0.75);
                priceTicket = 249.99 * numberPeople;
                if(priceTicket < finalSum){
                    total = finalSum - priceTicket;
                   console.log(`Yes! You have ${total.toFixed(2)} leva left.`); 
                } else {
                    total = priceTicket - finalSum;
                    console.log(`Not enough money! You need ${total.toFixed(2)} leva.`);
                }
            } else if (numberPeople >= 5 && numberPeople <= 9) {
                finalSum = budget - (budget * 0.60);
                priceTicket = 249.99 * numberPeople;
                if(priceTicket < finalSum){
                    total = finalSum - priceTicket;
                   console.log(`Yes! You have ${total.toFixed(2)} leva left.`); 
                } else {
                    total = priceTicket - finalSum;
                    console.log(`Not enough money! You need ${total.toFixed(2)} leva.`);
                }
            } else if (numberPeople >= 10 && numberPeople <= 24) {
                finalSum = budget - (budget * 0.50);
                priceTicket = 249.99 * numberPeople;
                if(priceTicket < finalSum){
                    total = finalSum - priceTicket;
                   console.log(`Yes! You have ${total.toFixed(2)} leva left.`); 
                } else {
                    total = priceTicket - finalSum;
                    console.log(`Not enough money! You need ${total.toFixed(2)} leva.`);
                }
            } else if (numberPeople >= 25 && numberPeople <= 49) {
                finalSum = budget - (budget * 0.40);
                priceTicket = 249.99 * numberPeople;
                if(priceTicket < finalSum){
                    total = finalSum - priceTicket;
                   console.log(`Yes! You have ${total.toFixed(2)} leva left.`); 
                } else {
                    total = priceTicket - finalSum;
                    console.log(`Not enough money! You need ${total.toFixed(2)} leva.`);
                }
            } else if (numberPeople >= 50) {
                finalSum = budget - (budget * 0.25);
                priceTicket = 249.99 * numberPeople;
                if(priceTicket < finalSum){
                    total = finalSum - priceTicket;
                   console.log(`Yes! You have ${total.toFixed(2)} leva left.`); 
                } else {
                    total = priceTicket - finalSum;
                    console.log(`Not enough money! You need ${total.toFixed(2)} leva.`);
                }
            }
            break;
    }


}

//matchTickets(["1000", "Normal", "1"]);
matchTickets(["30000", "VIP", "49"]); // Not enough money! You need 6499.51 leva.
