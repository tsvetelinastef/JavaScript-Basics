function worldSwimmingRecord(input){
    let recordInSeconds = Number(input[0]);
    let distanceInMeters = Number(input[1]);
    let timeInSecondsToSwimOneM = Number(input[2]);

    let time = distanceInMeters * timeInSecondsToSwimOneM;
    let slowTime = Math.floor(distanceInMeters / 15);
    time = time + (slowTime * 12.5);

    if(time < recordInSeconds){
        console.log(`Yes, he succeeded! The new world record is ${time.toFixed(2)} seconds.`);
    } else {
        let diff = time - recordInSeconds;
        console.log(`No, he failed! He was ${diff.toFixed(2)} seconds slower.`);
    }

} 
worldSwimmingRecord(["10464", "1500", "20"]);
worldSwimmingRecord(["55555.67","3017","5.03"]);