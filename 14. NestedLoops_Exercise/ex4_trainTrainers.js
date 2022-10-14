/* Курсът "Train the trainers" е към края си и финалното оценяване 
наближава. Вашата задача е да помогнете на журито, което ще оценява
презентациите, като напишете функция, която да изчислява средната 
оценка от представянето на всяка една презентация от даден студент,
а накрая средният успех от всички тях.
От първия елемент на масива се прочита броят на хората в журито 
n - цяло число в интервала [1…20]
След това името на презентацията - текст
За всяка една презентация като нов елемент се чете n - на брой 
оценки - реално число в интервала  [2.00…6.00]
След изчисляване на средната оценка за конкретна презентация,
на конзолата се печата "{името на презентацията} - {средна оценка}."
След получаване на команда "Finish" на конзолата се печата 
"Student's final assessment is
{среден успех от всички презентации}." и програмата приключва.
Всички оценки трябва да бъдат форматирани до втория знак след
десетичната запетая.

The "Train the trainers" course is nearing its end and the
final evaluation is approaching. Your task is to help the
judging panel presentations by writing a function to calculate
the average evaluation of the performance of each presentation by
a given student, and finally the GPA of all of them.
The number of people in the jury is read from the first element 
of the array n - an integer in the interval [1…20]
Then the name of the presentation - text
For each one presentation as a new element is read n - in number
grades - real number in the interval [2.00…6.00]
After calculating the average score for a particular presentation,
the console prints "{presentation name} - {average grade}."
After receiving a command "Finish" is printed on the console
"Student's final assessment is
{average success of all presentations}.” and the program ends.
All values ​​must be formatted to the second character after
decimal mark. */

function trainTrainers(input){
    let index = 0;
    let people = Number(input[index]);
    index++;

    let command = input[index];
    index++;
    let sumOfGrade = 0;
    let counter = 0;

    while (command !== "Finish") {
        let name = command;
        counter++;
        let tempSumOfGrade = 0;
        for (let i = 0; i < people; i++) {
            let grade = Number(input[index]);
            index++;
            tempSumOfGrade += grade;
        }

        let tempAvgGrade = tempSumOfGrade / people;
        sumOfGrade += tempAvgGrade;
        console.log(`${name} - ${tempAvgGrade.toFixed(2)}.`);

        command = input[index];
        index++;
       }

       let avgGrade = sumOfGrade / counter;
       console.log(`Student's final assessment is ${avgGrade.toFixed(2)}.`);
   
}

trainTrainers(["2", "While-Loop", "6.00", "5.50", "For-Loop", "5.84", "5.66", "Finish"]);
//trainTrainers(["3", "Arrays", "4.53", "5.23", "5.00", "Lists", "5.83", "6.00", "5.42", "Finish"]);
//trainTrainers(["2", "Objects and Classes", "5.77", "4.23", "Dictionaries", "4.62", "5.02", "RegEx", "2.88", "3.42", "Finish"]);

