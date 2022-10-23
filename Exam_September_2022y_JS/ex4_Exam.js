function grades(input) {

    let studentsCount = Number(input[0]);

    let topStudents = 0;
    let goodStudents = 0;
    let middleStudents = 0;
    let badStudents = 0;
    let allGtrades = 0;



    for (let i = 1; i <= studentsCount; i++) {
        let currentGrade = Number(input[i]);
        allGtrades += Number(input[i]);

        if (currentGrade < 3.00) {
            badStudents += 1;
        } else if (currentGrade <= 3.99) {
            middleStudents += 1;
        } else if (currentGrade <= 4.99) {
            goodStudents += 1;
        } else if (currentGrade >= 5.00) {
            topStudents += 1;
        }
    }

    let topStudensPercent = topStudents / studentsCount * 100;
    let goodStudentsPercent = goodStudents / studentsCount * 100;
    let middleStudentsPercent = middleStudents / studentsCount * 100;
    let badStudentsPercent = badStudents / studentsCount * 100;

    let avgGrade = allGtrades / studentsCount;


    console.log(`Top students: ${topStudensPercent.toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${goodStudentsPercent.toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${middleStudentsPercent.toFixed(2)}%`);
    console.log(`Fail: ${badStudentsPercent.toFixed(2)}%`);
    console.log(`Average: ${avgGrade.toFixed(2)}`);
}

//grades(["10", "3.00", "2.99", "5.68", "3.01", "4", "4", "6.00", "4.50", "2.44", "5"]);
grades(["6", "2", "3", "4", "5", "6", "2.2"]); 


