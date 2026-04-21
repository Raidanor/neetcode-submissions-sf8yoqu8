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
        let l = dummy
        let r = head

        for (let i=0; i<n; ++i){
            r = r.next
        }

        while (r !=null){
            l = l.next
            r = r.next
        }

        l.next = l.next.next

        return dummy.next
    }
}
