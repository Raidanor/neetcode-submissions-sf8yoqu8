class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let output = []
        let containsZero = nums.includes(0)

        for (let i=0; i<nums.length; ++i){
            let product = 1
            
            for (let j=0; j<nums.length; ++j){
                if (j!=i)
                    product *= nums[j]
            }
            output[i] = product
            
            

        }

        return output
    }
}
