function schoolCamp(input) {
    let season = input[0];
    let typeGroup = input[1];
    let numberStudents = input[2];
    let numberNights = input[3];

    let pricePerNight = 0;
    let finalSum = 0;
    switch (season) {
        case "Winter":
            if (typeGroup === "boys" || typeGroup === "girls") {
                pricePerNight = numberStudents * 9.60 * numberNights;
                if(numberStudents >= 50){
                    finalSum = pricePerNight - (pricePerNight * 0.50);
                    if(typeGroup === "girls"){
                        console.log(`Gymnastics ${finalSum.toFixed(2)} lv.`);
                    } else if(typeGroup === "boys"){
                        console.log(`Judo ${finalSum.toFixed(2)} lv.`);
                    } 
                } else if(numberStudents >= 20 && numberStudents < 50){
                    finalSum = pricePerNight - (pricePerNight * 0.15);
                    if(typeGroup === "girls"){
                        console.log(`Gymnastics ${finalSum.toFixed(2)} lv.`);
                    } else if(typeGroup === "boys"){
                        console.log(`Judo ${finalSum.toFixed(2)} lv.`);
                    } 
                } else if(numberStudents > 10 && numberStudents < 20){
                    finalSum = pricePerNight - (pricePerNight * 0.05);
                    if(typeGroup === "girls"){
                        console.log(`Gymnastics ${finalSum.toFixed(2)} lv.`);
                    } else if(typeGroup === "boys"){
                        console.log(`Judo ${finalSum.toFixed(2)} lv.`);
                    } 
                }
            } else if (typeGroup === "mixed") {
                pricePerNight = numberStudents * 10.00 * numberNights;
                finalSum = pricePerNight - (pricePerNight * 0.15);
                console.log(`Ski ${finalSum.toFixed(2)} lv.`); 
            }
            break;



        case "Spring":
            if (typeGroup === "boys" || typeGroup === "girls") {
                pricePerNight = numberStudents * 7.20 * numberNights;
                if(numberStudents >= 50){
                    finalSum = pricePerNight - (pricePerNight * 0.50);
                    if(typeGroup === "girls"){
                        console.log(`Athletics ${finalSum.toFixed(2)} lv.`);
                    } else if(typeGroup === "boys"){
                        console.log(`Tennis ${finalSum.toFixed(2)} lv.`);
                    } 
                } else if(numberStudents >= 20 && numberStudents < 50){
                    finalSum = pricePerNight - (pricePerNight * 0.15);
                    if(typeGroup === "girls"){
                        console.log(`Athletics ${finalSum.toFixed(2)} lv.`);
                    } else if(typeGroup === "boys"){
                        console.log(`Tennis ${finalSum.toFixed(2)} lv.`);
                    } 
                } else if(numberStudents > 10 && numberStudents < 20){
                    finalSum = pricePerNight - (pricePerNight * 0.05);
                    if(typeGroup === "girls"){
                        console.log(`Athletics ${finalSum.toFixed(2)} lv.`);
                    } else if(typeGroup === "boys"){
                        console.log(`Tennis ${finalSum.toFixed(2)} lv.`);
                    } 
                }
            } else if (typeGroup === "mixed") {
                pricePerNight = numberStudents * 9.50 * numberNights;
                finalSum = pricePerNight - (pricePerNight * 0.15);
                console.log(`Cycling ${finalSum.toFixed(2)} lv.`); 
            }
            break;




        case "Summer":
            if (typeGroup === "boys" || typeGroup === "girls") {
                pricePerNight = numberStudents * 15.00 * numberNights;
                if(numberStudents >= 50){
                    finalSum = pricePerNight - (pricePerNight * 0.50);
                    if(typeGroup === "girls"){
                        console.log(`Volleyball ${finalSum.toFixed(2)} lv.`);
                    } else if(typeGroup === "boys"){
                        console.log(`Football ${finalSum.toFixed(2)} lv.`);
                    } 
                } else if(numberStudents >= 20 && numberStudents < 50){
                    finalSum = pricePerNight - (pricePerNight * 0.15);
                    if(typeGroup === "girls"){
                        console.log(`Volleyball ${finalSum.toFixed(2)} lv.`);
                    } else if(typeGroup === "boys"){
                        console.log(`Football ${finalSum.toFixed(2)} lv.`);
                    } 
                } else if(numberStudents > 10 && numberStudents < 20){
                    finalSum = pricePerNight - (pricePerNight * 0.05);
                    if(typeGroup === "girls"){
                        console.log(`Volleyball ${finalSum.toFixed(2)} lv.`);
                    } else if(typeGroup === "boys"){
                        console.log(`Football ${finalSum.toFixed(2)} lv.`);
                    } 
                }
            } else if (typeGroup === "mixed") {
                pricePerNight = numberStudents * 20.00 * numberNights;
                finalSum = pricePerNight - (pricePerNight * 0.15);
                console.log(`Swimming ${finalSum.toFixed(2)} lv.`); 
            }
            break;
    }
}

//choolCamp(["Spring", "girls", "20", "7"]); // Athletics 856.80 lv.
schoolCamp(["Winter", "mixed", "9", "15"]); // Ski 1350.00 lv.
//schoolCamp(["Summer", "boys", "60", "7"]);    // Football 3150.00 lv.
schoolCamp(["Spring", "mixed", "17", "14"]);  // Cycling 2147.95 lv.