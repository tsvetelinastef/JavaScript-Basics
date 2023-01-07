function tennisEquipment(input) {
    let priceTennisRocket = Number(input[0]);
    let numberTennisRocket = Number(input[1]);
    let pairTrainingShoes = Number(input[2]);

    let sneakers = priceTennisRocket / 6;
    let sum = (priceTennisRocket * numberTennisRocket + pairTrainingShoes * sneakers) * 1.2;
    let sumOne = Math.floor(sum / 8);
    let sum2 = Math.ceil((sum * 7) / 8);

    console.log(`Price to be paid by Djokovic ${sumOne}`);
    console.log(`Price to be paid by sponsors ${sum2}`);
}

  tennisEquipment(["850", "4", "2"]);
