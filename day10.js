const inputs = require('./inputs');

const parsed_input = inputs.getDay10Input();
parsed_input.push(0);

let getChainDiffs = function(chain){
    let diffs = {};

    for (let i = 1; i < chain.length; i++) {
        const diff = chain[i]-chain[i-1];
        
        if(typeof(diffs[diff]) == 'undefined') diffs[diff] = 1;
        else diffs[diff] = diffs[diff]+1;
    }

    diffs[3] = typeof(diffs[3]) == 'undefined' ? 1 : diffs[3]+1;

    return diffs;
}

let get1DiffBy3Diff = function(sorted_chain){
    let diffs = getChainDiffs(sorted_chain);
    return diffs[1]*diffs[3];
}

// ============ Part 2 ============ // 

let hash = {};

let getHash = function(chain){
    let str = "";
    for (let i = 0; i < chain.length; i++) {
        const c = chain[i];
        str += c;
    }
    return str;
}

let getPossibleArrangements = function(chain){
    if(chain.length==0 || chain.length==1) return chain.length;

    const first = chain[0];
    let count = 0;
    for (let i = 1; i < chain.length ; i++) {
        const element = chain[i];
        if(element-first <= 3) {
            let newChain = chain.slice(i);
            let newHash = getHash(newChain);
            let newCount = 0;
            
            if(typeof(hash[newHash]) != 'undefined'){
                newCount = hash[newHash];
            } else{
                newCount = getPossibleArrangements(newChain);
                hash[newHash] = newCount;
            }
            
            count = count + newCount;
        } else break;
    }
    return count;
}

const sorted_jolts = parsed_input.sort((a,b) => a-b);

console.log(get1DiffBy3Diff(sorted_jolts));

console.log(getPossibleArrangements(sorted_jolts));