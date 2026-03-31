class Solution {
    /**
     * @param {number[]} num
     * @param {number} target
     * @return {number}
     */
    search(num, target) {
        if (num.length == 1)
            return num[0] == target ? 0 : -1
        let l = 0
        let r = num.length - 1
        let pivotIndex = 0

        while (l <= r){
            let m = Math.floor((r+l) / 2)

            if (num[m] > num[r]){
                l = m + 1
            } else if (num[m] < num[r]){
                r = m
            } else {
                pivotIndex = m
                break
            }
        }

        l = 0
        r = num.length - 1
        if (target > num[r])
            r = pivotIndex - 1
        else 
            l = pivotIndex

        while (l<=r){
            let m = Math.floor((r+l) / 2)
            if (num[m] == target){
                return m
            } else if (target > num[m]){
                l = m + 1
            } else {
                r = m - 1
            }
        }
        return -1
    }
}
