function depositCalculator(input){
    let depositSum = Number(input[0]);
    let depositTerm = Number(input[1]);
    let annualInterestRate = Number(input[2]);

    let accruedInterest = depositSum * (annualInterestRate / 100);
    let monthlyInterest = accruedInterest / 12;
    let total = depositSum + (depositTerm * monthlyInterest);
    console.log(total);
}
depositCalculator(["2350", "6 ", "7 "]);