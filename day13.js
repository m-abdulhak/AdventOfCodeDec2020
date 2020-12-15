const inputs = require('./inputs');

const parsed_input1 = inputs.getDay13Input(1);
const parsed_input2 = inputs.getDay13Input(2);

let getClosestMult = function (num, bases) {
    const start = num;
    while(true){
        for (let i = 0; i < bases.length; i++) {
            const base = bases[i];
            if(base == -1) continue;
            // console.log(num, base, num%base);
            if(num % base == 0) return (num-start)*base;
        }    
        num++;
    }
}

console.log(getClosestMult(parsed_input1[0], parsed_input1[1]));

// ======== Part 2 ======== // 

// external
const modInverse = (a,m) => {
    let g = gcd(a, m);

    if(g != 1n){
        console.log("No Inverse");
    } else {
        return power(a,m-2n,m)
    }
}

// external
const power = (x, y, m) => {
    if(y===0n) return 1n;

    let p = power(x, y/2n, m) % m;
    p = (p*p) % m;

    if(y%2n === 0n) return p;
    else return ((x*p) % m);
}

// external
const gcd = (a,b) => {
    if(a===0n) return b;
    return gcd(b%a, a)
}

let getClosestSeries2 = function(buses){
    let busList = buses.map((id, indx) => {if(id != -1) return [id, BigInt(indx)]}).filter(bus => typeof(bus) != 'undefined');

    let Multi = 1n;
    
    busList.forEach(bus => Multi *= bus[0])
    
    let Ni = busList.map(bus => Multi/bus[0]);

    let b = busList.map((bus, i) => i == 0 ? 0n : bus[0] - bus[1] );

    let x = busList.map((item,i) => modInverse(Ni[i], item[0]));

    let bnx = Ni.map((item, i) => item*b[i]*x[i]);

    let sum = bnx.reduce((acc, cur) => acc+cur, 0n);
    
    return sum - (sum/Multi)*Multi;
}

console.log(getClosestSeries2(parsed_input2[1]));
