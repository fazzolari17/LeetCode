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
const deleteDuplicates = function(head) {
  let initialNode = new ListNode(-Infinity, head);
  let current = head;
  let previous = initialNode;

  while(current) {
    if(current.val === previous.val) {
      while(current && current.val === previous.val) {
        current = current.next;
      }

      previous.next = current;
    } else {
      previous = current;
      current = current.next
    }
  }
  
  return initialNode.next;
};