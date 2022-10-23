function pinCode(input) {
    let firstNumber = Number(input[0]);
    let secondNumber = Number(input[1]);
    let thirdNumber = Number(input[2]);
   
    for (let num1 = 2; num1 <= firstNumber; num1 += 2) {
      for (let num2 = 2; num2 <= secondNumber; num2++) {
        for (let num3 = 2; num3 <= thirdNumber; num3 += 2) {
          if (num2 == 2 || num2 == 3 || num2 == 5 || num2 == 7) {
            console.log(`${num1} ${num2} ${num3}`)
          }
        }
      }
    }
  }
  