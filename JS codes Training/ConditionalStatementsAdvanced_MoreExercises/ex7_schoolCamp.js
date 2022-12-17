function schoolCamp(input) {
    let season = input[0];
    let typeGroup = input[1];
    let numberStudents = Number(input[2]);
    let numberNights = Number(input[3]);

    let total = 0;
    let discount = 0;
    switch (season) {
        case "Winter":
            if (typeGroup === "boys") {
                total = numberStudents * numberNights * 9.60;
                if (numberStudents >= 50) {
                    discount = total - (total * 0.50);
                    console.log(`Judo ${discount.toFixed(2)} lv.`);
                } else if(numberStudents >= 20 && numberStudents < 50){
                    discount = total - (total * 0.15);
                    console.log(`Judo ${discount.toFixed(2)} lv.`);
                } else if(numberStudents >= 10 && numberStudents < 20){
                    discount = total - (total * 0.05);
                    console.log(`Judo ${discount.toFixed(2)} lv.`);
                } else {
                    console.log(`Judo ${total.toFixed(2)} lv.`);
                }

            } else if (typeGroup === "girls") {
                total = numberStudents * numberNights * 9.60;
                if (numberStudents >= 50) {
                    discount = total - (total * 0.50);
                    console.log(`Gymnastics ${discount.toFixed(2)} lv.`);
                } else if(numberStudents >= 20 && numberStudents < 50){
                    discount = total - (total * 0.15);
                    console.log(`Gymnastics ${discount.toFixed(2)} lv.`);
                } else if(numberStudents >= 10 && numberStudents < 20){
                    discount = total - (total * 0.05);
                    console.log(`Gymnastics ${discount.toFixed(2)} lv.`);

                } else {
                    console.log(`Gymnastics ${total.toFixed(2)} lv.`);
                }

            } else if (typeGroup === "mixed") {
                total = numberStudents * numberNights * 10.00;
                if (numberStudents >= 50) {
                    discount = total - (total * 0.50);
                    console.log(`Ski ${discount.toFixed(2)} lv.`);
                } else if(numberStudents >= 20 && numberStudents < 50){
                    discount = total - (total * 0.15);
                    console.log(`Ski ${discount.toFixed(2)} lv.`);
                } else if(numberStudents >= 10 && numberStudents < 20){
                    discount = total - (total * 0.05);
                    console.log(`Ski ${discount.toFixed(2)} lv.`);
                } else {
                    console.log(`Ski ${total.toFixed(2)} lv.`);
                }

            }
            break;

        case "Spring":
            if (typeGroup === "boys") {
                total = numberStudents * numberNights * 7.20;
                if (numberStudents >= 50) {
                    discount = total - (total * 0.50);
                    console.log(`Tennis ${discount.toFixed(2)} lv.`);
                } else if(numberStudents >= 20 && numberStudents < 50){
                    discount = total - (total * 0.15);
                    console.log(`Tennis ${discount.toFixed(2)} lv.`);
                } else if(numberStudents >= 10 && numberStudents < 20){
                    discount = total - (total * 0.05);
                    console.log(`Tennis ${discount.toFixed(2)} lv.`);
                } else {
                    console.log(`Tennis ${total.toFixed(2)} lv.`);
                }


            } else if (typeGroup === "girls") {
                total = numberStudents * numberNights * 7.20;
                if (numberStudents >= 50) {
                    discount = total - (total * 0.50);
                    console.log(`Athletics ${discount.toFixed(2)} lv.`);
                } else if(numberStudents >= 20 && numberStudents < 50){
                    discount = total - (total * 0.15);
                    console.log(`Athletics ${discount.toFixed(2)} lv.`);
                } else if(numberStudents >= 10 && numberStudents < 20){
                    discount = total - (total * 0.05);
                    console.log(`Athletics ${discount.toFixed(2)} lv.`);
                } else {
                    console.log(`Athletics ${total.toFixed(2)} lv.`);
                }


            } else if (typeGroup === "mixed") {
                total = numberStudents * numberNights * 9.50;
                if (numberStudents >= 50) {
                    discount = total - (total * 0.50);
                    console.log(`Cycling ${discount.toFixed(2)} lv.`);
                } else if(numberStudents >= 20 && numberStudents < 50){
                    discount = total - (total * 0.15);
                    console.log(`Cycling ${discount.toFixed(2)} lv.`);
                } else if(numberStudents >= 10 && numberStudents < 20){
                    discount = total - (total * 0.05);
                    console.log(`Cycling ${discount.toFixed(2)} lv.`);
                } else {
                    console.log(`Cycling ${total.toFixed(2)} lv.`);
                }


            }
            break;

        case "Summer":
            if (typeGroup === "boys") {
                total = numberStudents * numberNights * 15.00;
                if (numberStudents >= 50) {
                    discount = total - (total * 0.50);
                    console.log(`Football ${discount.toFixed(2)} lv.`);
                } else if(numberStudents >= 20 && numberStudents < 50){
                    discount = total - (total * 0.15);
                    console.log(`Football ${discount.toFixed(2)} lv.`);
                } else if(numberStudents >= 10 && numberStudents < 20){
                    discount = total - (total * 0.05);
                    console.log(`Football ${discount.toFixed(2)} lv.`);
                } else {
                    console.log(`Football ${total.toFixed(2)} lv.`);
                }


            } else if (typeGroup === "girls") {
                total = numberStudents * numberNights * 15.00;
                if (numberStudents >= 50) {
                    discount = total - (total * 0.50);
                    console.log(`Volleyball ${discount.toFixed(2)} lv.`);
                } else if(numberStudents >= 20 && numberStudents < 50){
                    discount = total - (total * 0.15);
                    console.log(`Volleyball ${discount.toFixed(2)} lv.`);
                } else if(numberStudents >= 10 && numberStudents < 20){
                    discount = total - (total * 0.05);
                    console.log(`Volleyball ${discount.toFixed(2)} lv.`);
                } else {
                    console.log(`Volleyball ${total.toFixed(2)} lv.`);
                }


            } else if (typeGroup === "mixed") {
                total = numberStudents * numberNights * 20.00;
                if (numberStudents >= 50) {
                    discount = total - (total * 0.50);
                    console.log(`Swimming ${discount.toFixed(2)} lv.`);
                } else if(numberStudents >= 20 && numberStudents < 50){
                    discount = total - (total * 0.15);
                    console.log(`Swimming ${discount.toFixed(2)} lv.`);
                } else if(numberStudents >= 10 && numberStudents < 20){
                    discount = total - (total * 0.05);
                    console.log(`Swimming ${discount.toFixed(2)} lv.`);
                } else {
                    console.log(`Swimming ${total.toFixed(2)} lv.`);
                }


            }
            break;
    }
}

schoolCamp(["Spring", "girls", "20", "7"]); // Athletics 856.80 lv.
schoolCamp(["Winter", "mixed", "9", "15"]); // Ski 1350.00 lv.
schoolCamp(["Summer", "boys", "60", "7"]);    // Football 3150.00 lv.
schoolCamp(["Spring", "mixed", "17", "14"]);  // Cycling 2147.95 lv.