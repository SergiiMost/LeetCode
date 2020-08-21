//Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

//You may assume no duplicates in the array.

//Input: [1,3,5,6], 5
//Output: 2

//Input: [1,3,5,6], 2
//Output: 1

//Input: [1,3,5,6], 7
//Output: 4

//Input: [1,3,5,6], 0
//Output: 0

const searchInsert = function (nums, target) {
  if (nums.indexOf(target) > -1) return nums.indexOf(target)
  let start = 0
  let end = nums.length - 1
  let middle = Math.floor(nums.length / 2)
  while (start <= end) {
    if (target < nums[middle]) {
      end = middle - 1
      middle = Math.floor((start + end) / 2)
    }
    else if (target > nums[middle]) {
      start = middle + 1
      middle = Math.floor((start + end) / 2)
    }
  }
  if (end > searchInsert) return end - 1
  else return end + 1

};
