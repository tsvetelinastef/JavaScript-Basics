/* Напишете софтуер, който да пресмята сметката на клиент,
 закупил определен брой от дадена напитка от кафемашина.
.........Без захар ..|| Нормално ||..... Допълнително захар
Еспресо 0.90 лв./бр. ...1 лв./бр. ........1.20 лв./бр.
Капучино 1.00 лв./бр.. 1.20 лв./бр....... 1.60 лв. /бр.
Чай 0.50 лв./бр. .......0.60 лв./бр...... 0.70 лв. /бр.

Трябва да имате предвид следните отстъпки:
 При избрана напитка без захар има 35% отстъпка.
 При избрана напитка "Espresso" и закупени поне 5 броя, 
има 25% отстъпка.
 При сума надвишава 15 лева, 20% отстъпка от крайната цена, 
Отстъпките се прилагат в реда на тяхното описване.

Вход
Входът се чете от конзолата и се състои от три реда:
 Първи ред - напитка - текст с възможности"Espresso", "Cappuccino"
 или "Tea"
 Втори ред - захар - текст с възможности "Without", "Normal" или 
"Extra"
 Трети ред - брой напитки - цяло число в интервала [1… 50]

Изход
На конзолата трябва да се отпечата един ред:
"You bought {брой напитки} cups of {напитка} for {крайна цена} lv."
Цената да бъде форматирана до втората цифра след десетичния знак.*/

function coffeeMachine(input) {
  
    let drink = input[0];
    let sugar = input[1];
    let numberDrinks = Number(input[2]);

        let price = 0;

        switch (drink) {
            case "Espresso":
                if ("Without" === sugar) {
                    price = (0.90 * numberDrinks) * 0.65;
                    
                } else if ("Normal" === sugar) {
                    price =  1.00 * numberDrinks;

                } else if ("Extra" === sugar) {
                    price = price + 1.20 * numberDrinks;
                    //price = price + 1.20 * numberDrinks;
                     
                }
                if (price >= 5) {
                    price = price * 0.75;
                }
                break;
            case "Cappuccino":
                if ("Without" === sugar) {
                    price = (1.00 * numberDrinks) * 0.65;
                    //price *= 0.65;
                } else if ("Normal" === sugar) {
                    price =  1.20 * numberDrinks;
                } else if ("Extra" === sugar) {
                    price =  1.60 * numberDrinks;
                }
                break;
            case "Tea":
                if ("Without" === sugar) {
                    price =  0.50 * numberDrinks;
                    price *= 0.65;
                } else if ("Normal" === sugar) {
                    price =  0.60 * numberDrinks;
                } else if ("Extra" === sugar) {
                    price =  0.70 * numberDrinks;
                }
                break;
        }

        if (price > 15.0) {
            price = price * 0.8;
        }

        console.log(`You bought ${numberDrinks} cups of ${drink} for ${price.toFixed(2)} lv.`);
    


    //  if (sugar === "Without") {
    //  } else if (drink === "Espresso" && numberDrinks >= 5) {
    //  } else if (sum >= 15) {
    //  }


}

//coffeeMachine(["Espresso", "Without", "10"]);
// You bought 10 cups of Espresso for 4.39 lv.

coffeeMachine(["Cappuccino", "Normal", "13"]);
// You bought 13 cups of Cappuccino for 12.48 lv.

//coffeeMachine(["Tea", "Extra", "3"]);
// You bought 3 cups of Tea for 2.10 lv.





























































