/* За Лора думите притежават голяма сила. Тя те моли да измислиш алгоритъм,
с който да откриеш коя е "най - силната" дума. До получаване на команда
"End of words" ще се четат от конзолата думи. За да се открие силата на
всяка една, трябва да се намери сборът от ASCII стойностите на символите,
от които се състои думата. Ако започва с 
гласна буква - 'a', 'e', 'i', 'o', 'u', 'y' (или техните еквивалентни
главни букви),полученият сбор трябва да се умножи по дължината на думата,
в противен случай, да се раздели на дължината и да се закръгли до 
най-близкото цяло число надолу.

Вход
До получаване на команда "End of words" се чете по един ред от конзолата:
 дума – текст 

Изход
След приключване на програмата се печата на един ред думата с 
"най-голяма сила":
 "The most powerful word is {думата с най-голяма сила} - 
{силата на думата}" */

function mostPowerfulWord(input) {
    let command = input.shift();
    let maxPowerWord = Number.MIN_SAFE_INTEGER;
    let powerfulWord = '';
    let isFirstLetter = false;
 
    while(command !== 'End of words'){
        let word = command;
        let lengthWord = word.length;
        let powerWord = 0;
 
        for(let i = 0; i < lengthWord; i++){
            let asciiCode = word.charCodeAt(i);
   
             if(i < 1){  
                powerWord += asciiCode;
 
                if(asciiCode === 97 || asciiCode === 101 || asciiCode === 105 || 
                    asciiCode === 111 || asciiCode === 117 || asciiCode === 121 || 
                    asciiCode === 65 || asciiCode === 69 || asciiCode === 73 ||
                    asciiCode === 79 || asciiCode === 85 || asciiCode === 89){
                    isFirstLetter = true;
                    } 
            } else {
                powerWord += asciiCode;
            } 
           
        }
        if(isFirstLetter){
            powerWord *= lengthWord;
        }  else {
            powerWord = Math.floor(powerWord / lengthWord);
         }
 
        if(powerWord > maxPowerWord){
            maxPowerWord = powerWord;
            powerfulWord = word;
        }
        
        isFirstLetter = false;
        command = input.shift();
    }
    console.log(`The most powerful word is ${powerfulWord} - ${maxPowerWord}`);
}

mostPowerfulWord(["The", "Most", "Powerful", "Word", "Is", "Experience", "End of words"]);
// The most powerful word is 
// Experience - 10320

mostPowerfulWord(["But", "Some", "People", "Say", "It's", "LOVE", "End of words"]);
// The most powerful word is 
// It's - 1372

