function bestPlayer(input) {
    let goalNames = "";
    let nameGoals = 0;

    for (let i = 0; i < input.length; i++) {
        let name = input[i];
        let goals = 0;

        if (input[i] === "END") {
            break;
        } else {
            goals = Number(input[i + 1]);
        }
        i++;

        if (nameGoals < goals) {
            nameGoals = goals;
            goalNames = name;
        }
 
    }
    console.log(`${goalNames} is the best player!`);
    
    if (nameGoals >= 3) {
        console.log(`He has scored ${nameGoals} goals and made a hat-trick !!!`);
    } else {
        console.log(`He has scored ${nameGoals} goals.`);
    }
 
}

