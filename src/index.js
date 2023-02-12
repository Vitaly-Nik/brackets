module.exports = function check(str, bracketsConfig) {

let arr = str.split('');
let stack = [];
let brackets = {};

bracketsConfig.forEach(e => {
  brackets[e[0]] = e[1]
})

arr.forEach(e => {
  e === brackets[stack[stack.length - 1]] ? stack.pop() : stack.push(e)
})

return stack.length === 0 ? true : false 
}
