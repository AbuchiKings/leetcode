class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        if len(nums) < 2: return None
        diffs = {}
        x = 0
        while x < len(nums):
            if nums[x] in diffs: return [diffs[nums[x]], x] 
            diffs[target - nums[x]] = x 
            x+=1
        return None
