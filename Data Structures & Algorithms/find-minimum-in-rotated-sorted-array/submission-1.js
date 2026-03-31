class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let l = 0
        let r = nums.length - 1
        let res =-1
        console.log(nums)
        while (l <= r){
            let m = Math.floor((l+r)/2)
            res = m
            console.log(l,r)
            console.log(m)
            if (nums[m] > nums[r]){
                l = m + 1
            } else if (nums[m] < nums[r]){
                r = m
            } else {
                res = m
                break
            }
        }
        return nums[res]
    }
}
