const inputs = require('./inputs');

const parsed_input = inputs.getDay9Input();

let isNumberValid = function(nums, indx, preambleLength){
  if(indx < preambleLength) return true;

  let validNums = [];
  const curPreStart = indx-preambleLength;
  const curPreEnd = indx-1;
  for (let i = curPreStart; i <= curPreEnd; i++) {
    for (let j = i+1; j <= curPreEnd; j++) {
      validNums.push(nums[i]+nums[j]);      
    } 
  }

  if(validNums.indexOf(nums[indx]) >=0) return true;
  else return false;
}

let getFirstInvalidNum = function (nums, preambleLength) {
  for (let i = 0; i < nums.length; i++) {
    if(!isNumberValid(nums, i, preambleLength)) return nums[i];
  }
}

let findContiguousNumsAddingTo = function(nums, target){
  for (let i = 0; i < nums.length; i++) {
    let curSum = null;
    let curSet = [];
    
    let j = i;
    while(j<nums.length && (curSum == null || curSum < target)){
      curSum = curSum == null ? nums[j] : curSum + nums[j];
      curSet.push(nums[j]);

      if(curSum == target) return curSet;

      j++;
    }
  }
} 

const firstInvalid = getFirstInvalidNum(parsed_input, 25)
console.log("First Invalid Number:", firstInvalid);

const setSumsToFirstInvalid = findContiguousNumsAddingTo(parsed_input, firstInvalid);
console.log("First Set Adding To Invalid Number:", setSumsToFirstInvalid);

const min = Math.min(...setSumsToFirstInvalid);
const max = Math.max(...setSumsToFirstInvalid);
console.log("Min and Max of Set:", min, max);

const weakness = min + max;
console.log("Encryption Weakness (Min+Max):", weakness);

