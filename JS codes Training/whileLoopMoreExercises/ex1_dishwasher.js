function dishwasher(input) {
    let index = 0;

    let bottlesDetrgent = Number(input[index++]); // index++

    let command = input[index]; // index++
    index++;

    let detergentMl = bottlesDetrgent * 750;
    let dish = 5; // dishConsumption
    let dishesToWash = 0;
    let dishCounter = 0;
    let stewPan = 15;
    let stewPansToWash = 0;
    let stewPanCounter = 0;
    let counter = 1;

    while (detergentMl >= 0) {
        if (command === "End") {
          console.log(`Detergent was enough!`);
          console.log(`${dishCounter} dishes and ${stewPanCounter} pots were washed.`);
          console.log(`Leftover detergent ${detergentMl} ml.`);

        } if (counter % 3 !== 0) {
          dishesToWash = Number(command);
          detergentMl -= dishesToWash * dish;
          dishCounter += dishesToWash;

        } else {
          stewPansToWash = Number(command);
          detergentMl -= stewPansToWash * stewPan;
          stewPanCounter += stewPansToWash;
        }
        command = input[index++];
        counter++;
      }
      if (detergentMl < 0) {
        console.log(`Not enough detergent, ${Math.abs(detergentMl)} ml. more necessary!`);
      }
}

dishwasher(["2", "53", "65", "55", "End"]);
//dishwasher(["1", "10", "15", "10", "12", "13", "30"]);