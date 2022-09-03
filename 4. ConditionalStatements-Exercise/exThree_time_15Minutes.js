function timeIn15Minutes(input){
    let hours = Number(input[0]);
    let minutes = Number(input[1]);

    let timeInM = hours * 60 + minutes;
    timeInM = timeInM + 15;

    let h = Math.floor(timeInM / 60);
    let m = timeInM % 60;

    if(h === 24){
        h = 0;
    } 
    if(m < 10){
        console.log(`${h}:0${m}`);
    } else {
        console.log(`${h}:${m}`);
    }
} 
timeIn15Minutes(["12", "49"]);