/*   let drink = input[0];
    let sugar = input[1];
    let numberDrinks = Number(input[2]);

    //let sum = 0;
    //let typeDrink = "";
    let price = 0;
    switch (drink) {
        case "Espresso":
            if (sugar === "Without") {
                price = (numberDrinks * 0.90) - ((numberDrinks * 0.90) * 0.35);
               // if (numberDrinks >= 5) {
                 //   let discount = price * 0.75;
                   // console.log(`You bought ${numberDrinks} cups of ${drink} for ${discount.toFixed(2)} lv.`);
                //}

                if(price > 15){
                    let discount = price * 0.80;
                    console.log(`You bought ${numberDrinks} cups of ${drink} for ${discount.toFixed(2)} lv.`);
                } else  if (numberDrinks >= 5) {
                    let discount = price * 0.75;
                    console.log(`You bought ${numberDrinks} cups of ${drink} for ${discount.toFixed(2)} lv.`);
                }

            } else if (sugar === "Normal") {
                price = numberDrinks * 1.00;
               // if (numberDrinks >= 5) {
                 //   let discount = price * 0.75;
                   // console.log(`You bought ${numberDrinks} cups of ${drink} for ${discount.toFixed(2)} lv.`);
                //}
                if(price > 15){
                    let discount = price * 0.80;
                    console.log(`You bought ${numberDrinks} cups of ${drink} for ${discount.toFixed(2)} lv.`);
                } else if (numberDrinks >= 5) {
                    let discount = price * 0.75;
                    console.log(`You bought ${numberDrinks} cups of ${drink} for ${discount.toFixed(2)} lv.`);
                }

            } else if (sugar === "Extra") {
                price = numberDrinks * 1.20;
               // if (numberDrinks >= 5) {
                 //   let discount = price * 0.75;
                  //  console.log(`You bought ${numberDrinks} cups of ${drink} for ${discount.toFixed(2)} lv.`);
                //}
                if(price > 15){
                    let discount = price * 0.80;
                    console.log(`You bought ${numberDrinks} cups of ${drink} for ${discount.toFixed(2)} lv.`);
                } else if (numberDrinks >= 5) {
                    let discount = price * 0.75;
                    console.log(`You bought ${numberDrinks} cups of ${drink} for ${discount.toFixed(2)} lv.`);
                }
            }
            break;

        case "Cappuccino":
            if (sugar === "Without") {
                price = (numberDrinks * 1.00) - ((numberDrinks * 1.00) * 0.35);
                if(price > 15){
                    let discount = price * 0.80;
                    console.log(`You bought ${numberDrinks} cups of ${drink} for ${discount.toFixed(2)} lv.`);
                } else {
                    console.log(`You bought ${numberDrinks} cups of ${drink} for ${price.toFixed(2)} lv.`);
                }

            } else if (sugar === "Normal") {
                price = numberDrinks * 1.20;
                if(price > 15){
                    let discount = price * 0.80;
                    console.log(`You bought ${numberDrinks} cups of ${drink} for ${discount.toFixed(2)} lv.`);
                } else {
                    console.log(`You bought ${numberDrinks} cups of ${drink} for ${price.toFixed(2)} lv.`);
                }

            } else if (sugar === "Extra") {
                price = numberDrinks * 1.60;

                if(price > 15){
                    let discount = price * 0.80;
                    console.log(`You bought ${numberDrinks} cups of ${drink} for ${discount.toFixed(2)} lv.`);
                } else {
                    console.log(`You bought ${numberDrinks} cups of ${drink} for ${price.toFixed(2)} lv.`);
                }
            }
            break;

        case "Tea":
            if (sugar === "Without") {
                price = (numberDrinks * 0.50) - ((numberDrinks * 1.00) * 0.35);

                if(price > 15){
                    let discount = price * 0.80;
                    console.log(`You bought ${numberDrinks} cups of ${drink} for ${discount.toFixed(2)} lv.`);
                } else {
                    console.log(`You bought ${numberDrinks} cups of ${drink} for ${price.toFixed(2)} lv.`);
                }
            } else if (sugar === "Normal") {
                price = numberDrinks * 0.60;
                
                if(price > 15){
                    let discount = price * 0.80;
                    console.log(`You bought ${numberDrinks} cups of ${drink} for ${discount.toFixed(2)} lv.`);
                } else {
                    console.log(`You bought ${numberDrinks} cups of ${drink} for ${price.toFixed(2)} lv.`);
                }

            } else if (sugar === "Extra") {
                price = numberDrinks * 0.70;
    
                if(price > 15){
                    let discount = price * 0.80;
                    console.log(`You bought ${numberDrinks} cups of ${drink} for ${discount.toFixed(2)} lv.`);
                } else {
                    console.log(`You bought ${numberDrinks} cups of ${drink} for ${price.toFixed(2)} lv.`);

                }
            }
            break;


        
    } */