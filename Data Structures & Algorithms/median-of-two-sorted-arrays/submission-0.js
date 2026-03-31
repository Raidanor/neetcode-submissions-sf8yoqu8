class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        let medianIndex1 = nums1.length / 2
        let medianIndex2 = nums2.length / 2

        nums2.forEach(n => {
            nums1.push(n)
        })
        
        nums1.sort((a,b) => a-b)
        console.log(nums1)
        // console.log(nums1.length)

        let middle = Math.floor(nums1.length / 2)
        console.log(middle)
        if (nums1.length % 2 == 0){
            console.log((nums1[middle] + nums1[middle-1]) / 2)
            return (nums1[middle] + nums1[middle-1]) / 2
        } else {
            console.log(nums1[middle])
            return nums1[middle]
        }

        
        
    }
}
