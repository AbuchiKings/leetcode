class Solution:
    def longestPalindrome(self, s: str) -> str:
        res = ""
        resLen = 0
        
        for i in range(len(s)):
            #check for odd length palindromes
            l, r = i, i
            while l >= 0 and r < len(s) and s[l] == s[r]:
                if(r - l + 1) > resLen:
                    res = s[l:r+1] # substring starting from l and ending in r
                    resLen = r - l + 1
                l -= 1
                r += 1
            
            #check for even length palindromes
            l, r = i, i + 1
            while l >= 0 and r < len(s) and s[l] == s[r]:
                if(r - l + 1) > resLen:
                    res = s[l:r+1] # substring starting from l and ending in r
                    resLen = r - l + 1
                l -= 1
                r += 1
        return res


# O(n^2)
# In this solution we take each sigle string as a starting point and expand outwards 
# by using two pointers l and r.
# A panlidrome must start and end wth the same character. 
# edge case 1: To avoid going to a negative value, loop stops when r is less than zero
# edge case 2: check for even numbered palindromes by setting right pointer to always be 1
# ahead of left pointer and repeat same while loop
# My first solution in javascript has a running time of O(n^3) and occupies more space