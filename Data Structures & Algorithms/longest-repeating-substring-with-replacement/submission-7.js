class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let count = []
        let l = 0
        let max = 0
        let result = 0

        for (let r=0; r<s.length; ++r){
            if (count[s[r]] == null)
                count[s[r]] = 1
            else
                count[s[r]] += 1

            max = Math.max(max, count[s[r]])

            if ((r-l+1) - max <= k){
                result = r - l + 1
            } else {
                count[s[l]] -= 1
                l += 1
            }
        }
        return result
    }
}
