function walking(input) {
  let index = 0;

  let command = input[index];
  index++;

  let target = 10000;
  let steps = 0;  // count steps
  while (command !== "Going home") {
    let currentSteps = Number(command);
    steps += currentSteps;
    if (steps >= target) { // if steps > terget ---> won't return true
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
    console.log(`Goal reached! Good job!`);
    console.log(`${diff} steps over the goal!`);
  } else {
    console.log(`${diff} more steps to reach goal.`);
  }
}

walking((["1000", "1500", "2000", "6500"]));
walking(["1500", "3000", "250", "1548", "2000", "Going home", "2000"]);

