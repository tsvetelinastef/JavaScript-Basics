function fishTank(input){
    let l = Number(input[0]);
    let w = Number(input[1]);
    let h = Number(input[2]);
    let percent = Number(input[3]);

    let fishTankVolume = l * w * h;
    let fishTankVolumeLiters = fishTankVolume / 1000;
    // space occupied = percent / 100
    let total = fishTankVolumeLiters - (fishTankVolumeLiters * (percent /100));
    console.log(total);
}
fishTank(["105 ", "77 ", "89 ", "18.5 "]);