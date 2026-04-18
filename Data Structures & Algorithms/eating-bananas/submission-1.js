class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let l = 1
        let r = Math.max(...piles)
        let k = r

        while(l <= r){
            let mid = Math.floor((r+l)/2)
            
            let time = 0
            piles.forEach(p => {
                time += Math.ceil(p/mid)
            })
            console.log(time)
            if (time <= h){
                k = mid
                r = mid - 1
            }
            else if (time > h){
                l = mid + 1
            }
        }
        return k
    }
}
