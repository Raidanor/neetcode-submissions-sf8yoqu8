class Solution {
    /**
     * @param {number[]} num
     * @param {number} target
     * @return {number[]}
     */
    twoSum(num, target) {
        let l = 0
        let r = num.length- 1
        let sum = 0

        while (l<r){
            sum = num[l] + num[r]
            if (sum < target){
                l += 1
            }
            if (sum > target){
                r -= 1
            } else if (sum == target){
                return [l+1, r + 1]
            }
        }
    }
}
