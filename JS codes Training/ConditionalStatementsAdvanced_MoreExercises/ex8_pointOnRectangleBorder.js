function pointOnRectangleBorder(input) {
    let x1 = Number(input[0]);
    let y1 = Number(input[1]);
    let x2 = Number(input[2]);
    let y2 = Number(input[3]);
    let x = Number(input[4]);
    let y = Number(input[5]);

    // x1 < x2
    // y1 < y2

    // Да се отпечата "Border" (точката лежи на някоя от страните) 
    //или "Inside / Outside" (в противен случай). 

    let firstCondition =  ((x === x1 || x === x2) && ((y1 <= y) && (y <= y2))); 
    let secondCondition = ((y === y1 || y === y2) && ((x1 <= x) && (x <= x2)));
        
    if(firstCondition || secondCondition){
        console.log("Border");

    } else {
    console.log("Inside / Outside");
    }
}

pointOnRectangleBorder(["2", "-3", "12", "3", "8", "-1"]); // Inside / Outside
pointOnRectangleBorder(["2", "-3", "12", "3", "12", "-1"]); //Border
pointOnRectangleBorder(["2", "-3", "12", "3", "-8",  "-1"]); // Inside / Outside
pointOnRectangleBorder(["2", "-3", "12", "3" , "80", "-1"]); // Inside / Outside
pointOnRectangleBorder(["2", "-3","12", "3", "-8", "-10"]); // Inside / Outside)
pointOnRectangleBorder(["2","-3" ,"12" ,"3" ,"8" ,"100.5"]); // Inside / Outside
pointOnRectangleBorder(["2" , "-3", "12" ,"3", "2", "-1"]); // Border
pointOnRectangleBorder(["2", "-3",  "12",  "3",  "6.28", "-3"]); // Border
pointOnRectangleBorder(["2", "-3","12", "3", "10", "3"]); // Border
pointOnRectangleBorder([ "2", "-3", "12", "3", "2", "3"]); // Border
pointOnRectangleBorder(["2", "-3", "12", "3", "1", "3"]); // Inside / Outside
//pointOnRectangleBorder(["2", "-3", "12", "3", "2", "4"]); // Inside / Outside
//pointOnRectangleBorder(["2" , "-3" , "12" , "3", "12" , "4"]); // Inside / Outside
//pointOnRectangleBorder(["2", "-3", "12", "3", "13.456", "3"]); // Inside / Outside
//pointOnRectangleBorder(["2", "-3", "12", "3", "14", "-3"]); // Inside/ Outside
//pointOnRectangleBorder(["2", "-3", "12", "3", "12", "-4"]); // Inside / Outside
//pointOnRectangleBorder(["2", "-3", "12", "3", "2", "-5"]); // Inside / Outside
//pointOnRectangleBorder([ "2" ,"-3" ,"12" ,"3" ,"1.43" ,"-3"]); // Inside / Outside