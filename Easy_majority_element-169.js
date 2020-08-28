//Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.
//You may assume that the array is non-empty and the majority element always exist in the array.

//Input: [3,2,3]
//Output: 3

//Input: [2,2,1,1,1,2,2]
//Output: 2

/**
 * @param {number[]} nums
 * @return {number}
 */

var majorityElement = function (nums) {
  let obj = {}
  for (let val of nums) {
    obj[val] = obj[val] + 1 || 1
  }

  let maxValue = Number.NEGATIVE_INFINITY
  let key = null

  for (let property in obj) {
    if (obj[property] > maxValue) {
      maxValue = obj[property]
      key = Number(property)
    }
  }
  return key
};