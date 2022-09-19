function sequenceTwokPlusOne(input){
    let n = Number(input[0]);  // until the input number -> 3 , than 8, than 17 , than 31

    let index = 1; //If it's  let index = 0;  // initial value
    while(index <= n){    // zero <= 3 
        console.log(index); // prints the zero 0 ,...than 1 , ...than 2, 
        index = 2 * index + 1; // 0 = 2 * 0 + 1, it becomes 1;..... than 3
    }
} 

//sequenceTwokPlusOne(["3"]);
//sequenceTwokPlusOne(["8"]);
//sequenceTwokPlusOne(["17"]);
sequenceTwokPlusOne(["31"]);
