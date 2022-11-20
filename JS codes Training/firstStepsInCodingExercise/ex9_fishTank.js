function fishTank(input) {
    let length = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);
    let percent = Number(input[3]);

    let volumeAquarium = length * width * height;
    let volumeLitters = volumeAquarium * 0.001;
    let littersNeeded = volumeLitters * (1 - (percent / 100));
    console.log(littersNeeded);
}

fishTank(["85 ", "75 ", "47 ", "17 "]);
fishTank(["105 ", "77 ", "89 ", "18.5 "]);
