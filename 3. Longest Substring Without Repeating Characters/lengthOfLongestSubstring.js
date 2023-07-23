/**
 * @param {string} s
 * @return {number}
 */

// This solution works, but it is not the optimum solution. Refer to python version for a better solution


function inserToIndex(array, value) {
    let high = array.length;
    let low = 0;
    while (low < high) {
        let mid = (low + high) >>> 1;
        if (array[mid] < value) {
            low = mid + 1;
        } else {
            high = mid
        }
    };
    array.splice(low, 0, value);
    return array;
}
var lengthOfLongestSubstring = function (s) {
    let len = s.length;
    let array = [];
    let unique = '';
    for (let i = 0; i < len; i++) {
        if (!unique.includes(s.charAt(i))) {
            unique = unique + s.charAt(i);
            if (len - i === 1) {
                let arrLen = unique.length;
                unique = '';
                array.length < 0 ? array.push(arrLen) : inserToIndex(array, arrLen);
            }
        } else {
            let arrLen = unique.length;
            unique = unique + s.charAt(i);
            unique = unique.slice(unique.indexOf(s.charAt(i)) + 1);
            array.length < 0 ? array.push(arrLen) : inserToIndex(array, arrLen);
        }
    }

    return array[array.length - 1] || 0;
};

