function braceletStand(input) {

    let spendingMoneyDaily = Number(input[0]);
    let incomeDaily = Number(input[1]);
    let expenses = Number(input[2]);
    let giftPrice = Number(input[3]);

    let leftMoney = 0;
    let savedMoney = 5 * spendingMoneyDaily + 5 * incomeDaily;
    leftMoney = savedMoney - expenses;

    if (leftMoney >= giftPrice) {
        console.log(`Profit: ${leftMoney.toFixed(2)} BGN, the gift has been purchased.`);
        
    } else {
        let diff = Math.abs(giftPrice - leftMoney);
        console.log(`Insufficient money: ${diff.toFixed(2)} BGN.`);
    }
}

//braceletStand(["5.12", "32.05", "15", "150"]);
//braceletStand(["2.10", "17.50", "20.20", "148.50"]);
//braceletStand(["15.20", "200.00", "7.30", "1500.12"]);

