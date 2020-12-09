const inputs = require('./inputs');

const parsed_input = inputs.getDay5Input();

let getLowerHalf = function(limits){
  const min = limits[0], max = limits[1];

  return [min, Math.floor((min+max)/2)];
}

let getUpperHalf = function(limits){
  const min = limits[0], max = limits[1];

  return [Math.ceil((min+max)/2), max];
}

let parseNextChar = function(char, limits){
  if(char=='F' || char=='L') return getLowerHalf(limits);
  else return getUpperHalf(limits);
}

let parsePassCodeToNum = function(code){
  let limits = [0, Math.pow(2,code.length)-1];

  while(code.length >0){
    limits = parseNextChar(code[0], limits);
    code = code.substr(1);
  }

  return limits[0];
}

let getSeatId = function(seatCodes){
  return parsePassCodeToNum(seatCodes[0]) * 8 + parsePassCodeToNum(seatCodes[1]);
}

let getMissingId = function(seatIds){
  let sortedSeatIds = seatIds.sort((a,b) => a-b);

  for (let i = 1; i < sortedSeatIds.length; i++) {
    const cur = sortedSeatIds[i];
    const prev = sortedSeatIds[i-1];
    
    if(cur-prev == 2) return cur-1;
  }
  
  return -1;
}

let seatIds = parsed_input.map(seatCodes => getSeatId(seatCodes));
const maxSeatId = seatIds.reduce((acc,id) => acc>id? acc:id,0);

console.log("Max Id:", maxSeatId);
console.log("Missing Id:", getMissingId(seatIds));

