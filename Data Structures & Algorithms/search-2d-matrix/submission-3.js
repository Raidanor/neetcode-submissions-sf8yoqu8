class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let height = matrix.length
        // console.log(height)
        let rowIndex = -1
        for (let i=0; i<height; i++){

            if (target >= matrix[i][0])
                rowIndex = i
        }
        if (rowIndex==-1)
            return false
        let row = matrix[rowIndex]
        // console.log(rowIndex)
        return row.includes(target)
    }
}
