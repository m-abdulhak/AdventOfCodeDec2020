const inputs = require('./inputs');

const parsed_input = inputs.getDay3Input();

let findTrees = function (map, slope) {
    const delta_x = slope[0];
    const delta_y = slope[1];

    let x = 0, y = 0;
    let treeCount = 0;

    while(y < map.length-1){
        x = (x + delta_x) % map[0].length;
        y = y + delta_y;
        let cur_landmark = map[y][x];
        
        if(cur_landmark == '#') treeCount++;
    }
    
    return treeCount;
}

console.log(findTrees(parsed_input,[3, 1]));

slopes = [[1, 1], [3, 1], [5, 1], [7, 1], [1, 2]];

console.log( slopes.map(s => findTrees(parsed_input, s)).reduce((acc, cur) => acc*cur, 1));