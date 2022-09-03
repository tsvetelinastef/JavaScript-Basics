function projectCreation(input){
    let name = input[0];
    let numberProjects = Number(input[1]);
    let neededHours = numberProjects * 3;
    console.log(`The architect ${name} will need ${neededHours} hours to complete ${numberProjects} project/s.`);
}
projectCreation(["Sanya ", "9 "]); 