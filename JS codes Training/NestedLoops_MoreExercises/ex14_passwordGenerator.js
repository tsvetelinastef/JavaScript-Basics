function passwordGenerator(input) {
    let n = Number(input[0]);
    let l = Number(input[1]);

    let res = "";

    for (let i = 1; i <= n; i++) {
        for (let k = 1; k <= n; k++) {
            for (let m = 1; m <= l; m++) {
                for (let j = 1; j <= l; j++) {
                    for (let v = 1; v <= n; v++) {
                        let symbolA = Number(i);
                        let symbolB = Number(k);
                        let symbolC = String.fromCharCode(96 + m);
                        let symbolD = String.fromCharCode(96 + j);
                        let symbolE = Number(v);
                        if (symbolE > symbolA && symbolE > symbolB) {
                          res += `${symbolA}${symbolB}${symbolC}${symbolD}${symbolE} `;

                        }
                    }
                }
            }
        }
    }
    console.log(res);
} 

passwordGenerator(["4", "2"]);