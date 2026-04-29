class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        let nums2 = nums
        let len = nums.length
        
        for (let i=0; i<len; ++i){
            nums2[i+len] = nums[i]
        }
        console.log(nums2)
        return nums2
    }
}
