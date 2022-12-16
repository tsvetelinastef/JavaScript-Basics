/* 
Напишете програма, която спрямо даден бюджет и сезон да пресмята цената, типа и класа на кола под наем.
Сезоните са лято и зима – "Summer" и "Winter". Типа коли са кабрио и джип – "Cabrio" и "Jeep". 
•	При бюджет по-малък или равен от 100лв.:
    o	Класът ще е - "Economy class"
    o	Според сезона колата и цената ще са:
        	Лято – Кабрио – 35% от бюджета
        	Зима – Джип – 65% от бюджета
•	При бюджет по-голям от 100лв. и по-малък или равен от 500лв.:
    o	Класът ще е - "Compact class"
    o	Според сезона колата и цената ще са:
        	Лято – Кабрио – 45% от бюджета
        	Зима – Джип – 80% от бюджета
•	При бюджет по-голям от 500лв.:
    o	Класът ще е – "Luxury class"
    o	За всеки сезон колата ще е джип и цената ще е:
        	90% от бюджета
*/

function carToGo(input) {
    let budget = Number(input[0]);
    let season = input[1];

    switch (season) {
        case "Summer":
            if (budget <= 100) {
                let priceCabrio = budget * 0.35;
                console.log("Economy class");
                console.log(`Cabrio - ${priceCabrio.toFixed(2)}`);

            } else if (budget > 100 && budget <= 500) {
                let priceCabrio = budget * 0.45;
                console.log("Compact class");
                console.log(`Cabrio - ${priceCabrio.toFixed(2)}`);

            } else if (budget > 500) {
                let priceJeep = budget * 0.90;
                console.log("Luxury class");
                console.log(`Jeep - ${priceJeep.toFixed(2)}`);
            }
            break;

        case "Winter":
            if (budget <= 100) {
                let priceCabrio = budget * 0.65;
                console.log("Economy class");
                console.log(`Jeep - ${priceCabrio.toFixed(2)}`);

            } else if (budget > 100 && budget <= 500) {
                let priceCabrio = budget * 0.80;
                console.log("Compact class");
                console.log(`Jeep - ${priceCabrio.toFixed(2)}`);

            } else if (budget > 500) {
                let priceJeep = budget * 0.90;
                console.log("Luxury class");
                console.log(`Jeep - ${priceJeep.toFixed(2)}`);
            }
            break;
    }
}

carToGo(["450", "Summer"]);
carToGo(["450", "Winter"]);
carToGo(["99.99", "Summer"]);
carToGo(["70.50", "Winter"]);
carToGo(["1010", "Summer"]);
carToGo(["1010", "Winter"]);

