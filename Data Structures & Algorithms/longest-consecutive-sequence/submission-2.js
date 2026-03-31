class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        nums = nums.sort((a, b) => a - b)
        if (nums.length == 0)
            return 0

        let counter = 1
        let currentSeq = 1
        for (let i=0; i<nums.length; ++i){
            if (nums[i] == nums[i+1]){
                continue
            }
            else if (nums[i+1] - nums[i] == 1)
            {
                currentSeq += 1
                counter = Math.max(currentSeq, counter)
            } else {
                currentSeq = 1
            }
            
        }

        return counter
    }
}
