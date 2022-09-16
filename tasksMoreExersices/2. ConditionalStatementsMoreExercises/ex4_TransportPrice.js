function transportPrice(input) {
    let n = Number(input[0]);
    let day = input[1];

    //let taxi = 0.70;
    //let bus = 0;
    switch (day) {
        case "day":
            //taxi = 0.79;
            if (n < 20) {
                let totalAtDay = 0.70 + n * 0.79;
                // bus = 0.09;
                console.log(totalAtDay.toFixed(2));
            } else {
                if (n >= 100) {
                    let totalTrain = n * 0.06;
                    console.log(totalTrain.toFixed(2));
                } else {
                    let totalBus = n * 0.09;
                console.log(totalBus.toFixed(2));
                }
                //train = 0.06;
            }
            break;

        case "night":
           // taxi = 0.90;
            if (n < 20) {
                let totalAtNight = 0.70 + n * 0.90;
                // bus = 0.09;
                console.log(totalAtNight.toFixed(2));
            } else {
               
                if (n >= 100) {
                    let totalTrain = n * 0.06;
                    console.log(totalTrain.toFixed(2));
                } else {
                    let totalBus = n * 0.09;
                    console.log(totalBus.toFixed(2));
                }
                // if (n >= 100) 
               // train = 0.06;
            }
            break;
    }
}

transportPrice(["5", "day"]);
transportPrice(["7", "night"]);  
transportPrice(["25", "day"]);
transportPrice(["180", "night"]); // 10.80