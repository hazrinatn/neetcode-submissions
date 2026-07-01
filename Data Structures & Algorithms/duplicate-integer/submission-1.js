class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let container = [];
        for (let i = 0; i < nums.length; i++) {
            if (container[nums[i]] === 1) {
                return true
            } else {
                container[nums[i]] = 1
            }
        }
        return false;
    }
}
