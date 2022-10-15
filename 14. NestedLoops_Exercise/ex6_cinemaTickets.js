/* Вашата задача е да напишете програма, която да изчислява 
процента на билетите за всеки тип от продадените билети: 
студентски(student), стандартен(standard) и детски(kid), 
за всички прожекции. Трябва да изчислите и колко процента от 
залата е запълнена за всяка една прожекция.
Вход
Входът е поредица от цели числа и текст:
    • На първия ред до получаване на командата "Finish" - име на
     филма – текст
    • На втори ред – свободните места в салона за всяка прожекция 
    – цяло число [1 … 100]
    • За всеки филм, се чете по един ред до изчерпване на свободните
     места в залата или до получаване на командата "End":
        o Типа на закупения билет - текст ("student", "standard",
         "kid")
Изход
На конзолата трябва да се печатат следните редове:
• След всеки филм да се отпечата, колко процента от кино залата е
 пълна "{името на филма} - {процент запълненост на залата}% full."
• При получаване на командата "Finish" да се отпечатат четири реда:
        o "Total tickets: {общият брой закупени билети за всички филми}"
        o "{процент на студентските билети}% student tickets."
        o "{процент на стандартните билети}% standard tickets."
        o "{процент на детските билети}% kids tickets."
//////////////////////////////////////////////////////////////////
Your task is to write a program that calculates
percentage of tickets for each type of tickets sold:
student, standard and kid,
for all screenings. You also need to calculate how many percent of
the hall is full for every screening.
Login
The input is a sequence of integers and text:
    • On the first line until receiving the command "Finish" - 
name of the film - text
    • In the second row – the free seats in the hall for each 
screening – integer [1 … 100]
    • For each movie, one line is read until the free ones run out
seats in the hall or until receiving the "End" command:
        o Purchased ticket type - text ("student", "standard", "kid")
Exit
The following lines should be printed to the console:
• After each film is printed, what percentage of the theater is
 full "{movie name} - {percent occupancy of the theater}% full."
 • On receiving the command "Finish" to print four lines:
    o "Total tickets: {the total number of tickets purchased for all movies}"
    o "{percent of student tickets}% student tickets."
    o "{percentage of standard tickets}% standard tickets."
    o "{percentage of kids tickets}% kids tickets."
*/

function cinemaTickets(input) {
    let index = 0;
    let command = input[index];
    index++;

    let studentCount = 0;
    let standardCount = 0;
    let kidCount = 0;
    let totalTicket = 0;

    while (command !== "Finish") {
        let name = command;
        let freeSpace = Number(input[index]);
        index++;
        let soldTicket = 0;
        // ticket / freeSpace * 100

        let tempCommand = input[index];
        index++;

        while (tempCommand !== "End") {
            let ticket = tempCommand;
            soldTicket++;

            switch (ticket) {
                case "student":
                    studentCount++;
                    break;
case 
            }
        }
    }
}

cinemaTickets(["Taxi", "10", "standard", "kid", "student", "student", "standard", "standard", "End", "Scary Movie", "6", "student", "student", "student", "student", "student", "student", "Finish"]);
cinemaTickets(["The Matrix", "20", "student", "standard", "kid", "kid", "student", "student", "standard", "student", "End", "The Green Mile", "17", "student", "standard", "standard", "student", "standard", "student", "End", "Amadeus", "3", "standard", "standard", "standard", "Finish"]); 
