function grandpaStavri(input){
 
    let days = Number(input[0]);
 
    let liter = 0;
    let degrees = 0;
    let allLiters = 0;
    let totalDegrees = 0;
    let allRakia = 0;
    let res = " ";
 
    for (let i = 1; i < input.length; i++){
        liter = Number(input[i]);
        degrees = Number(input[i += 1]);
        allRakia += liter * degrees;
        allLiters += liter;
       
    }
    totalDegrees = allRakia / allLiters;
    console.log(`Liter: ${allLiters.toFixed(2)}`);
    console.log(`Degrees: ${totalDegrees.toFixed(2)}`);
 
   
     if (totalDegrees < 38){
        console.log(`Not good, you should baking!`);
    } else if (totalDegrees <= 42 && totalDegrees >= 38){
        console.log(`Super!`);
    } else {
        console.log(`Dilution with distilled water!`);
   }
}
grandpaStavri(["3",
"100",
"45",
"50",
"55",
"150",
"36"])
