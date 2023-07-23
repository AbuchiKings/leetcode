class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        #setup two pointers
        leftPointer = 0 #first pointer is set to zero
        chars = {}
        longest = 0 # This holds the length of longest substring so far
        length = len(s)
        for x in range(length):
            char = s[x]
            if char in chars and chars[char] >= leftPointer:
                leftPointer = chars[char] + 1
            else:
                longest = max(longest, x - leftPointer + 1)
            chars[char] = x
        return longest


# How it works
# In this python solution I used two pointers.
# leftPointer keeps track of the start of the unique string I am currently incrementing
# The second pointer is the loop index which is x
# I also created a hash table to hold each element encountered along the string and their index
# char is the key on the hash while the value to the key is the index of char in given string "s"
# While looping through "s" I check to see if my current char in the loop has been seen before
# if seen and index of seen is way later (or higher) than my leftPointer:
#   I move my left pointer ahead of the saved index for the current char.
# else I get the length of my current substring which will be "x-leftPointer + 1"
#   I used the max function to set the longest substring to which is longer between my current
#  substring and the value save in the longest
# I returned the longest at the end of the loop

# The running time for this algo is O(n) while my Javascript solution uses O(n^2), but takes
# less space