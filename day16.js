const inputs = require('./inputs');

const parsed_input = inputs.getDay16Input();

const inRules = parsed_input[0];
const myTicket = parsed_input[1];
const otherTickets = parsed_input[2];

let satisfiesRange = function(num, range) {
    return num >= range[0] && num <= range[1];
}

let satisfiesRule = function(num, rule){
    let valid = false;

    rule["ranges"].forEach(range => {
        if(satisfiesRange(num, range)) valid = true;
    });

    return valid;
}

let getTicketInvalidFields = function (ticket, rules) {
    let invalidFields = [];

    ticket.forEach(field => {
        let valid = false; 

        rules.forEach(rule => {
            if(satisfiesRule(field, rule)) valid = true;
        })

        if(!valid) invalidFields.push(field);
    });

    return invalidFields;
}

let getAllInvalidFileds = function (tickets, rules) {
    let allInvalid = [];

    tickets.map(ticket => getTicketInvalidFields(ticket, rules)).forEach(list => allInvalid.push(...list));

    return allInvalid;
}

let getErrorRate = function(tickets, rules) {
    return getAllInvalidFileds(tickets, rules).reduce((acc, cur) => acc+cur, 0);
}

console.log(getErrorRate(otherTickets, inRules));

// ========= Part 2 ========= //

let getValidTickets = function(tickets, rules) {
    return tickets.filter(t => getTicketInvalidFields(t, rules).length == 0);
}

let getSatisfiedRulesNames = function(num, rules){
    return rules.filter(r => satisfiesRule(num, r)).map(r => r["name"]);
}

let mapField = function(tickets, rules, fieldIndx){
    let validFieldNames = rules.map(r => r["name"]);

    for (let i = 0; i < tickets.length; i++) {
        const num = tickets[i][fieldIndx];
        let satisfies = getSatisfiedRulesNames(num, rules);
        validFieldNames = satisfies.filter(f => validFieldNames.indexOf(f) >= 0);

        if(validFieldNames.length == 1) return validFieldNames;
    }

    return validFieldNames;
}

let allFieldsMapped = function(map) {
    return map.every(x => x.length <=1 || !x);    
}

let map = function(tickets, rules){
    let map = [];

    for (let i = 0; i < tickets[0].length; i++) {
        map[i] = mapField(tickets, rules, i);
    }
    
    while(!allFieldsMapped(map)){
        map.forEach((options, j) => {
            if(options.length == 1){
                for (let i = 0; i < map.length; i++) {
                    if(j!=i) map[i] = map[i].filter(o => o != options[0]);                    
                }
            }
        });
    }
    
    return map.map(f => f[0]);
}

let getReqMult = function(map, ticket, key) {
    let res = 1;

    map.forEach( (s,i) => {
        if(s.startsWith(key) == 0) res *= ticket[i];
    }) 
    
    return res;
} 

const validTickets = getValidTickets(otherTickets, inRules);
const fMap = map(validTickets, inRules);
const inKey = "d";

console.log(getReqMult(fMap, myTicket, inKey));


