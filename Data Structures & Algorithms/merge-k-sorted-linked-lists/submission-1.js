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
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
        if (lists.length < 1)
            return null

        let res = new ListNode()

        
        for (let i=1; i<lists.length; ++i){
            let list1 = lists[i-1]
            let list2 = lists[i]
            let dummy = new ListNode()
            let list3 = dummy

            while (list1 && list2){
                if (list1.val <list2.val){
                    list3.next = list1
                    list1 = list1.next
                } else {
                    list3.next = list2
                    list2 = list2.next
                }
                list3 = list3.next
            }

            if (list1){
                list3.next = list1
            }
            if (list2){
                list3.next = list2
            }
            lists[i] = dummy.next
            res = dummy.next

        }

        return res

        

    }
}
