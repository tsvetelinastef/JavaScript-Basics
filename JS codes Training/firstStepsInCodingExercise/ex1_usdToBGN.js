function usdToBGN(input) {
    let usd = Number(input[0]);
    let bgn = usd * 1.79549;
    console.log(bgn);
}

usdToBGN(["22"]);
usdToBGN(["100"]);
usdToBGN(["12.5"]);