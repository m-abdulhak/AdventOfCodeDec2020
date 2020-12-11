const inputs = require('./inputs');

const parsed_input = inputs.getDay11Input();

let getFirstStateInDirecton = function(map, x, y, deltaX, deltaY){
    let newX = x+deltaX, newY = y+deltaY;
    let condXValid = newX >= 0 && newX < map[0].length;
    let condYValid = newY >= 0 && newY < map.length;

    while(condXValid && condYValid){      
        let newState = map[newY][newX]; 

        if(newState == '#') return '#';
        else if(newState == 'L') return 'L';
        
        
        newX = newX+deltaX, newY = newY+deltaY;
        condXValid = newX >= 0 && newX < map[0].length;
        condYValid = newY >= 0 && newY < map.length;
    }

    return '.';
}

let adjacentSeatsState = function (map, x, y, policy) {
    let states = [];

    for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1 ; j++) {
            const posX = x+i, posY = y+j;
            if(i == 0 && j == 0 || typeof(map[posY]) == 'undefined' || typeof(map[posY][posX]) == 'undefined') continue;
            if(policy == 1){
                states.push(map[posY][posX]);
            } else{
                states.push(getFirstStateInDirecton(map, x, y, i, j));
            }
        }
    }
    return states;
}

let occAdjacentSeatsCount = function (map, x, y, policy) {
    return adjacentSeatsState(map, x, y, policy).reduce((acc, cur) => cur == "#"? acc+1 : acc, 0);
}

let doRound = function (map, policy) {
    const newMap = [];
    const maxAdjacentOcc = policy == 1 ? 4 : 5;
    
    for (let j = 0; j < map.length ; j++) {
        let newRow = '';

        for (let i = 0; i < map[0].length; i++) {
            const curState = map[j][i];
            
            if(curState == 'L' && occAdjacentSeatsCount(map, i, j, policy) == 0)  {
                newRow += '#';
            }
            else if(curState == '#' && occAdjacentSeatsCount(map, i, j, policy) >= maxAdjacentOcc){
                newRow += 'L';
            } else{
                newRow += curState;
            }  
        }

        newMap.push(newRow);
    }

    return newMap;
}

let areMapsSame = function(map1, map2){
    for (let j = 0; j < map.length ; j++) {
        for (let i = 0; i < map[0].length; i++) {
            if(map1[j][i] != map2[j][i]) return false;
        }
    }

    return true;
}

let getOccCount = function (map) {
    let count = 0;
    
    for (let j = 0; j < map.length ; j++) {
        for (let i = 0; i < map[0].length; i++) {
            if(map[j][i] == "#") count++;
        }
    }
    
    return count;
}

let map = parsed_input;
let newMap = doRound(map, 1);

while(!areMapsSame(map, newMap)){
    map = newMap;
    newMap = doRound(map, 1);
}

console.log(getOccCount(newMap));

map = parsed_input;
newMap = doRound(map, 2);

while(!areMapsSame(map, newMap)){
    map = newMap;
    newMap = doRound(map, 2);
}

console.log(getOccCount(newMap));