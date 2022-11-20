function vacationBooksList(input) {
    let numberPages = Number(input[0]);
    let pages = Number(input[1]);
    let numberDays = Number(input[2]);

    let timeReading = numberPages / pages;
    let neededHours = timeReading / numberDays;
    console.log(neededHours);
}

vacationBooksList(["212 ", "20 ", "2 "]);
vacationBooksList(["432 ", "15 ", "4 "]);
