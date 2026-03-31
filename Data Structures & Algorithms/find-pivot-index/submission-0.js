class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    pivotIndex(nums) {
        let result = -1
        let leftSum = 0
        let rightSum = 0

        nums.forEach(num => rightSum += num);
        rightSum = rightSum - nums[0]
        console.log(rightSum)
        if (rightSum == 0)
            return 0
        for (let i=1;i<nums.length; ++i){
            leftSum += nums[i-1]
            rightSum -= nums[i]
            console.log(leftSum)
            console.log(rightSum)
            if (leftSum == rightSum){
                return(i)
            }
        }
        return result
    }
}
