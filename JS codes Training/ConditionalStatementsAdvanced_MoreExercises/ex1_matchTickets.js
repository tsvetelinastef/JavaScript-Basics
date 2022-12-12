function matchTickets(input) {
    let budget = Number(input[0]);
    let category = input[1];
    let numberPeople = Number(input[2]);

    let ticket = 0;
    let discount = 0;
    let price = 0;
    switch (category) {
        case "VIP":
            price = 499.99;
            ticket = 499.99 * numberPeople;

            if(numberPeople >= 1 && numberPeople <= 4){
                // 75%
                discount = budget - (budget * 0.75);
                if(ticket < discount){
                    let left = Math.abs(discount - ticket);
                    console.log(`Yes! You have ${left.toFixed(2)} leva left.`);
                } else {
                    let need = Math.abs(discount - ticket);
                    console.log(`Not enough money! You need ${need.toFixed(2)} leva.`);
               
                }

            } else if(numberPeople >= 5 && numberPeople <= 9){
                // 60%
                discount = budget - (budget * 0.60);
                if(ticket < discount){
                    let left = Math.abs(discount - ticket);
                    console.log(`Yes! You have ${left.toFixed(2)} leva left.`);
                } else {
                    let need = Math.abs(discount - ticket);
                    console.log(`Not enough money! You need ${need.toFixed(2)} leva.`);
               
                }

            } else if(numberPeople >= 10 && numberPeople <= 24){
                // 50%
                discount = budget - (budget * 0.50);
                if(ticket < discount){
                    let left = Math.abs(discount - ticket);
                    console.log(`Yes! You have ${left.toFixed(2)} leva left.`);
                } else {
                    let need = Math.abs(discount - ticket);
                    console.log(`Not enough money! You need ${need.toFixed(2)} leva.`);
               
                }
                
            } else if(numberPeople >= 25 && numberPeople <= 49){
                // 40%
                discount = budget - (budget * 0.40);
                if(ticket < discount){
                    let left = Math.abs(discount - ticket);
                    console.log(`Yes! You have ${left.toFixed(2)} leva left.`);
                } else {
                    let need = Math.abs(discount - ticket);
                    console.log(`Not enough money! You need ${need.toFixed(2)} leva.`);
               
                }
                
            } else if(numberPeople >= 50){
                // 25%
                discount = budget - (budget * 0.25);
                if(ticket < discount){
                    let left = Math.abs(discount - ticket);
                    console.log(`Yes! You have ${left.toFixed(2)} leva left.`);
                } else {
                    let need = Math.abs(discount - ticket);
                    console.log(`Not enough money! You need ${need.toFixed(2)} leva.`);
               
                }
                
            }
            break;
        case "Normal":
            price = 249.99;
            ticket = 249.99 * numberPeople;

            if(numberPeople >= 1 && numberPeople <= 4){
                // 75%
                discount = budget - (budget * 0.75);
                if(ticket < discount){
                    let left = discount - ticket;
                    console.log(`Yes! You have ${left.toFixed(2)} leva left.`);
                } else {
                    let need = discount - ticket;
                    console.log(`Not enough money! You need ${need.toFixed(2)} leva.`);
               
                }

            } else if(numberPeople >= 5 && numberPeople <= 9){
                // 60%
                discount = budget - (budget * 0.60);
                if(ticket < discount){
                    let left = discount - ticket;
                    console.log(`Yes! You have ${left.toFixed(2)} leva left.`);
                } else {
                    let need = discount - ticket;
                    console.log(`Not enough money! You need ${need.toFixed(2)} leva.`);
               
                }

            } else if(numberPeople >= 10 && numberPeople <= 24){
                // 50%
                discount = budget - (budget * 0.50);
                if(ticket < discount){
                    let left = discount - ticket;
                    console.log(`Yes! You have ${left.toFixed(2)} leva left.`);
                } else {
                    let need = discount - ticket;
                    console.log(`Not enough money! You need ${need.toFixed(2)} leva.`);
               
                }
                
            } else if(numberPeople >= 25 && numberPeople <= 49){
                // 40%
                discount = budget - (budget * 0.40);
                if(ticket < discount){
                    let left = discount - ticket;
                    console.log(`Yes! You have ${left.toFixed(2)} leva left.`);
                } else {
                    let need = discount - ticket;
                    console.log(`Not enough money! You need ${need.toFixed(2)} leva.`);
               
                }
                
            } else if(numberPeople >= 50){
                // 25%
                discount = budget - (budget * 0.25);
                if(ticket < discount){
                    let left = discount - ticket;
                    console.log(`Yes! You have ${left.toFixed(2)} leva left.`);
                } else {
                    let need = discount - ticket;
                    console.log(`Not enough money! You need ${need.toFixed(2)} leva.`);
               
                }
                
            }
            break;
    }
}

matchTickets(["1000", "Normal", "1"]);
matchTickets(["30000", "VIP", "49"]); 
