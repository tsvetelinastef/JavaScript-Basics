function newHouse(input) {
    let typeFlower = input[0];
    let numberFlowers = Number(input[1]);
    let budget = Number(input[2]);

    // Roses", "Dahlias", "Tulips", "Narcissus", "Gladiolus"

    let sum = 0;
    switch (typeFlower) {
        case "Roses":
            sum = numberFlowers * 5;
            if (numberFlowers > 80) {
                sum -= sum * 0.10;
            }
            break;
        case "Dahlias":
            sum = numberFlowers * 3.80;
            if (numberFlowers > 90) {
                sum -= sum * 0.15;
            }
            break;
        case "Tulips":
            sum = numberFlowers * 2.80;
            if (numberFlowers > 80) {
                sum -= sum * 0.15;
            }
            break;
        case "Narcissus":
            sum = numberFlowers * 3;
            if (numberFlowers < 120) {
                sum += sum * 0.15;
            }
            break;
        case "Gladiolus":
            sum = numberFlowers * 2.50;
            if (numberFlowers < 80) {
                sum += sum * 0.20;
            }
            break;
    }

    let diff = Math.abs(budget - sum);
    if (budget >= sum) {
        console.log(`Hey, you have a great garden with ${numberFlowers} ${typeFlower} and ${diff.toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money, you need ${diff.toFixed(2)} leva more.`);
    }
}
newHouse(["Roses", "55", "250"]);
newHouse(["Tulips", "88", "260"]);
newHouse(["Narcissus", "119", "360"]);