/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        let dummy = new ListNode()
        dummy.next = head
        let cur = head
        let length = 0
        let curCount = 0

        while (cur != null){
            cur = cur.next
            length++
        }
        if (n == length)
            return head.next
        cur = head

        while (cur!= null && cur.next != null){

            if (curCount == length - n -1){
                cur.next = cur.next.next
            }
            cur = cur.next
            curCount++
        }

        return dummy.next
    }
}
