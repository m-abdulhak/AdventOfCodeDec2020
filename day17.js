const inputs = require('./inputs');

const parsed_input = inputs.getDay17Input(1);
const parsed_input2 = inputs.getDay17Input(2);

let getState = function(coord, conf){
    let z = coord[2], y = coord[1], x = coord[0];

    return conf[z] && conf[z][y] && conf[z][y][x]? conf[z][y][x] : '.';
}

let active = function(coord, conf){
    return getState(coord, conf) == '#';
}

let getNeighbors = function(x, y, z){
    let n = [];

    for(let i = x-1; i<=x+1; i++){
        for(let j = y-1; j<=y+1; j++){
            for(let k = z-1; k<=z+1; k++){
                if(i==x && j==y && k==z) continue;
                n.push([i, j, k]);
            }
        }
    }
    
    return n;
}

let simCycle = function(conf){
    let zStart = -1*conf['z'], zEnd = conf['z']+1;
    let yStart = -1*conf['y'], yEnd = conf['y']+1;
    let xStart = -1*conf['x'], xEnd = conf['x']+1;

    let newConf = {};

    for(let z = zStart; z<zEnd; z++){
        if(!conf[z]) conf[z] = {};
        newConf[z] = {};

        for(let y = yStart; y<yEnd; y++){
            if(!conf[z][y]) conf[z][y] = {};
            newConf[z][y] = {};

            for(let x = xStart; x<xEnd; x++){
                let state = conf[z][y][x] ? conf[z][y][x] : '.';

                let neighbors = getNeighbors(x,y,z);

                let activeNeighborsCount = neighbors.reduce((acc, cur) => {
                    return active(cur, conf)? acc + 1 : acc
                }, 0);

                if(state == '#'){
                    if(activeNeighborsCount == 2 || activeNeighborsCount == 3) newConf[z][y][x] = '#';
                } else {
                    if(activeNeighborsCount == 3) newConf[z][y][x] = '#';
                }
            }
        }
    }

    newConf['z'] = conf['z']+1;
    newConf['y'] = conf['y']+1;
    newConf['x'] = conf['x']+1;

    return newConf;
}

let sumActive = function(config){
    let sum = 0;

    Object.keys(config).forEach(z => {
        Object.keys(config[z]).forEach(y => {
            Object.keys(config[z][y]).forEach(x => {
                if(config[z][y][x] == '#') sum++;
            })
        })
    })

    return sum;
}

let conf = parsed_input;

for(let i = 0; i<6; i++){
    conf = simCycle(conf);
}

console.log(sumActive(conf));

// ======== Part 2 ======== //


let getState4 = function(coord, conf){
    let w = coord[3], z = coord[2], y = coord[1], x = coord[0];

    return conf[w] && conf[w][z] && conf[w][z][y] && conf[w][z][y][x]? conf[w][z][y][x] : '.';
}

let active4 = function(coord, conf){
    return getState4(coord, conf) == '#';
}

let getNeighbors4 = function(x, y, z, w){
    let n = [];

    for(let i = x-1; i<=x+1; i++){
        for(let j = y-1; j<=y+1; j++){
            for(let k = z-1; k<=z+1; k++){
                for(let p = w-1; p<=w+1; p++){
                    if(i==x && j==y && k==z && p==w) continue;
                    n.push([i, j, k, p]);
                }
            }
        }
    }
    
    return n;
}

let simCycle4 = function(conf){
    let wStart = -1*conf['w'], wEnd = conf['w']+1;
    let zStart = -1*conf['z'], zEnd = conf['z']+1;
    let yStart = -1*conf['y'], yEnd = conf['y']+1;
    let xStart = -1*conf['x'], xEnd = conf['x']+1;

    let newConf = {};

    for(let w = wStart; w<wEnd; w++){
        if(!conf[w]) conf[w] = {};
        newConf[w] = {};

        for(let z = zStart; z<zEnd; z++){
            if(!conf[w][z]) conf[w][z] = {};
            newConf[w][z] = {};

            for(let y = yStart; y<yEnd; y++){
                if(!conf[w][z][y]) conf[w][z][y] = {};
                newConf[w][z][y] = {};

                for(let x = xStart; x<xEnd; x++){
                    let state = conf[w][z][y][x] ? conf[w][z][y][x] : '.';

                    let neighbors = getNeighbors4(x,y,z,w);

                    let activeNeighborsCount = neighbors.reduce((acc, cur) => {
                        return active4(cur, conf)? acc + 1 : acc
                    }, 0);

                    if(state == '#'){
                        if(activeNeighborsCount == 2 || activeNeighborsCount == 3) newConf[w][z][y][x] = '#';
                    } else {
                        if(activeNeighborsCount == 3) newConf[w][z][y][x] = '#';
                    }

                }
            }
        }
    }

    newConf['w'] = conf['w']+1;
    newConf['z'] = conf['z']+1;
    newConf['y'] = conf['y']+1;
    newConf['x'] = conf['x']+1;

    return newConf;
}

let sumActive4 = function(config){
    let sum = 0;

    Object.keys(config).forEach(w => {
        Object.keys(config[w]).forEach(z => {
            Object.keys(config[w][z]).forEach(y => {
                Object.keys(config[w][z][y]).forEach(x => {
                    if(config[w][z][y][x] == '#') sum++;
                })
            })
        })
    });

    return sum;
}

conf = parsed_input2;

for(let i = 0; i<6; i++){
    conf = simCycle4(conf);
}

console.log(sumActive4(conf));
