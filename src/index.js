module.exports = function check(str, bracketsConfig) {
let strToArr = str.split('');
let brackets = {};
let i = 0;
while( i < bracketsConfig.length){
  brackets[bracketsConfig[i][0]] = bracketsConfig[i][1]
  i++;
}
let index = -1;
while (strToArr.length > 1){
 index = strToArr.indexOf(`${brackets[`${strToArr[0]}`]}`, 1)
 if (index > 0){
  strToArr.splice(index, 1);
  strToArr.shift();
 } 
 else {
  return false;
 }
}
if (strToArr.length === 1){
  console.log("false2");
  return false;
} else if (strToArr.length === 0){
  console.log("true1");
  return true;
}
}
