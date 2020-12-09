const inputs = require('./inputs');

const parsed_input = inputs.getDay4Input();

const allowedFields = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid', 'cid'];
const requiredFields = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'];
const allowedEclVals = ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth']; 

let passwordValid = function (passFields) {
  const presentFields = passFields.map(f => f[0]);
  
  for (const reqField of requiredFields) {
    if(presentFields.indexOf(reqField)<0){
      return false;
    }    
  }

  return true;
}

const validPassportsCount = parsed_input.map(pass => passwordValid(pass)? 1:0).reduce((acc, cur) => acc+cur,0);

console.log(validPassportsCount);

// ================ Part2 ================= //

let strFieldValid = function (val, len, allowedChars) {
  if(val.length != len) return false;
  
  for (let i = 0; i < val.length; i++) {
    const c = val[i];
    if(allowedChars.indexOf(c)<0) return false;    
  }
  
  return true;
}

let numFieldValid = function(val, digits, min, max){
  if(val.length != digits || !strFieldValid(val, digits, '0123456789')) return false;

  let valInt = parseInt(val);
  
  if(valInt < min || valInt > max) return false;

  return true;
}

let byrValid = val => {
  return numFieldValid(val, 4, 1920, 2002);
}

let iyrValid = val => {
  return numFieldValid(val, 4, 2010, 2020);
}

let eyrValid = val => {
  return numFieldValid(val, 4, 2020, 2030);
}

let hgtValid = val => {
  const last2Chars = val.substr(val.length-2);
  if(last2Chars == 'cm'){
    return numFieldValid(val.substr(0,val.length-2), 3, 150, 193);
  } else if (last2Chars == 'in'){
    return numFieldValid(val.substr(0,val.length-2), 2, 59, 76);
  }
  return false;
}

let hclValid = val => {
  if(val[0] != '#' || val.length != 7) return false;
  
  return strFieldValid(val.substr(1), 6, '0123456789abcdef');
}

let eclValid = val => {
  return allowedEclVals.indexOf(val) >= 0;
}

let pidValid = val => {
  return strFieldValid(val, 9, '0123456789');
}

let cidValid = val => {
  return true;
}

let validityFuns = {
  'byr':byrValid, 
  'iyr':iyrValid, 
  'eyr':eyrValid, 
  'hgt':hgtValid, 
  'hcl':hclValid, 
  'ecl':eclValid, 
  'pid':pidValid,
  'cid':cidValid,
};

let fieldValid = function(field){
  const key = field[0];
  const val = field[1];

  if(allowedFields.indexOf(key) < 0) return false;

  return validityFuns[key](val);
}

let passwordValid2 = function (passFields) {
  if(!passwordValid(passFields)) return false;
  
  for (let i = 0; i < passFields.length; i++) {
    if(!fieldValid(passFields[i])) return false;       
  }

  return true;
}

const validPassportsCount2 = parsed_input.map(pass => passwordValid2(pass)? 1:0).reduce((acc, cur) => acc+cur,0);

console.log(validPassportsCount2);