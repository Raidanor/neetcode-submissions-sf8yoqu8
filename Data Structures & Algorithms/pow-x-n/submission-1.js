class Solution {
    /**
     * @param {number} x
     * @param {number} n
     * @return {number}
     */
    myPow(x, n) {
        if (n==0)
            return 1
        if (n>1)
            return (x * this.myPow(x, n-1))
        if (n==1){
            return x
        }
        if (n<0){
            return 1/(x * this.myPow(x, (-n)-1))

        }
    }
}
