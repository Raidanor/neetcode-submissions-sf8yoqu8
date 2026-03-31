class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let maxLength = 0
        let res = new Set()
        let l = 0

        for (let r=0; r<s.length; r++){
            while (res.has(s[r])){
                res.delete(s[l])
                l += 1
            }
            res.add(s[r])
            if (res.size > maxLength)
                maxLength = res.size
            console.log(res.size)
        }
        
        return maxLength
    }
}
