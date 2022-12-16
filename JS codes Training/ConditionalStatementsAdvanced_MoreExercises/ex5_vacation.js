/* 
Напишете програма, която спрямо даден бюджет и сезон да пресмята цената, 
локацията и мястото на настаняване за ваканция.
 Сезоните са лято и зима – "Summer" и "Winter". Локациите са – "Alaska" и "Morocco".
  Възможните места за настаняване – "Hotel", "Hut" или "Camp".
•	При бюджет по-малък или равен от 1000лв.:
    o	Настаняване в "Camp"
    o	Според сезона локацията ще е една от следните и ще струва определен процент от бюджета:
        	Лято – Аляска – 65% от бюджета
        	Зима – Мароко – 45% от бюджета
•	При бюджет по-голям от 1000лв. и по-малък или равен от 3000лв.:
    o	Настаняване в "Hut"
    o	Според сезона локацията ще е една от следните и ще струва определен процент от бюджета:
        	Лято – Аляска – 80% от бюджета
        	Зима – Мароко – 60% от бюджета
•	При бюджет по-голям от 3000лв.:
    o	Настаняване в "Hotel"
    o	Според сезона локацията ще е една от следните и ще струва 90% от бюджета:
        	Лято – Аляска
        	Зима – Мароко
*/ 

function vacation(input){
    let budget = Number(input[0]);
    let season = input[1];

    switch (season) {
        case "Summer":
            if (budget <= 1000) {
                let priceCamp = budget * 0.65;
                console.log(`Alaska - Camp - ${priceCamp.toFixed(2)}`);

            } else if (budget > 1000 && budget <= 3000) {
                let priceHut = budget * 0.80;
                console.log(`Alaska - Hut - ${priceHut.toFixed(2)}`);

            } else if (budget > 3000) {
                let priceHotel = budget * 0.90;
                console.log(`Alaska - Hotel - ${priceHotel.toFixed(2)}`);
            }
            break;

        case "Winter":
            if (budget <= 1000) {
                let priceCamp = budget * 0.45;
                console.log(`Morocco - Camp - ${priceCamp.toFixed(2)}`);

            }  else if (budget > 1000 && budget <= 3000) {
                let priceHut = budget * 0.60;
                console.log(`Morocco - Hut - ${priceHut.toFixed(2)}`);

            } else if (budget > 3000) {
                let priceHotel = budget * 0.90;
                console.log(`Morocco - Hotel - ${priceHotel.toFixed(2)}`);
            }
            break;
    }

}

vacation(["800", "Summer"]);
vacation(["799.50", "Winter"]);
vacation(["1100", "Summer"]);
vacation(["2543.99", "Winter"]);
vacation(["3460", "Summer"]);
vacation(["5000", "Winter"]);