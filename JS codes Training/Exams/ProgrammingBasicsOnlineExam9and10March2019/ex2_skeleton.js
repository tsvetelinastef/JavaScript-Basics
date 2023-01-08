function skeleton(input){
    let minutes = Number(input[0]);
    let seconds = Number(input[1]);
    let lenght = Number(input[2]);
    let seconds100m = Number(input[3]);

    let fromMinToSeconds = minutes * 60 + seconds;
    let timesDecrease = lenght / 120;
    let allDecreasedTime = timesDecrease * 2.5;
    let timeMarin = (lenght / 100) * seconds100m - allDecreasedTime;

    if (fromMinToSeconds >= timeMarin) {
        console.log(`Marin Bangiev won an Olympic quota!`);
        console.log(`His time is ${timeMarin.toFixed(3)}.`)
    } else {
        let diff = Math.abs(fromMinToSeconds - timeMarin);
        console.log(`No, Marin failed! He was ${diff.toFixed(3)} second slower.`);
    }
}

skeleton(["2", "12", "1200", "10"]);
skeleton(["1", "20", "1546", "12"]);