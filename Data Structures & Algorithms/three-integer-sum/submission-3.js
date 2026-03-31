class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums = nums.sort((a, b) => a - b)
        let output = []
        for (let i=0; i<nums.length;++i){
            if (nums[i] > 0)
                break

            if ( i>0 && nums[i] === nums[i-1])
                continue
            
            let l = i+1
            let r = nums.length - 1
            while (l < r){
                let threeSum = nums[i] + nums[l] + nums[r]
                if (threeSum > 0)
                    r--
                if (threeSum < 0)
                    l++
                if (threeSum == 0){
                    output.push([nums[i], nums[l], nums[r]])
                    r--
                    l++
                    while (nums[l] === nums[l-1] && l<r)
                        l++
                }

            }
        }
        return output
    }
}
