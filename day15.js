const inputs = require('./inputs');

const parsed_input = inputs.getDay15Input();

let lastNum;
let numsTurnsMap = {};

let playTurn = function (startingNums, i, starting = false) {
    let numToSpeak = 0;

    if(!starting){
        const lastNumTurns = numsTurnsMap[lastNum];
        if(typeof(lastNumTurns) != 'undefined' && lastNumTurns.length == 1) numToSpeak = 0;
        else numToSpeak = i - 1 - lastNumTurns[lastNumTurns.length - 2];
    } else {
        numToSpeak = startingNums[i];
    }

    lastNum = numToSpeak;
    
    let l = numsTurnsMap[numToSpeak];
    if(!l) {
        numsTurnsMap[numToSpeak] = [i];
    } else {
        if(l.length == 1) {
            numsTurnsMap[numToSpeak].push(i);
        }
        else if(l.length == 2) {
            numsTurnsMap[numToSpeak][0] = numsTurnsMap[numToSpeak][1];
            numsTurnsMap[numToSpeak][1] = i;
        }
    }
}

let play = function(startingNums, rounds){
    lastNum = 0;
    numsTurnsMap = {};
    let round = 0;

    for (round = 0; round < rounds; round++) {
        playTurn(startingNums, round, round < startingNums.length);
        if(rounds-round == 1) console.log("Round:", round+1, "Number:", lastNum);
    }
}

play(parsed_input, 2020);

// ========== Part 2 ========== //

play(parsed_input, 30000000);