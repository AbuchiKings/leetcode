/**
 * @param {string} s
 * @return {string}
 */

// Bruteforce solution. Do not use. Use the python version.

var longestPalindrome = function (s) {
    let len = s.length;
    let l = 0; //left pointer
    let r = 0; //right pointer
    let f = ''; //holds string in forward order
    let b = ''; // holds string in backward order
    let p = {}; // holds all palidromes with their length as key
    let longest = 0; //holds longest palindrome

    while (l <= r && r < len) {

        if (l === 0 && r === 0) {
            longest = 1;
            b = f = s[r];
            p[longest] = f;
        } else {
            f = f + s[r];
            b = s[r] + b;
            if (f === b && (f.length > 0 && !p[f.length])) {
                p[f.length] = f;
                longest = Math.max(longest, f.length);
            }
            if (len - r === 1) {
                l = l + 1;
                r = l;
                f = s[l]
                b = s[l]
                if (f === b && (f.length > 0 && !p[f.length])) {
                    p[f.length] = f;
                    longest = Math.max(longest, f.length);
                }
            }

        }
        r++
    }

    return p[longest];
};

//O(n^3)