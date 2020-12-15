const inputs = require('./inputs');

const parsed_input = inputs.getDay14Input();

let decToBin = function (num) {
    let twoMult = 1;
    let binary = "";
    
    while(twoMult<=num){
        twoMult *= 2;
    }
    twoMult /= 2;

    while(twoMult >= 1){
        if(num >= twoMult){
            binary = binary + "1";
            num -= twoMult;
        } else {
            binary = binary + "0";
        }
        twoMult /= 2;
    }

    return binary;
}


let binToDec = function (str) {
    let val = 1;
    let res = 0;

    for (let i = str.length-1; i >= 0; i--) {
        const c = str[i];
        res += val * c;
        val *= 2;
    }

    return res;
}

let valAccToMask = function (val, mask) {
    let valBin = "" + decToBin(val);
    const valLen = valBin.length;
    const maskLen = mask.length;
    let newBin = "";

    for (let i = 1; i <= mask.length; i++) {
        let c = valBin[valLen - i];
        c = typeof(c) == 'undefined' ? '0' : c;

        let m = mask[maskLen - i];
        
        newBin = (m == 'X' ? c : m) + newBin;
    }

    const res = binToDec(newBin);

    return res;
}

let simProg = function (prog) {
    let mem = {};
    let mask = "";
    
    for (let i = 0; i < prog.length; i++) {
        const cmd = prog[i];
        
        if(cmd[0] == 0){
            mask = cmd[1]
        } else {
            let val = valAccToMask(cmd[2], mask);
            mem[cmd[1]] = val;
        }
        
    }

    return mem;
}

let sumMem = function name(memory) {
    let sum = 0;

    Object.keys(memory).forEach(element => {
        sum += memory[element];
    });
    
    return sum;
}


let mem = simProg(parsed_input);
console.log(sumMem(mem));

// ========== Part 2 ========== //

let getAllMemAddresses = function (address, mask) {
    let addList = [""];
    let valBin = "" + decToBin(address);
    const valLen = valBin.length;
    const maskLen = mask.length;

    for (let i = 1; i <= mask.length; i++) {
        let c = valBin[valLen - i];
        c = typeof(c) == 'undefined' ? '0' : c;

        let m = mask[maskLen - i];

        if(m == '1'){
            c = '1';
        }

        if(m == 'X'){
            c = null;
        }

        let newList = [];
        for (let index = 0; index < addList.length; index++) {

            if(c == '1' || c == '0'){
                newList.push(c + addList[index]);
            } else {
                newList.push('1' + addList[index]);
                newList.push('0' + addList[index]);
            }
        }
        addList = newList;
    }

    const res = addList.map(add => binToDec(add));

    return res;
}

let simProg2 = function (prog) {
    let mem = {};
    let mask = "";
    
    for (let i = 0; i < prog.length; i++) {
        const cmd = prog[i];
        
        if(cmd[0] == 0){
            mask = cmd[1];
        } else {
            let addresses = getAllMemAddresses(cmd[1], mask);

            for (let index = 0; index < addresses.length; index++) {
                const address = addresses[index];
                mem[address] = cmd[2];                
            }
        }   
    }
    return mem;
}

mem = simProg2(parsed_input);
console.log(sumMem(mem));