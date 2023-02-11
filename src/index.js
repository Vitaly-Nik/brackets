module.exports = function check(str, bracketsConfig) {

let arr = str.split('');
let stack = [];
let brackets = {};
for (let i = 0; i < bracketsConfig.length; i++){
  brackets[`${bracketsConfig[i][0]}`] = `${bracketsConfig[i][1]}`
}

arr.forEach(e => {
  if (e != brackets[stack[stack.length - 1]]){
    stack.push(e)
  } else {
    stack.pop()
  }
})

if (stack.length === 0){
  return true;
} else {
  return false
}
}
