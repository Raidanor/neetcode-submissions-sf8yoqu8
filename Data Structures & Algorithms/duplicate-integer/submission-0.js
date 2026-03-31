class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let temp = nums.sort()

        for (let i=0; i<temp.length; ++i) {
            if (temp[i] == temp [i+1])
                return true
        }
        return false
    }
}
