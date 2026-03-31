class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let left = 0
        let right = nums.length
        
        while (left < right){
            let middle = Math.floor((left + right) / 2)
            if (target <= nums[middle]) {
                right = middle
            } else if (target > nums[middle]) {
                left = middle + 1
            }
            
        }
        if (nums[left] == target)
            return left
        else
            return -1
    }
}
