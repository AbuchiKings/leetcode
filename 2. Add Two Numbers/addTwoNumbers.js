/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode(val) {
    this.val = val;
    this.next = null;
  }
  var addTwoNumbers = function (l1, l2) {
      const head = new ListNode(0); /* This is necessary to serve as the head or first reference for list to to tranverse the linked list*/
      let current = head; // this holds the reference to current node on result list
      let remainder = 0; // This is the remainder from each addition to carry over
  
      while (l1 || l2 || remainder) {
          let v1 = l1 && l1.val ? l1.val : 0 // Initiated to zero because zero is falsy and 
          let v2 = l2 && l2.val ? l2.val : 0 // according to question, the list is never empty
  
          let val = v1 + v2 + remainder;
          remainder = Math.floor(val / 10); //Each node must contain a single digit
          val = val % 10;
          current.next = new ListNode(val) //
          
          current = current.next;
          l1 = l1 && l1.next ? l1.next : null;
          l2 = l2 && l2.next ? l2.next : null;
      }
  
      return head.next;
  };