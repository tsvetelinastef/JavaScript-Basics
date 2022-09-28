function walking(input) {
    let totalSteps = 0;

    let command = input.shift();
  
  
    while (totalSteps < 10000 && command !== 'Going home') {
  
      let steps = Number(command);
  
      totalSteps += steps;
  
      command = input.shift();
  
    }
  
  
    if (command === 'Going home') {
  
      let finalSteps = Number(input.shift());
  
      totalSteps += finalSteps;
  
    }
  

    if (totalSteps < 10000) {
  
      let finalResult = 10000 - totalSteps;
  
      console.log(`${finalResult} more steps to reach goal.`);
  
    } else {
  
      console.log('Goal reached! Good job!');
  
      let finalResult = totalSteps - 10000;
  
      console.log(`${finalResult} steps over the goal!`);
  
    }
}

walking((["1000", "1500", "2000", "6500"]));
walking(["1500", "3000", "250", "1548", "2000", "Going home", "2000"]);


/*
let index = 0;

    let command = input[index];
    index++;

    let target = 1000;
    let steps = 0;

    while (command !== "Going home") {
        let currentSteps = Number(command);
        steps += currentSteps;
        if (steps >= target) {
            break;
        }

        command = input[index];
        index++;
    }

    if (command === "Going home") {
        currentSteps = Number(input[index]);
        index++;
        steps += currentSteps;
    }

    let diff = Math.abs(target - steps);
    if (steps >= target) {
        console.log("Goal reached! Good job!");
        console.log(`${diff} steps over the goal!`);
    } else {
        console.log(`${diff} more steps to reach goal.`);
    }
*/