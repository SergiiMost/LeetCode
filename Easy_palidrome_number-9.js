//Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.
//Input: 121
//Output: true

//Input: -121
//Output: false
//Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

const isPalindrome = function (x) {
  if (x < 0) return false
  const reversedArray = x.toString().split("").reverse()
  let reversedString = ""
  for (let i of reversedArray) reversedString += i
  if (Number(reversedString) === x) return true
  else return false
}
