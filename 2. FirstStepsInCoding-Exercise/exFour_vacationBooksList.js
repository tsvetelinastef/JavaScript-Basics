function  vacationBooksList(input){
    let pages = Number(input[0]);
    let pagesPerHour = Number(input[1]);
    let days = Number(input[2]);

    let maxTimeForReadingBook = pages / pagesPerHour;
    let neededHoursPerDay = maxTimeForReadingBook / days;
    console.log(neededHoursPerDay);
} 
vacationBooksList(["432 ", "15 ", "4 "]);