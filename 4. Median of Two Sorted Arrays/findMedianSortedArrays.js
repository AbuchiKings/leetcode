/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    let len1 = nums1.length;
    let len2 = nums2.length;
    let jointLen = len1 + len2;
    let halfLen = Math.floor(jointLen / 2);
    //Binary search on shorter array
    if (len1 > len2) {
        [nums1, nums2] = [nums2, nums1]
    }

    let left = 0;
    let right = nums1.length - 1;
    while (true) {
        let mid1 = Math.floor((left + right) / 2);
        let mid2 = halfLen - mid1 - 2;

        let nums1Left = mid1 >= 0 ? nums1[mid1] : -Infinity;
        let nums1Right = mid1 + 1 < nums1.length ? nums1[mid1 + 1] : Infinity;
        let nums2Left = mid2 >= 0 ? nums2[mid2] : -Infinity;
        let nums2Right = mid2 + 1 < nums2.length ? nums2[mid2 + 1] : Infinity;

        if ((nums1Left <= nums2Right) && (nums2Left <= nums1Right)) {
            if (jointLen % 2) {
                return Math.min(nums1Right, nums2Right)
            } else {
                return (Math.max(nums1Left, nums2Left) + Math.min(nums1Right, nums2Right)) / 2
            }
        } else if (nums1Left > nums2Right) {
            right = mid1 - 1
        } else {
            left = mid1 + 1
        }
    }

};