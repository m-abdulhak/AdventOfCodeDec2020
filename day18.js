const inputs = require('./inputs');

const parsed_input = inputs.getDay18Input(1);
const parsed_input2 = inputs.getDay18Input(2);
    
const opF = {   "+": (num1, num2) => BigInt(num1)+BigInt(num2),
                "*": (num1, num2) => BigInt(num1)*BigInt(num2),};

let calc = function(exp){
    let res = null;
    let op = null;
    let stack = [];

    let i = 0;
    while(i<exp.length){
        let x = exp[i];

        if (res == null && op == null && parseInt(x)>=0){
            res = BigInt(x);
        }
        else if (x == "+" || x == "*") {
            op = x;
        }
        else if (parseInt(x)>=0) {
            res = opF[op](res, x);
            op = null;
        } else if (x == "("){
            if(res == null && op == null) {res = 0; op = "+"; };
            stack.push([res, op]);
            res = null;
            op = null;
        } else if (x == ")" && stack.length>0){
            let e = stack[stack.length-1];
            stack.pop();
            e.push(res);
            res = calc(e);
            op = null;
        }

        i++;
    }

    return res;
}


let calcSet = function(set){
    let res = [];

    set.forEach(exp => {
        res.push(calc(exp));
    });

    return res.reduce((acc, cur) => acc+cur, 0n);
}

console.log(calcSet(parsed_input));

// ========== Part 2 ========== //

let calcSet2 = function(set){
    let res = [];

    set.forEach(exp => {
        res.push(BigInt(calc2(exp)));
    });

    return res.reduce((acc, cur) => acc+cur, 0n);
}

function doPar(match, offset, string) {
    let parts = match.replace(/\(/g,"").replace(/\)/g,"");
    return calc2(parts);
}

function par(str) {
    return str.replace(/\([0-9\+\*]+\)/g, doPar);
}

function doAdd(match, offset, string) {
    let parts = match.split('+');
    return calc([parts[0], '+', parts[1]]);
}

function add(str) {
    return str.replace(/[0-9]+\+[0-9]+/g, doAdd);
}

function doMult(match, offset, string) {
    let parts = match.split('*');
    return calc([parts[0], '*', parts[1]]);
}

function mult(str) {
    return str.replace(/[0-9]+\*[0-9]+/g, doMult);
}

let calc2 = function(exp){
    let s = exp;

    while(s.indexOf("(") > 0 || s.indexOf(")") > 0){
        s = par(s);
    }
    
    while(s.indexOf("+") > 0){
        s = add(s);
    }
    
    while(s.indexOf("*") > 0){
        s = mult(s);
    }

    return s;
}

console.log(calcSet2(parsed_input2));