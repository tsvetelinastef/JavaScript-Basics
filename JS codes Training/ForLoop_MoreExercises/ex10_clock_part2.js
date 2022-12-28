function clock_part2(input){
    for (let j = 0; j < 24; j++) {
        for (let i = 0; i < 60; i++) {
            for(let k = 0; k < 60; k++){
                console.log(`${j} : ${i} : ${k}`);
            }
        }
    }
}

clock_part2()