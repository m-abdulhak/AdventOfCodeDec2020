const inputs = require('./inputs');

const parsed_input = inputs.getDay8Input();

const cmds_original = parsed_input['cmds'];
const params = parsed_input['params'];

let tryWithLineXFlipped = function(x){
  let cmds = [...cmds_original];
  acc = 0;
  let visited = [];
  
  if(cmds[x] == "jmp"){
    cmds[x] = "nop";
  } else if(cmds[x] == "nop") {
    cmds[x] = "jmp";
  }
  
  let i = 0;  
  while(i!=cmds.length){
    if(visited[i] == 1){
      break;
    }
    
    visited[i] = 1;
    
    if(cmds[i]=="acc"){
      acc += params[i];
    }
    else if(cmds[i]=="jmp"){
      i += params[i];
      continue;
    }
    i++;

    if(i>=cmds.length-1){
      console.log("Fixed!!! i:", i, acc);
      return true;
    }
  }
  return false;
}

let acc = 0;

for(let x=0; x<cmds_original.length; x++){
  if(tryWithLineXFlipped(x)) break;
}

console.log("Result:", acc);
