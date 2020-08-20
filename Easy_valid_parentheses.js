//Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
//An input string is valid if:
//Open brackets must be closed by the same type of brackets.
//Open brackets must be closed in the correct order.
//Note that an empty string is also considered valid.

//Input: "()"
//Output: true

//Input: "()[]{}"
//Output: true

//Input: "([)]"
//Output: false

var isValid = function (str) {
  if (str.length % 2 !== 0) return false
  if (str === '') return true
  let stack = []
  for (let i of str) {
    if (i === '{' || i === '(' || i === '[') stack.push(i)
    else if (i === '}' && stack[stack.length - 1] === '{') stack.pop()
    else if (i === ']' && stack[stack.length - 1] === '[') stack.pop()
    else if (i === ')' && stack[stack.length - 1] === '(') stack.pop()
    else return false
  }
  return stack.length === 0
};

