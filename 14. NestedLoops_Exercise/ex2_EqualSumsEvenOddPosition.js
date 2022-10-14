/* Напишете функция, която получава две шестцифрени цели числа в 
диапазона от 100000 до 300000. Винаги първото въведено число ще 
бъде по малко от второто. На конзолата да се отпечатат на 1 ред 
разделени с интервал всички числа, които се намират между двете,
прочетени от конзолата числа и отговарят на следното условие:
• сумата от цифрите на четни и нечетни позиции да са равни. 
Ако няма числа, отговарящи на условието на конзолата не се извежда
резултат.

Write a function that receives two numbers from 100000 to 300000.
Everytime first entered number will be less than the second one.
firstNumber < secondNumber
On the console we print on one line separated with interval all 
the numbers, that are between the two, readed from the console
and be like:
the sum of the numbers on even and odd positions are equal.
If there isn't any nuumbers, matching the console condition is 
not displayed result.*/

function equalSumsEvenOddPosition(input) {
    let firstNumber = Number(input[0]);
    let secondNumber = Number(input[1]);

    let printLine = '';

    /* За да преминете през всички числа от интервала, направете 
for цикъл. След като сте получили входните числа, задайте първото
число за начална стойност на контролната променлива. Итерирайте 
до достигане на второто число, като увеличавате стойността на 
контролната променлива с 1: */
    for (let i = firstNumber; i <= secondNumber; i++) {
        // 2. Вземете числото на текущата позиция като текст, като го 
        //конкатенирате с празен стринг:       
        let currentNum = "" + i;
        // 3. За да обходите всяка цифра от числото, направете for цикъл. 
        //След като е взето като текст, вземете неговата дължина с 
        //.length. Итерирайте до достигане на дължината на числото,
        // като увеличавате стойността на контролната променлива с 1:


        // 4. Продължете към дописване на логиката за намиране на сумата 
        //на четна и нечетна позиция за всяко число. Декларирайте по 
        //една променлива за четната и нечетна сума.
        let oddSum = 0;
        let evenSum = 0;

        for (let j = 0; j <= currentNum.length; j++) {
            let currentDigit = Number(currentNum.charAt(j));

            // 5. За да намерите цифрите, които се намират на четна позиция,
            // използвайте условна if конструкция, проверите дали индекса му 
            //е четно число като го разделите модулно на 2(index % 2), ако е
            // четно, добавете го към сумата на четните, ако не е, към сумата 
            //на нечетните.           
            if (j % 2 === 0) {
                evenSum += currentDigit;
            } else {
                oddSum += currentDigit;
            }
        }

        if (oddSum === evenSum) {
            printLine += ` ${i}`;
        }
    }
    console.log(printLine);

}

equalSumsEvenOddPosition(["100000", "100050"]);
//equalSumsEvenOddPosition(["123456", "124000"]);
