function  lunchBreak(input){
    let serialName = input[0];
    let episodeDuration = Number(input[1]);
    let breakDuration = Number(input[2]);

    let timeLunch = breakDuration / 8;
    let timeBreak = breakDuration / 4;
    let timeRemain = breakDuration - timeLunch - timeBreak;

    
    if(timeRemain >= episodeDuration){
        let timeLeft = Math.ceil(timeRemain - episodeDuration);
        console.log(`You have enough time to watch ${serialName} and left with ${timeLeft} minutes free time.`);
    } else if(timeRemain < episodeDuration){
        let timeLeft = Math.ceil(Math.abs(timeRemain - episodeDuration));
        console.log(`You don't have enough time to watch ${serialName}, you need ${timeLeft} more minutes.`);
    }
} 
lunchBreak(["Game of Thrones", "60", "96"]);
lunchBreak(["Teen Wolf", "48", "60"]);