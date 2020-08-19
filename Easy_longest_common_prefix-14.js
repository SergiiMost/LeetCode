//Write a function to find the longest common prefix string amongst an array of strings.
//If there is no common prefix, return an empty string "".

//Example 1:
//Input: ["flower","flow","flight"]
//Output: "fl"

//Example 2:
//Input: ["dog","racecar","car"]
//Output: ""
//Explanation: There is no common prefix among the input strings.

const longestCommonPrefix = function (strs) {
  let prefix = ''
  if (!strs[0]) return prefix
  done: for (let i = 0; i < strs[0].length; i++) {
    for (let j = 1; j < strs.length; j++) {
      if (strs[0][i] !== strs[j][i]) break done
    }
    prefix += strs[0][i]
  }
  return prefix
};

