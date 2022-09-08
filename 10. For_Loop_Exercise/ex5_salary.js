function salary(input) {
    let index = 0;

    let openTabs = Number(input[index]);
    index++;

    let salary = Number(input[index]);
    index++;

    let isLost = false; 

    //let currentPenalty = 0;
    
    for (let i = 0; i <= openTabs; i++) {
        let wesite = input[index];
        index++;

        if (wesite === "Facebook") {
            salary = salary - 150;
        } else if (wesite === "Instagram") {
            salary = salary - 100;
        } else if (wesite === "Reddit") {
            salary = salary - 50;
        }

        if (salary <= 0) {
            isLost = true; 
            break;
            
        }
    }

    // if salary > 0
    if(isLost){
        console.log(`You have lost your salary.`);
    } else {
        console.log(`${salary.toFixed(0)}`);
    }
   
}

//salary(["10","750", "Facebook", "Dev.bg", "Instagram", "Facebook", "Reddit", "Facebook", "Facebook"]);
//salary(["3", "500", "Github.com", "Stackoverflow.com", "softuni.bg"]);
salary(["3", "500", "Facebook", "Stackoverflow.com", "softuni.bg"]);