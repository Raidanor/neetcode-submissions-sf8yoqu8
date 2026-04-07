class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        let freq = new Set()

        for (let i=0; i<nums.length; ++i){
            if (!freq.has(nums[i])){
                freq.add(nums[i])
            } else {
                return nums[i]
            }
        }
    }
}
