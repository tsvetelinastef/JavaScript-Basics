function grades(input) {
    let index = 0;
    let numberStudents = Number(input[index++]);

    let gradeSum = 0;
    let grade5andUpCounter = 0;
    let grade4and499Counter = 0;
    let grade3and399Counter = 0;
    let grade3downCounter = 0;

    for (let i = 1; i <= numberStudents; i++) {
        let grade = Number(input[index++]);
        gradeSum += grade;

        if (grade >= 5) {
            grade5andUpCounter++;
        } else if (grade >= 4 && grade <= 4.99) {
            grade4and499Counter++;
        } else if (grade >= 3 && grade <= 3.99) {
            grade3and399Counter++;
        } else if (grade < 3) {
            grade3downCounter++;
        }
    }

    let avgGrade = gradeSum / numberStudents;
    let grade5up = (grade5andUpCounter / numberStudents) * 100;
    let grade4to499 = (grade4and499Counter / numberStudents) * 100;
    let grade3to399 = (grade3and399Counter / numberStudents) * 100;
    let grade3toDown = (grade3downCounter / numberStudents) * 100;

    console.log(`Top students: ${grade5up.toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${grade4to499.toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${grade3to399.toFixed(2)}%`);
    console.log(`Fail: ${grade3toDown.toFixed(2)}%`);
    console.log(`Average: ${avgGrade.toFixed(2)}`);
}

grades(["10", "3.00", "2.99", "5.68", "3.01", "4", "4", "6.00", "4.50", "2.44", "5"]);
grades(["6", "2", "3", "4", "5", "6", "2.2"]);