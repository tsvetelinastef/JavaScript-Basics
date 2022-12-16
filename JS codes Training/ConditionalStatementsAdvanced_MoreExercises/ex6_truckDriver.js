/* 
Напишете програма която пресмята колко пари ще изкара шофьор на ТИР за един 
сезон. На входа програмата получава през кой сезон ще работи шофьора, както и
колко километра на месец ще кара. Един сезон е 4 месеца. Според зависи сезона
и броя километри на месец ще му се заплаща различна сума на километър:

*/

function truckDriver(input) {
    let season = input[0];
    let kmMonth = Number(input[1]);

    let salary = 0;
    let salaryFourMonths = 0;
    let taxes = 0;
    switch (season) {
        case "Spring":
        case "Autumn":
            if (kmMonth <= 5000) {
                salary = kmMonth * 0.75;
                salaryFourMonths = salary * 4;
                taxes = salaryFourMonths * 0.90;
                console.log(`${taxes.toFixed(2)}`);

            } else if (5000 < kmMonth && kmMonth <= 10000) {
                salary = kmMonth * 0.95;
                salaryFourMonths = salary * 4;
                taxes = salaryFourMonths * 0.90;
                console.log(`${taxes.toFixed(2)}`);

            } else if (10000 < kmMonth && kmMonth <= 20000) {
                salary = kmMonth * 1.45;
                salaryFourMonths = salary * 4;
                taxes = salaryFourMonths * 0.90;
                console.log(`${taxes.toFixed(2)}`);
            }
            break;

        case "Summer":
            if (kmMonth <= 5000) {
                salary = kmMonth * 0.90;
                salaryFourMonths = salary * 4;
                taxes = salaryFourMonths * 0.90;
                console.log(`${taxes.toFixed(2)}`);

            } else if (5000 < kmMonth && kmMonth <= 10000) {
                salary = kmMonth * 1.10;
                salaryFourMonths = salary * 4;
                taxes = salaryFourMonths * 0.90;
                console.log(`${taxes.toFixed(2)}`);

            } else if (10000 < kmMonth && kmMonth <= 20000) {
                salary = kmMonth * 1.45;
                salaryFourMonths = salary * 4;
                taxes = salaryFourMonths * 0.90;
                console.log(`${taxes.toFixed(2)}`);
            }
            break;

        case "Winter":
            if (kmMonth <= 5000) {
                salary = kmMonth * 1.05;
                salaryFourMonths = salary * 4;
                taxes = salaryFourMonths * 0.90;
                console.log(`${taxes.toFixed(2)}`);

            } else if (5000 < kmMonth && kmMonth <= 10000) {
                salary = kmMonth * 1.25;
                salaryFourMonths = salary * 4;
                taxes = salaryFourMonths * 0.90;
                console.log(`${taxes.toFixed(2)}`);

            } else if (10000 < kmMonth && kmMonth <= 20000) {
                salary = kmMonth * 1.45;
                salaryFourMonths = salary * 4;
                taxes = salaryFourMonths * 0.90;
                console.log(`${taxes.toFixed(2)}`);
            }
            break;
    }
}

truckDriver(["Summer", "3455"]);
truckDriver(["Winter", "4350"]);
truckDriver(["Winter", "5678"]);
truckDriver(["Winter", "16042"]);
truckDriver(["Spring", "1600"]);
truckDriver(["Autumn", "8600"]);
truckDriver(["Spring", "16942"]);