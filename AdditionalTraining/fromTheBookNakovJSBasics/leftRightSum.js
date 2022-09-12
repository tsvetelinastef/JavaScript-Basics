//    38 of  100 in Judge 



function leftRightSum(input){
    let n = Number(input[0]);
    let leftSum = 0;
    let rightSum = 0;

    for(let i = 1; i <= n; i++){
        leftSum += Number(input[i]);
    }

    for (let i = 1; i <= n; i++) {
        rightSum += Number(input[i]);
    }

    if(leftSum === rightSum){
        console.log("Yes, sum = " + leftSum);
    } else {
        console.log("No, diff = " + Math.abs(leftSum - rightSum));
    }


}

//leftRightSum(["2", "10", "90", "60", "40"]);  // Yes, sum = 100
leftRightSum(["2", "90", "9", "50" , "50"]);  // No, diff = 1

/*
Write a program that enter 2 * n int numbers and check If sum of first n numbers (left sum) is equal to the sum of 
the second n numbers (right sum). If everything is equal --> prints "Yes" + sum, if not --> prints "No" + difference.
The difference is calculated like positive number (absolute). 
*/
