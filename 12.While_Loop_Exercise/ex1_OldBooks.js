function oldBooks(input) {
    let favoriteBook = input.shift();
    let numberofBooks = Number(input.shift());
   
    let counter = 0;
    let bookisFound = false;
 
    let nextBookName = input.shift();
   
    while (counter !=numberofBooks) {
       
 
        if(nextBookName == favoriteBook){
            bookisFound  = true;
            break;
        }
        counter++;
        nextBookName = input.shift();
        }
    if(bookisFound ==  false){
            console.log(`The book you search is not here!`);
            console.log(`You checked ${numberofBooks} books.`);
    }else{
            console.log(`You checked ${counter} books and found it.`);
    }
}

oldBooks(["Troy",
    "Stronger",
    "Life Style",
    "Troy"]);





/*
 let favoriteBook = input.shift();
    let numberofBooks = Number(input.shift());
   
    let counter = 0;
    let bookisFound = false;
 
    let nextBookName = input.shift();
   
    while (counter !=numberofBooks) {
       
 
        if(nextBookName == favoriteBook){
            bookisFound  = true;
            break;
        }
        counter++;
        nextBookName = input.shift();
        }
    if(bookisFound ==  false){
            console.log(`The book you search is not here!`);
            console.log(`You checked ${numberofBooks} books.`);
    }else{
            console.log(`You checked ${counter} books and found it.`);
    }
*/