function sumSecond(input){
    let firstTime = Number(input[0]);
    let secondTime = Number(input[1]);
    let thirdTime = Number(input[2]);

    let sumInSec = firstTime + secondTime + thirdTime;
    let timeInM = Math.floor(sumInSec / 60);
    let timeInSec = sumInSec % 60;
    
    if(timeInSec < 10){
        console.log(`${timeInM}:0${timeInSec}`);
    } else {
        console.log(`${timeInM}:${timeInSec}`);
    }
}
sumSecond(["14", "12", "10"]);