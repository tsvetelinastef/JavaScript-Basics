function trekkingMania(input) {
    let numberGroups = Number(input[0]);

    let peopleCount = 0;
    let peopleInGroup1 = 0;
    let peopleInGroup2 = 0;
    let peopleInGroup3 = 0;
    let peopleInGroup4 = 0;
    let peopleInGroup5 = 0;

    for (let i = 1; i <= numberGroups; i++) {
        let numberPeopleInGroup = Number(input[i]);
        peopleCount += numberPeopleInGroup;

        if (numberPeopleInGroup <= 5) {
            peopleInGroup1 += numberPeopleInGroup;
        } else if (numberPeopleInGroup >= 6 && numberPeopleInGroup <= 12) {
            peopleInGroup2 += numberPeopleInGroup;
        } else if (numberPeopleInGroup >= 13 && numberPeopleInGroup <= 25) {
            peopleInGroup3 += numberPeopleInGroup;
        } else if (numberPeopleInGroup >= 26 && numberPeopleInGroup <= 40) {
            peopleInGroup4 += numberPeopleInGroup;
        } else {
            peopleInGroup5 += numberPeopleInGroup;
        }
       
    }


    console.log(`${(peopleInGroup1 / peopleCount * 100).toFixed(2)}%`);
    console.log(`${(peopleInGroup2 / peopleCount * 100).toFixed(2)}%`);
    console.log(`${(peopleInGroup3 / peopleCount * 100).toFixed(2)}%`);
    console.log(`${(peopleInGroup4 / peopleCount * 100).toFixed(2)}%`);
    console.log(`${(peopleInGroup5 / peopleCount * 100).toFixed(2)}%`);


}

trekkingMania(["10", "10", "5", "1", "100", "12", "26", "17", "37", "40", "78"]);
//trekkingMania(["5", "25", "41", "31", "250", "6"]);

/*
    let resOne = peopleInGroup1 * 1.0 / sumAllPeople * 100;
    console.log(resOne.toFixed(2) + "%");

    let resTwo = peopleInGroup2 * 1.0 / sumAllPeople * 100;
    console.log(resTwo.toFixed(2) + "%");

    let resThree = peopleInGroup3 * 1.0 / sumAllPeople * 100;
    console.log(resThree.toFixed(2) + "%");

    let resFour = peopleInGroup4 * 1.0 / sumAllPeople * 100;
    console.log(resFour.toFixed(2) + "%");

    let resFive = peopleInGroup5 * 1.0 / sumAllPeople * 100;
    console.log(resFive.toFixed(2) + "%");

*/
