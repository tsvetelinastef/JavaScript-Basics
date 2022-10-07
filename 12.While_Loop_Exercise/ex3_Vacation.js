function vacation(input) {
    let index = 0;
    let needMoney = Number(input[index]);
    index++;

    let currentMoney = Number(input[index]);
    index++;

    let spendCounter = 0;
    let dayCounter = 0;
   // let isSaveMoney = true;

    while (currentMoney < needMoney) {
        let action = input[index];
        index++;
        
        let amount = Number(input[index]);
        index++;
        dayCounter++;  // 1 day passed

        switch (action) {
            case "spend":
                currentMoney -= amount;
                spendCounter++;
                if (currentMoney < 0) {
                    currentMoney = 0;
                }
                break;
            case "save":
                currentMoney += amount;
                spendCounter = 0;
                break;
        }

        if(spendCounter === 5){
            //isSaveMoney = false;
            break;
        }
    }
    
    if (spendCounter === 5) { // !isSaveMoney
        console.log("You can't save the money.");
        console.log(dayCounter);
    } else {
        console.log(`You saved the money for ${dayCounter} days.`);
    }
}

vacation(["110", "60", "spend", "10", "spend", "10", "spend", "10", "spend", "10", "spend", "10"]);