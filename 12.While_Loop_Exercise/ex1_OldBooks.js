/* Ани отива до родния си град след много дълъг период извън 
страната. Прибирайки се вкъщи тя вижда старата библиотека на 
баба си и си спомня за любимата си книга. Помогнете на Ани, като
напишете функция в която тя въвежда търсената от нея книга(текст).
Докато Ани не намери любимата си книга или не провери всички в 
библиотеката, програмата трябва да чете всеки път на нов ред името
на всяка следваща книга (текст). Книгите в библиотеката са 
свършили щом получите текст "No More Books".
• Ако не открие книгата да се отпечата на два реда: 
    o "The book you search is not here!"
    o "You checked {брой} books."
• Ако открие книгата си се отпечатва един ред:
    o "You checked {брой} books and found it." */

function oldBooks(input) {
    let index = 1;
    let favoriteBook = input[0];

    let isBookFound = false;
    let nextBook = input[index];
    while (nextBook !== "No More Books") {
        if (nextBook === favoriteBook) {
            isBookFound = true;
            break;
        }
        index++;
        nextBook = input[index];
    }

    if (isBookFound === false) {
        console.log("The book you search is not here!");
        console.log(`You checked ${index - 1} books.`);
    } else {
        console.log(`You checked ${index - 1} books and found it.`);
    }
}

oldBooks(["Troy", "Stronger", "Life Style", "Troy"]);
// You checked 2 books and found it.
oldBooks(["The Spot", "Hunger Games", "Harry Potter", "Torronto",
    "Spotify", "No More Books"]);
// The book you search is not here! You checked 4 books.
oldBooks(["Bourne", "True Story", "Forever", "More Space",
    "The Girl", "Spaceship", "Strongest", "Profit", "Tripple",
    "Stella", "The Matrix", "Bourne"]);
// You checked 10 books and found it.


