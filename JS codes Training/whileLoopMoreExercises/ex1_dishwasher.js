function dishwasher(input) {
    let index = 0;
    let bottlesDetergent = Number(input[index]);

    let dishes = 0;
    let remainSaucepan = 0;
    let remainDishes = 0;
    while (bottlesDetergent !== "End") {
        let quantityDetergent = bottlesDetergent * 750;
        index++;
        dishes = bottlesDetergent * 5;
        remainDishes = quantityDetergent - dishes;
        dishes = bottlesDetergent * 5;
        remainDishes = quantityDetergent - dishes;
        let saucepan = bottlesDetergent * 15;
        remainSaucepan = remainDishes - saucepan;

        if ( > ) {
let cleanDishes = 
            console.log("Detergent was enough!");
            console.log(`${ } dishes and ${брой чисти тенджери } pots were washed.`);
            console.log(`Leftover detergent ${количество останал препарат } ml.`);
        }


        //console.log(bottlesDetergent);
        //index++;
        //let bottlesDetergent = Number(input[index]);
    }

}

dishwasher(["2", "53", "65", "55", "End"]);
dishwasher(["1", "10", "15", "10", "12", "13", "30"]);
