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
     * @return {boolean}
     */
    hasCycle(head) {
        let cur = head
        let visited = new Set()
        
        while (cur) {
            if (visited.has(cur))
                return true
            else
                visited.add(cur)
            cur = cur.next
        }


        return false
    }
}
