function carNumber(input) {
    let enterInterval = Number(input[0]);
    let endInterval = Number(input[1]);

    let res = "";

    for(let i = enterInterval; i <= endInterval; i++){
        for(let j = enterInterval; j <= endInterval; j++){
            for(let k = enterInterval; k <= endInterval; k++){
                for(let l = enterInterval; l <= endInterval; l++){
                    let digitA = Number(i);
                    let digitB = Number(j);
                    let digitC = Number(k);
                    let digitD = Number(l);

                    if(digitA % 2 === 0){
                        if(digitD % 2 !== 0 ){
                            if(digitA > digitD){
                                if((digitB + digitC) % 2 === 0){
                                    res += `${digitA}${digitB}${digitC}${digitD} `;
                                }
                            }
                        }
                    } else {
                        if(digitD % 2 === 0){
                            if(digitA > digitD){
                                if((digitB + digitC) % 2 === 0){
                                    res += `${digitA}${digitB}${digitC}${digitD} `;
                                }
                            }
                        }
                    }    
                }
            }
        }
    }
    console.log(res);

}

carNumber(["2", "3"]);  // 3222 3332 
carNumber(["3", "5"]); // 4333 4353 4443 4533 4553 5354 5354 5444 5554
 carNumber(["5", "8"]); 
 // 6555 6575 6665 6685 6755 6775 6865 6885 7556 7576 7666 7686
 // 7756 7776 7866 7886 8555 8557 8575 8577 8665 8667 8685 8687
 // 8755 8757 8775 8777 8865 8867 8885 8887
