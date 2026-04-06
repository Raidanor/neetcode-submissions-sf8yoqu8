class Solution {
    /**
     * @param {number[]} digits
     * @return {number[]}
     */
    plusOne(digits) {
        return (parseInt(digits.join("")) + 1).toString().split("")
    }
}
