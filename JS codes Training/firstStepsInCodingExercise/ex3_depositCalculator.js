function depositCalculator(input) {
    let depositSum = Number(input[0]);
    let termDeposit = Number(input[1]);
    let annualInterestRate = Number(input[2]);

    let accruedInterest = depositSum * (annualInterestRate / 100);
    let interestMonthly = accruedInterest / 12;
    let finalSum = depositSum + termDeposit * interestMonthly;
    console.log(finalSum);
}

depositCalculator(["200 ", "3 ", "5.7 "]);
depositCalculator(["2350", "6 ", "7 "]);