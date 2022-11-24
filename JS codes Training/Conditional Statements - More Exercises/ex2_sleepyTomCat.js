function sleepyTomCat(input) {
    let daysOff = Number(input[0]);

    let holiday = daysOff * 127;
    let workDays = (365 - daysOff) * 63;

    let workHolidayMin = holiday + workDays;
    if (30000 >= workHolidayMin) {
        let hoursNeeded = Math.abs(30000 - workHolidayMin);
        let hoursPlay = Math.floor(hoursNeeded / 60);
        let minutesPlay = hoursNeeded - (hoursPlay * 60);
        console.log("Tom sleeps well");
        console.log(`${hoursPlay} hours and ${minutesPlay} minutes less for play`)
    } else {
        let hoursNeeded = Math.abs(workHolidayMin - 30000);
        let hoursPlay = Math.floor(hoursNeeded / 60);
        let minutesPlay = hoursNeeded - (hoursPlay * 60);
        console.log("Tom will run away");
        console.log(`${hoursPlay} hours and ${minutesPlay} minutes more for play`);
    }
}

sleepyTomCat(["20"]);
sleepyTomCat(["113"]);
sleepyTomCat(["75"]);

