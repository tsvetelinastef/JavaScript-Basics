function reportSystem(input) {
    let index = 0;
    let sum = Number(input[index++]);

    let command = input[index]; // index++
    index++;

    let cashPayAmount = 0;
    let cashPayCounter = 0;
    let cardPayAmount = 0;
    let cardPayCounter = 0;
    let transactionCounter = 1;

    while (sum > 0) {
        if (command === "End") {
            console.log("Failed to collect required money for charity.");
            break;
        }

        let prices = Number(command);

        if (transactionCounter % 2 !== 0) {
            if (prices <= 100) {
              console.log("Product sold!");
              sum -= prices;
              cashPayAmount += prices;
              cashPayCounter++;
            } else {
              console.log("Error in transaction!");
            }
          } else {
            if (prices >= 10) {
              console.log("Product sold!");
              sum -= prices;
              cardPayAmount += prices;
              cardPayCounter++;
            } else {
              console.log("Error in transaction!");
            }
          }
          command = input[index++];
          transactionCounter++;
        }
        //    && command !== "End"
        if (sum <= 0) {
          let averageCS = cashPayAmount / cashPayCounter;
          let averageCC = cardPayAmount / cashPayCounter;
          console.log(`Average CS: ${averageCS.toFixed(2)}`);
          console.log(`Average CC: ${averageCC.toFixed(2)}`);
    }
}

reportSystem(["500", "120", "8", "63", "256", "78", "317"]);
reportSystem(["600", "86", "150", "98", "227", "End"]);