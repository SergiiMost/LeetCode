//Given a string s consists of upper/lower-case alphabets and empty space characters ' ', return the length of last word (last word means the last appearing word if we loop
//from left to right) in the string.
//If the last word does not exist, return 0.

//Note: A word is defined as a maximal substring consisting of non-space characters only.

//Input: "Hello World"
//Output: 5

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  s = s.trim()
  if (s === "") return 0
  let wordArr = s.split(' ')
  return wordArr[wordArr.length - 1].length
};