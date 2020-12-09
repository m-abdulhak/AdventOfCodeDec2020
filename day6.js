const inputs = require('./inputs');

const parsed_input = inputs.getDay6Input();

let sumOfUniqueAnswersForGroup = function(group){
  let uniqueAns = "";

  for (const person of group) {
    for (let i = 0; i < person.length; i++) {
      const c = person[i];

      if(uniqueAns.indexOf(c)>=0) continue ;
      
      uniqueAns += c;
    }    
  }

  return uniqueAns.length;
}

let sumOfSharedAnswersForGroup = function(group){
  let sharedAns = group[0];

  for (const person of group) {
    shared = "";
    for (let i = 0; i < person.length; i++) {
      const c = person[i];
      if(sharedAns.indexOf(c)>=0) shared += c ;
    }    
    sharedAns = shared;
  }

  return shared.length;
}

let countOfYesAnswers = function(groups){
  return groups.map(g => sumOfUniqueAnswersForGroup(g)).reduce((acc, val) => acc+val, 0);
}

let countOfSharedYesAnswers = function(groups){
  return groups.map(g => sumOfSharedAnswersForGroup(g)).reduce((acc, val) => acc+val, 0);
}

console.log(countOfYesAnswers(parsed_input));
console.log(countOfSharedYesAnswers(parsed_input));