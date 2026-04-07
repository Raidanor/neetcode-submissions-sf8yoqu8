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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwo(l1, l2, carry) {
        if (!l1 && !l2 && carry == 0)
            return null

        let v1 = l1 ? l1.val : 0
        let v2 = l2 ? l2.val : 0

        let sum = v1 + v2 + carry

        if (sum > 9){
            sum = sum % 10
            carry = 1
        } else
            carry = 0
        

        let nextNode = this.addTwo(
            l1 ? l1.next : null,
            l2 ? l2.next : null,
            carry
        )
        

        return new ListNode(sum, nextNode)
    }
    addTwoNumbers(l1, l2) {
        return this.addTwo(l1, l2, 0);
    }
}
