class Solution {
    /**
     * @param {number[][]} matrix
     * @return {void}
     */
    rotate(matrix) {
        let l = 0
        let r = matrix.length - 1

        while (l<r){
            let top = l
            let bot = r
            for (let i=0; i < r-l; ++i){
                // save topLeft variable
                let topLeft = matrix[top + i][l]

                // move bottom left into topLeft 
                matrix[top + i][l] = matrix[bot][l + i]

                // move bottom right into bottom left
                matrix[bot][l + i] = matrix[bot - i][r]

                // move top right into bottom right
                matrix[bot - i][r] = matrix[top][r - i]

                // move top left into top right
                matrix[top][r - i] = topLeft

                console.log(matrix)
            }
            l += 1
            r -= 1
        }
    }
}
