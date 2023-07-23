/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let len = nums.length;
    if (len < 2) return null;
    let diffs = {};
    for (let i = 0; i < len; i++) {
        if (diffs[nums[i]] !== undefined) return [diffs[nums[i]], i]
        diffs[target - nums[i]] = i; 
    }
    return null;
};

// Loop through nums
// save index of each loop with target - nums[i] as key
// That way when whenever diff[i] is not undefined, it means a previous
// number which sums up to target with diff[i] was already found.