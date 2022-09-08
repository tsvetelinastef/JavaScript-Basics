function oscars(input) {
    let index = 0;

    let name = input[index];
    index++;

    let pointFromAcademy = Number(input[index]);  
    index++;

    let n = Number(input[index]);  // jury 
    index++;

    let hasNominee = false;
    for (let i = 0; i < n; i++) {  // going through jury 
        let currentName = input[index];  // jury name 
        index++;

        let currentPoint = Number(input[index]);   // jury points 
        index++;

        let totalPoints = currentName.length * currentPoint / 2;  // formula from the task 
        pointFromAcademy += totalPoints;    // we add it to the points of the actor 

        if (pointFromAcademy > 1250.5) {  // if the actor gets nominee
            hasNominee = true;
            console.log(`Congratulations, ${name} got a nominee for leading role with ${pointFromAcademy.toFixed(1)}!`);
            break;
        } 
    }

    if(!hasNominee){     // if the actor don't get nominee 
        let diff = Math.abs(pointFromAcademy - 1250.5);
        console.log(`Sorry, ${name} you need ${diff.toFixed(1)} more!`);
    }
// if there is not boolean -> if will be just like: if(pointFromAcademy - 1250.5){ .... }
// and at the begining: there won't be: // let hasNominee = false; in the for and 
// hasNominee = true; in the if(pointFromAcademy > 1250.5){}

}


//oscars(["Zahari Baharov", "205", "4", "Johnny Depp", "45", "Will Smith", "29", "Jet Lee", "10", "Matthew Mcconaughey", "39"]);
oscars(["Sandra Bullock", "340", "5", "Robert De Niro", "50", "Julia Roberts", "40.5", "Daniel Day-Lewis", "39.4",
    "Nicolas Cage", "29.9", "Stoyanka Mutafova", "33"]);