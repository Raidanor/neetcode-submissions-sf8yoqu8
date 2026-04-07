class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        let freq = new Set()

        for (let i=0; i<nums.length; ++i){
            if (freq.has(nums[i])){
                return nums[i]
            } else {
                freq.add(nums[i])
            }
        }
    }
}
