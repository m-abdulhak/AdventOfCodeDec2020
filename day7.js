const inputs = require('./inputs');

const parsed_input = inputs.getDay7Input();

let getBagContents = function(bag){
  let contents = parsed_input[bag];

  if(typeof(contents) == "undefined" || contents.length == 0) return [];

  let fullContents = [];

  contents.forEach( r => {
    fullContents.push(r);

    const color = r[0];
    const count = r[1];

    getBagContents(color).forEach( c => {
      fullContents.push([c[0], count*c[1]]);  
    }) 
  });

  return fullContents;
}

let bagsContaining = function(contentColor, rules){
  return Object.keys(rules).map(key => rules[key]).reduce((acc, listOfContents) => {
    for (const rule of listOfContents) {
      if(rule[0] == contentColor) return acc+1;    
    }
    return acc;
  }, 0);
}

let bagContains = function(bagColor, rules){
  return rules[bagColor].reduce((acc, r) => {
    return acc+r[1];
  }, 0);
}

let rules = [];

Object.keys(parsed_input).forEach(bag => {
  rules[bag] = getBagContents(bag);
})

console.log(bagsContaining('shiny gold', rules));

console.log(bagContains('shiny gold', rules));