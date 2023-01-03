function happyCatParking(input) {
    let numberDays = Number(input[0]);
    let hoursEachDay = Number([input[1]]);
    let sumPerDay = 0;
    let totalSum = 0;

    for (let i = 1; i <= numberDays; i++) {
        let currentDay = i;
        for (let j = 1; j <= hoursEachDay; j++) {
            let currentHour = j;

            let tempSum = 0;
            if (currentDay % 2 === 0 && currentHour % 2 !== 0) {
                tempSum += 2.5;
            } else if (currentDay % 2 !== 0 && currentHour % 2 === 0) {
                tempSum += 1.25;
            } else {
                tempSum += 1;
            }
            sumPerDay += tempSum;
        }

        console.log(`Day: ${currentDay} - ${sumPerDay.toFixed(2)} leva`);
        totalSum += sumPerDay;
        sumPerDay = 0;
    }
    console.log(`Total: ${totalSum.toFixed(2)} leva`);
}

happyCatParking(["2", "5"]);
happyCatParking(["5", "2"]);