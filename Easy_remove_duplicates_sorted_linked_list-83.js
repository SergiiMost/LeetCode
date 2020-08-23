//Given a sorted linked list, delete all duplicates such that each element appear only once.

//Input: 1->1->2
//Output: 1->2

//Input: 1->1->2->3->3
//Output: 1->2->3

//********************************** Notes for myself ***************//
// 1) Here is an input that you should keep in mind: 1-> 1-> 1 .
// 2) Head can be null
// This is not a clean solution !!!! Need to work on it further.
//*******************************************************************//


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
*/

var deleteDuplicates = function (head) {
  if (head === null) return head
  let currentNode = head
  while (currentNode.next !== null) {
    if (currentNode.val === currentNode.next.val) {
      let nodeToBeConnected = currentNode.next.next
      currentNode.next = nodeToBeConnected
    }
    if (currentNode.next === null) return head
    else if (currentNode.val !== currentNode.next.val) {
      currentNode = currentNode.next
    }
  }
  return head
};