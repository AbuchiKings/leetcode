/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
    if (numRows === 1) return s;
    let ans = '';
    for (let r = 0; r < numRows; r++) {
        let increment = (numRows - 1) * 2
        for (let i = r; i < s.length; i += increment) {
            ans += s[i];
            if (r > 0 && r < numRows - 1 && (i + increment - (2 * r)) < s.length) {
                ans += s[i + increment - (2 * r)];
            }
        }

    }
    return ans;
};
