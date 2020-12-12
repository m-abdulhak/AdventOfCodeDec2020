const inputs = require('./inputs');

const parsed_input = inputs.getDay12Input();

const directions = ['W', 'N', 'E', 'S'];
const navInstructions = {'N': [0, 1], 'S': [0, -1], 'E': [1, 0], 'W': [-1, 0]};

let turn = function(curDir, command, val){
    const curDirIndx = directions.indexOf(curDir);
    let dirChange = val / 90;

    if(command == 'L') dirChange = dirChange * -1;

    if(dirChange < 0) dirChange += 4;

    const newDir = curDirIndx >= 0 && curDirIndx < 4 ? directions[(curDirIndx+dirChange)%4] : curDir;

    return newDir;
}

let move = function (shipPos, shipDir, command, val) {
    if(command == 'R' || command == 'L'){
        shipDir = turn(shipDir, command, val);
    } else {
        const moveDir = command == 'F' ? shipDir : command;
        shipPos = [shipPos[0] + navInstructions[moveDir][0] * val, shipPos[1] + navInstructions[moveDir][1] * val];
    }

    return [shipPos, shipDir];
}

let navigate = function (shipPos, shipDir, instructions) {
    for (let i = 0; i < instructions.length; i++) {
        const command = instructions[i][0], val = instructions[i][1];
        
        const newPosDir = move(shipPos, shipDir, command, val);

        shipPos = newPosDir[0];
        shipDir = newPosDir[1];
    }

    return [shipPos,shipDir];
}

let getManhattanDistance = function(pos){
    return Math.abs(pos[0]) + Math.abs(pos[1]);
}

let curPos = [0, 0];
let curDir = 'E';

[curPos, curDir] = navigate(curPos, curDir, parsed_input);
console.log(getManhattanDistance(curPos));

// ========== Part 2 ========== //

let moveWaypoint = function (waypoint, command, val) {
    if(command == 'R' || command == 'L'){
        wayPoint[0] =  turn(wayPoint[0], command, val);
        wayPoint[2] =  turn(wayPoint[2], command, val);
    } else {
        let changeIndx = null;

        if(command == 'N' || command == 'S'){
            changeIndx = waypoint[0] == 'N' || waypoint[0] == 'S' ? 1 : 3;
        } else {
            changeIndx = waypoint[0] == 'E' || waypoint[0] == 'W' ? 1 : 3;
        }
        
        if(command == wayPoint[changeIndx-1]){
            wayPoint[changeIndx] = wayPoint[changeIndx] + val;
        } else{
            wayPoint[changeIndx] = wayPoint[changeIndx] - val;
            if(wayPoint[changeIndx] < 0){
                wayPoint[changeIndx] *= -1;
                wayPoint[changeIndx-1] = turn(wayPoint[changeIndx-1], 'R', 180);
            }
        }
    }

    return wayPoint;
}

let moveTowardsWaypoint = function (shipPos, waypoint, repeats) {
    let deltaH = 0, deltaV = 0;
    let waypointH = 0, waypointV = 2;

    if(wayPoint[0] == 'N' || wayPoint[0] == 'S'){
        waypointH = 2;
        waypointV = 0;
    }

    deltaH = waypoint[waypointH+1] * repeats;
    deltaV = waypoint[waypointV+1] * repeats;

    shipPos[0] += waypoint[waypointH] == 'E' ? deltaH : -deltaH;
    shipPos[1] += waypoint[waypointV] == 'N' ? deltaV : -deltaV;

    return shipPos;
}

let navigateWaypoint = function (shipPos, waypoint, instructions) {
    for (let i = 0; i < instructions.length; i++) {
        const command = instructions[i][0], val = instructions[i][1];
        
        if(command == 'F'){
            shipPos = moveTowardsWaypoint(shipPos, waypoint, val);
        } else {
            wayPoint = moveWaypoint(waypoint, command, val);
        }
    }

    return [shipPos, waypoint];
}

curPos = [0, 0];
let wayPoint = ['E', 10, 'N', 1];

[curPos, wayPoint] = navigateWaypoint(curPos, wayPoint, parsed_input);
console.log(getManhattanDistance(curPos));
