function latinLetters(){
    for(let i = 97 ; i <= 122; i++){
        // from number of letter -> to just letter
        console.log(String.fromCharCode(i));
    }
} 

/*
for(let ch = 'a'.charCodeAt(0); ch <= 'z'.charCodeAt(0); ch++){
    console.log(String.fromCharCode(ch));
}
*/

latinLetters();
