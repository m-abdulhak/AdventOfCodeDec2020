const inputs = require('./inputs');

const parsed_input = inputs.getDay1Input();

var getMultOf2ElemAddingTo = function(input, target){
    let map = {};

    for (let index = 0; index < input.length; index++) {
        const element = input[index];
        if(typeof(map[element]) != "undefined") return element * input[map[element]];

        map[target-element] = index; 
    }

    return false;
}

var getMultOf3ElemAddingTo = function(input, target){
    for (let index = 0; index < input.length; index++) {
        const element = input[index];
        const targetFor2 = target - element;
        const multOf2 = getMultOf2ElemAddingTo(parsed_input, targetFor2);
        if(multOf2) return multOf2*element; 
    }
}


console.log(getMultOf3ElemAddingTo(parsed_input,2020));