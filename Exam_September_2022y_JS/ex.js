function vacation(input) {
    let index = 2;
    let moneyNeeded = Number(input[0]);
    let moneyAvailable = Number(input[1]);
    let action = input[index];
    let moneyAction = Number(input[index + 1]);
    let spendingCountre = 0;
    let daysCounter = 0;
 
 
    while (moneyAvailable !== moneyNeeded) {
        let action = input[index];
        let moneyAction = Number(input[index + 1]);
        daysCounter++;
 
        if (action == "spend") {
            moneyAvailable -= moneyAction;
            spendingCountre++;
 
            if (spendingCountre === 5) {
                console.log(`You can't save the money.`);
                console.log(`${daysCounter}`);
                break;
            }
        }

        if (moneyAvailable <= 0) {
            moneyAvailable = 0;
        }

        if (action === "save") {
            spendingCountre = 0;
            moneyAvailable += moneyAction;
        }
        index += 2;

        if (moneyAvailable >= moneyNeeded) {
            console.log(`You saved the money for ${daysCounter} days.`);
            break;
        }
 
    }
 
}


