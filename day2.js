const inputs = require('./inputs');

const parsed_input = inputs.getDay2Input();

const passwords = parsed_input['passowrds'];
const policy = parsed_input['policy'];

let passwordIsValid = function (policy, passowrd) {
    const policyParams = policy[0].split('-');
    const min = policyParams[0];
    const max = policyParams[1];
    const chr = policy[1];

    let numOfOccur = 0;

    for(c of passowrd){
        if(c==chr) numOfOccur++;
    }

    return numOfOccur >= min && numOfOccur <= max;
}

let passwordIsValid2 = function (policy, passowrd) {
    const policyParams = policy[0].split('-');
    const indx1 = policyParams[0];
    const char1 = passowrd[indx1-1];
    const indx2 = policyParams[1];
    const char2 = passowrd[indx2-1];
    const targetChar = policy[1];

    const condOnlyFirstMatch = char1 == targetChar && char2 != targetChar;
    const condSecondMatch = char1 != targetChar && char2 == targetChar;
    
    return condOnlyFirstMatch || condSecondMatch;
}

let numOfValidPass = 0;

for (let index = 0; index < passwords.length; index++) {
    const pass = passwords[index];
    const pol = policy[index];
    if (passwordIsValid2(pol, pass)) numOfValidPass++;
}

console.log(numOfValidPass);