/* Write function about hours from 0:0 to 23:59 every on other row
hours should be in this format: "{hour}:{minutes}"
*/

function clock(){
    
    for (let hours = 0; hours <= 23; hours++) {
        for (let minutes = 0; minutes <= 59; minutes++) {
           // console.log(`${hours}:${minutes}`);
            //if (minutes < 10) {
               // console.log(`${hours}:0${minutes}`);
           // } else {
                console.log(`${hours}:${minutes}`);
            //}
        }
        
    }
} 

clock();
