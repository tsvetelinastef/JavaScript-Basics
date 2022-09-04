function tradeCommissions(input) {
    let town = input[0];
    let slesVolume = Number(input[1]);
    switch (town) {
        case "Sofia":
            if(slesVolume >= 0 && slesVolume <= 500){
                slesVolume = slesVolume * 0.05;
                console.log(slesVolume.toFixed(2));
            } else if(500 < slesVolume && slesVolume <= 1000){
                slesVolume = slesVolume * 0.07;
                console.log(slesVolume.toFixed(2));
            } else if(1000 < slesVolume && slesVolume <= 10000){
                slesVolume = slesVolume * 0.08;
                console.log(slesVolume.toFixed(2));
            } else if(slesVolume > 10000){
                slesVolume = slesVolume * 0.12;
                console.log(slesVolume.toFixed(2));
            } else {
                console.log("error");
            }
            break;
        case "Varna":
            if(slesVolume >= 0 && slesVolume <= 500){
                slesVolume = slesVolume * 0.045;
                console.log(slesVolume.toFixed(2));
            } else if(500 < slesVolume && slesVolume <= 1000){
                slesVolume = slesVolume * 0.075;
                console.log(slesVolume.toFixed(2));
            } else if(1000 < slesVolume && slesVolume <= 10000){
                slesVolume = slesVolume * 0.1;
                console.log(slesVolume.toFixed(2));
            } else if(slesVolume > 10000){
                slesVolume = slesVolume * 0.13;
                console.log(slesVolume.toFixed(2));
            } else {
                console.log("error");
            }
            break;
        case "Plovdiv":
            if(slesVolume >= 0 && slesVolume <= 500){
                slesVolume = slesVolume * 0.055;
                console.log(slesVolume.toFixed(2));
            } else if(500 < slesVolume && slesVolume <= 1000){
                slesVolume = slesVolume * 0.08;
                console.log(slesVolume.toFixed(2));
            } else if(1000 < slesVolume && slesVolume <= 10000){
                slesVolume = slesVolume * 0.12;
                console.log(slesVolume.toFixed(2));
            } else if(slesVolume > 10000){
                slesVolume = slesVolume * 0.145;
                console.log(slesVolume.toFixed(2));
            } else {
                console.log("error");
            }
            break;

            default: 
            console.log("error"); break;
    }
} 
tradeCommissions(["Sofia", "1500"]);
tradeCommissions(["Plovdiv", "499.99"]);
tradeCommissions(["Varna", "3874.50"]);
tradeCommissions(["Kaspichan", "-50"]);
