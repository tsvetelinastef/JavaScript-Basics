function sleepyTomCat(input) {
    let breakDays = Number(input[0]);

    let minPlay = breakDays * 127;
    let workDays = 365 - breakDays;
    let finalWorkDays = workDays * 63;
    let total = minPlay + finalWorkDays;


    let minRemain = Math.abs(30000 - total);
    let hours = Math.floor(minRemain / 60);
    let minutes = minRemain - (hours * 60);

    if (30000 >= total) {
        console.log(`Tom sleeps well`);
        console.log(`${hours.toFixed(0)} hours and ${minutes.toFixed(0)} minutes less for play`);
    } else {
        console.log(`Tom will run away`);
        console.log(`${hours.toFixed(0)} hours and ${minutes.toFixed(0)} minutes more for play`);
    }
}

//sleepyTomCat(["20"]);
sleepyTomCat(["113"]);