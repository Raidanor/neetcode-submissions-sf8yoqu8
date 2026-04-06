class Solution {
    /**
     * @param {number[]} digits
     * @return {number[]}
     */
    plusOne(digits) {
        let number = (parseInt(digits.join("")) + 1).toString().split("")

        return number
    }
}
