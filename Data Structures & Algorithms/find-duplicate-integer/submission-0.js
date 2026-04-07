class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        let freq = []

        for (let i=0; i<nums.length; ++i){
            if (freq[nums[i]] == null){
                freq[nums[i]] = 1
            } else {
                return nums[i]
            }
        }
    }
}
