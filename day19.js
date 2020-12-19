const inputs = require('./inputs');

const parsed_input = inputs.getDay19Input(1);
const parsed_input2 = inputs.getDay19Input(2);

let messages = parsed_input[1];
let rules = parsed_input[0];    
let done = {};

logging = false;

let log = function(...params){
    if(logging) console.log(...params);
}

let getDone = function() {    
    let changed = false;

    Object.keys(rules).forEach(k => {
        let r = rules[k];

        log(k, r, "Done?", r.match(/[0-9]/) === null);

        if(r.match(/[0-9]/) === null){
            done[k] = r;
            changed = true;
            delete rules[k];
        }
    });

    return changed;
}

let procRules = function() {
    while(getDone()){
        Object.keys(rules).forEach(k => {
            log("Looking for rule matches in:", k, rules[k]);

            rules[k] = rules[k].replace(/\([0-9]+\)/g, x => {

                let keyInt = parseInt(x.substr(1));

                log("Matched:", x, "In:", rules[k], k, keyInt, "In Done?", typeof(done[keyInt]) != 'undefined');

                if(typeof(done[keyInt]) != 'undefined'){
                    log("Replacing with:", done[keyInt])
                    return done[keyInt];
                }
                
                log("Not replaced!");
                
                return x;
            })

            log("Rule Now:", k, rules[k]);
        });
    }
}

let getMatchingMessages = function(rule, messages) {
    let matchingMsgs = [];
    let reg = new RegExp(rule, 'g');

    messages.forEach(m => {
        let matches = m.match(reg);

        if(matches && matches.length == 1 && matches[0] == m){
            matchingMsgs.push(m);
        }
    })

    return matchingMsgs.length;    
}

procRules()

console.log(getMatchingMessages(done[0], messages))

// ========== Part 2 ========== //

messages = parsed_input2[1];
rules = parsed_input2[0];    
done = {};

procRules()

console.log(getMatchingMessages(done[0], messages))