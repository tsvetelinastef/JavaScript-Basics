function evenPowersOfTwo(input){
    
        // степени от 0 до n
        // повтаряме: печатаме 2 на дадената степен
        // начална стойност: 0
        // крайна стойност:  n
        // променяме: увеличаваме с 2 степените
        let n = Number(input[0]);

        for (let power = 0; power <= n; power += 2) {   
            console.log(`${Math.pow(2, power)}`);   
        }

}

//evenPowersOfTwo(["3"]);
//evenPowersOfTwo(["4"]);
//evenPowersOfTwo(["5"]);
evenPowersOfTwo(["6"]);
//evenPowersOfTwo(["7"]);