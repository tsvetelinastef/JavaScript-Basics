function solve(input) {
    let target = Number(input[0]);

    index = 1;
    let command = input[index];
    index++;

    price = 0;
    totalPrice = 0;
    days = 0;


    while (command !== "closed") {
        type = input[index];
        index++;
        if (command === "haircut") {
            if (type === "mens") {
                price = 15;

            } else if (type === "ladies") {
                price = 20;

            } else if (type === "kids") {
                price = 10;
            }
        } else if (command === "color") {
            if (type === "touch up") {
                price = 20;
            } else if (type === "full color") {
                price = 30;
            }
        }

        totalPrice += price;
        days++;
        if (totalPrice >= target) {
            console.log("You have reached your target for the day!");
            break;
        }

        command = input[index];
        index++;

    }

    if (command === "closed") {
        let needed = target - totalPrice;
        console.log(`Target not reached! You need ${needed}lv. more.`);
    }    

    console.log(`Earned money: ${totalPrice}lv.`);
}

// solve(["300", "haircut", "ladies", "haircut", "kids", "color", "touch up", "closed"]);


