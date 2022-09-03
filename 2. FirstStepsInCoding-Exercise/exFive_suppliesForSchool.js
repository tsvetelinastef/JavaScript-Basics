function suppliesForSchool(input){
    let numberPens = Number(input[0]);
    let numberMarkers = Number(input[1]);
    let litersBoardCleaner = Number(input[2]);
    let percentDiscount = Number(input[3]);

    let priceNumberPens = numberPens * 5.80;
    let priceNumberMarkers = numberMarkers * 7.20;
    let priceLitersBoardCleaner = litersBoardCleaner * 1.20;
    let priceAllMaterials = priceNumberPens + priceNumberMarkers + priceLitersBoardCleaner;
    let total = priceAllMaterials - (priceAllMaterials * (percentDiscount / 100));
    console.log(total);
} 
suppliesForSchool(["4 ", "2 ", "5 ", "13 "]);