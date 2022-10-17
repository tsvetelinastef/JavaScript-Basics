/* Туристическа агенция има нужда от система за изчисляване на 
дължимата сума при резервация. В зависимост от различните дестинации
и различните пакети, цената е различна.
Цените за ден са следните:
Цена за ден |||||   Банско/Боровец  ||||| Варна/Бургас
с екипировка ||||....без екипировка ..||| със закуска ||| без закуска
100лв........... 80лв ..................130лв. ............100лв.
VIP отстъпка 10% 5% 12% 7%
Ако клиентът е заявил престой повече от 7 дни, 
получава единия ден безплатно.

Вход
От конзолата се четат 4 реда:
1. Име на града - текст с възможности ("Bansko", "Borovets", 
"Varna" или "Burgas")
2. Вид на пакета - текст с възможности ("noEquipment", 
"withEquipment", "noBreakfast" или "withBreakfast")
3. Притежание на VIP отстъпка - текст с възможности "yes" или "no"
4. Дни за престой - цяло число в интервала [1 … 10000]

Изход
На конзолата се отпечатва 1 ред:
 Когато потребителят е въвел всички данни правилно, отпечатваме: 
"The price is {цената, форматирана до втория знак}lv! 
Have a nice time!"
 Ако потребителят е въвел по-малко от 1 ден за престой,
 отпечатваме:  "Days must be positive number!"
 Когато при въвеждането на града или вида на пакета се въведат 
невалидни данни, отпечатваме: "Invalid input!" */

function travelAgency(input) {
    let townName = input[0];
    let typePackage = input[1];
    let isVIP = input[2];
    let daysStay = Number(input[3]);

    let isValid = false;

    if (daysStay >= 7) {
        daysStay--;
    }

    let price = 0;
    switch (townName) {
        case "Bansko":
        case "Borovets":
            if (isVIP === "yes") {
                if (typePackage === "noEquipment") {
                    price = (daysStay * 80)* 0.95;

                } else if (typePackage === "withEquipment") {
                    price = (daysStay * 100) * 0.90;
                } else{
                    isValid = true;
                }
            } else {
                if (typePackage === "noEquipment") {
                    price = daysStay * 80;
    
                } else if (typePackage === "withEquipment") {
                    price = daysStay * 100;
    
                } else {
                    isValid = true;  
                }
            }
            break;

        case "Varna":
        case "Burgas":
            if(isVIP === "yes"){
                if (typePackage === "noBreakfast") {
                    price = (daysStay * 100) * 0.93;
    
                } else if (typePackage === "withBreakfast") {
                    price = (daysStay * 130) * 0.88;
    
                } else{
                    isValid = true;
                }
            } else {
                if (typePackage === "noBreakfast") {
                    price = daysStay * 100;
    
                } else if (typePackage === "withBreakfast") {
                    price = daysStay * 130;
    
                } else {
                    isValid = true; 
                }
            }
            break;

        default:
            isValid = true;
            break;
    }


    if (isValid) {
        console.log("Invalid input!");
    } else if (daysStay <= 1) {
       console.log("Days must be positive number!");
    } else {
        //let finalPrice = daysStay * price;
        console.log(`The price is ${price.toFixed(2)}lv! Have a nice time!`);
    }
}

travelAgency(["Borovets", "noEquipment", "yes", "6"]);
// The price is 456.00lv! Have a nice time!
travelAgency(["Bansko", "withEquipment", "no", "2"]);
// The price is 200.00lv! Have a nice time!

travelAgency(["Varna", "withBreakfast", "yes", "5"]);
// The price is 572.00lv! Have a nice time!


travelAgency(["Burgas", "noBreakfast", "no", "4"]);
// The price is 400.00lv! Have a nice time!
travelAgency(["Varna", "withBreakfast", "no", "0"]);
// Days must be positive number!
travelAgency(["Gabrovo", "noBreakfast", "no", "3"]);
// Invalid input!

